import { Sidebar, TopNav } from '@/components'
import UploadPage from '@/components/UploadPage'
import { Box , HStack, Hide, } from '@chakra-ui/react'
import React from 'react'

export default function upload() {
  return (
    <Box>
    <TopNav  />
    <HStack>
    <Hide below='md' >
<Box h="90vh"  w={{md : "30%" , lg : "300px"}} borderTop={2} borderColor="yellow"   >
<Sidebar  />
</Box>
</Hide>
<UploadPage  />
    </HStack>
  </Box>
  )
}
