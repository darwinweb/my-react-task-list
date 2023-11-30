import React from 'react'
import { Box, Image, Heading, Text, Center, useColorMode } from '@chakra-ui/react'

const Home = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const appName = "Todo App"

  return (

    <Center as='section' bg={isDarkMode ? 'gray.700' : 'blue.100'} h='100vh' mt='20px'  >
      <Box w='500px' bg={isDarkMode ? 'gray.600' : 'white'} p='8' h='80vh'  >
        <Image
          src='https://avatars.githubusercontent.com/u/61118853?s=200&v=4'
          alt='Logo Ada school'
          objectFit='cover'
          mx='auto'
          w='100px'
        />
        <Center>
          <Heading my='6'>Todo App</Heading>
        </Center>
        <Text textAlign='justify'fontSize='lg'  >
           ¡Bienvenido a {appName}, tu compañero de tareas diarias! Estamos emocionados de tenerte aquí 
            para ayudarte a organizar y simplificar tu vida cotidiana. Con {appName}, 
            puedes crear listas de tareas, asignar prioridades, establecer fechas límite 
            y mantener un seguimiento de tus actividades diarias de manera eficiente.
            Ya sea que estés planificando tu día, semana o mes, {appName} está aquí para 
            facilitar tu proceso de toma de decisiones y garantizar que no se te escape nada importante. 
            ¡Haz de {appName} tu aliado para lograr una mayor productividad y menos estrés!.
        </Text>
      </Box>
    </Center>
  )
}

export default Home