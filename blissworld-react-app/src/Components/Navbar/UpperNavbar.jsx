import React from 'react'
import { Search2Icon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

export default function UpperNavbar() {
    return (      
      <Box display='flex' mt='35' bg='skyblue' maxW='100%' maxH='150'>
            <Box display='flex' mt='2' ml='10'>
            <Box>
            <Box>
            <Search2Icon w={5} h={5} />
            </Box>
            <Box>
              <p>Search</p>
            </Box>
            </Box>

            <Box ml='5'>
            <Box>
            <Search2Icon w={5} h={5} />
            </Box>
            <Box>
              <h4>Search</h4>
            </Box>
            </Box>
            </Box>

            <Box ml='36%'>
              <Image boxSize='100px' objectFit='cover' src='https://tse4.mm.bing.net/th?id=OIP.eNAa2flvx59wgsY6Kh2RzQHaHa&pid=Api&P=0' />
            </Box>
           </Box> 
    )
}



