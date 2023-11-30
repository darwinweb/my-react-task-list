import React from 'react'
import { Center, Spinner } from '@chakra-ui/react'


 function Loading() {
  return (
    <Center  h='90vh' >
        <Spinner
              thickness='4px'
              speed='0.75s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
             
            />
    </Center>
  )
}

export default Loading