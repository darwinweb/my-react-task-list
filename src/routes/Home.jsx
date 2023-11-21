import React from 'react'
import { Card, Image, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'

const Home = () => {

  const appName = "Todo App"

  return (
 <Card maxW='lg'
      mt='40px'
      
  >
  <CardBody 
      
  >
    <Image
      src='https://avatars.githubusercontent.com/u/61118853?s=200&v=4'
      alt='Logo Ada school'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='lg'>Todo App</Heading>
      <Text>
          ¡Bienvenido a {appName}, tu compañero de tareas diarias! Estamos emocionados de tenerte aquí 
          para ayudarte a organizar y simplificar tu vida cotidiana. Con {appName}, 
          puedes crear listas de tareas, asignar prioridades, establecer fechas límite 
          y mantener un seguimiento de tus actividades diarias de manera eficiente.
          Ya sea que estés planificando tu día, semana o mes, {appName} está aquí para 
          facilitar tu proceso de toma de decisiones y garantizar que no se te escape nada importante. 
          ¡Haz de {appName} tu aliado para lograr una mayor productividad y menos estrés!.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  //  <div className='home'>
  //   <Header/>
  //   <p className='texto-bienvenida'>{welcome}</p>
  //     </div>
  )
}

export default Home