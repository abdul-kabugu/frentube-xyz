// @ts-nocheck
import { IPFS_GATEWAY } from '@/assets/constant'
import { Discover, Sidebar, TopNav, VideoDetails } from '@/components'
import { GET_POST_BY_ID } from '@/graphql/fragments/getPostById'
import { Box, Hide, HStack } from '@chakra-ui/react'
import Head from 'next/head'
import {client} from '../../graphql/apolloClient'

export default function videoId({data, vidId}) {
  console.log("the data from video  id comps", data)
  return (
    <>
   <Head>
            <title>{data?.postById?.title}</title>
            <meta name='description' content={data?.postById?.title} />

              {/* Twitter */}
<meta name="twitter:card" content={data?.postById?.title} key="twcard" />
<meta name="twitter:creator" content={data?.postById?.name || data?.postById?.createdByAccount?.profileSpace?.name} key="twhandle" />

{/* Open Graph */}
<meta property="og:url" content={`/watch/${vidId}`} key="ogurl" />
<meta property="og:image" content={`${IPFS_GATEWAY}${data?.postById?.body}`} key="ogimage" />
<meta property="og:site_name" content={`Poltube -  Decentralized video shring platform`} key="ogsitename" />
<meta property="og:title" content={data?.postById?.title} key="ogtitle" />
<meta property="og:description" content={data?.postById?.title} key="ogdesc" />
        </Head>
    <Box>
    <TopNav  />
    <HStack>
    <Hide below='md' >
<Box h="90vh"  w={{md : "30%" , lg : "300px"}} borderTop={2} borderColor="yellow"   >
<Sidebar />
</Box>
</Hide>
<VideoDetails />
    </HStack>
  </Box>
  </>
  )
}

  export  async function getServerSideProps (context)  {
   const {videoId} = context.params
    const {data} = await client.query({
    query : GET_POST_BY_ID,
    variables : {
      "postByIdId": videoId
    }
    })

    return{
      props : {
        data : data,
        vidId : videoId
      }
    }
  }
