// @ts-nocheck
import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { mobileNavigations } from '../assets/constant'


export default function MobileNav() {
  return (
       <Box  bg="red" >
        <Box pos='fixed' top="90vh" display="flex" justifyContent="space-between"  w="100%" bg="white" px={4} zIndex={10} >
       {mobileNavigations.map((item, i) => {

        return(
            <Link href={item.to} key={i}>
            <Box display="flex" flexDir="column" alignItems="center" gap={1} >
                <item.icon size={25}  />
                <Text fontWeight="semibold">{item.title}</Text>
            </Box>
            </Link>
        )
       })}
       </Box>
    </Box>
  )
}
