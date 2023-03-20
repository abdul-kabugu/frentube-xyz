// @ts-nocheck
import { ChannelPage, Sidebar, TopNav } from '@/components'
import { client } from '@/graphql/apolloClient'
import { GET_USER_PROFILE } from '@/graphql/fragments/getUserProfile'
import { Box, HStack, Hide } from '@chakra-ui/react'
import Head from 'next/head'


export default function channelId({data, channelId}) {
  console.log("the data  in channel page", data)
  return (
    <>
     <Head>
      <title>
      {data?.accountById?.profileSpace.name  || data?.accountById?.profileSpace.handle || data?.accountById?.profileSpace.username || "FrenTube" }
     </title>
            <meta name='description' content={data?.accountById?.profileSpace?.summary} />

              {/* Twitter */}
<meta name="twitter:card" content={`FrenTube`} key="twcard" />
<meta name="twitter:creator" content={data?.accountById?.profileSpace.name  || data?.accountById?.profileSpace.handle || data?.accountById?.profileSpace.username || "FrenTube" } key="twhandle" />

{/* Open Graph */}
<meta property="og:url" content={`/channels/${channelId}`} key="ogurl" />
<meta property="og:image" content={`/img/banner.png`} key="ogimage" />
<meta property="og:site_name" content={`Poltube -  Decentralized video shring platform`} key="ogsitename" />
<meta property="og:title" content= {data?.accountById?.profileSpace.name  || data?.accountById?.profileSpace.handle || data?.accountById?.profileSpace.username || "FrenTube" } key="ogtitle" />
<meta property="og:description" content={"Poltube -  Decentralized video  sharing platform"} key="ogdesc" />
     </Head>
    <Box>
    <TopNav  />
    <HStack>
    <Hide below='md' >
<Box h="90vh"  w={{md : "30%" , lg : "300px"}} borderTop={2} borderColor="yellow"   >
 <Sidebar  />
</Box>
</Hide>
<ChannelPage    />
    </HStack>
  </Box>
  </>
  )
}

export  async function getServerSideProps (context)  {
  const {channelId} = context.params
   const {data} = await client.query({
   query : GET_USER_PROFILE,
   variables : {
    "accountByIdId" : channelId
   }
   })

   return{
     props : {
       data : data,
       userId : channelId
     }
   }
 }

