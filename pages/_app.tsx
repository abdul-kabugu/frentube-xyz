// @ts-nocheck
import '@/styles/globals.css'
import { SubsocialContextProvider } from '@/subsocial/provider'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { client } from '../graphql/apolloClient'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <meta charset="UTF-8" />
        <meta name="keywords" content="FrenTube, Decentralized, SocialFi, Video-shring, subsocial, youtube, nfts" />
        <meta name="author" content="FrenTube" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

              {/* Twitter */}
<meta name="twitter:card" content={`FrenTube`} key="twcard" />
<meta name="twitter:creator" content={`FrenTube - Decentralized video-shring platform`} key="twhandle" />

{/* Open Graph */}
<meta property="og:url" content={`/`} key="ogurl" />
<meta property="og:image" content={`/img/banner.png`} key="ogimage" />
<meta property="og:site_name" content={`Poltube -  Decentralized video shring platform`} key="ogsitename" />
<meta property="og:title" content={`FrenTube - decentralized video shring platform`} key="ogtitle" />
<meta property="og:description" content={`FrenTube - Decentralized video  sharing  platform  on subsocial`} key="ogdesc" />
    </Head>
  <ChakraProvider>
     <ApolloProvider client={client}>
      <SubsocialContextProvider>
       <Component {...pageProps} />
       </SubsocialContextProvider>
     </ApolloProvider>
  </ChakraProvider>
  </>
  ) 
}
