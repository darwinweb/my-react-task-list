import React from 'react'
import { Box, Heading, Text, UnorderedList, ListItem, useColorMode } from "@chakra-ui/react";

const SobreNosotros = () => {

  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <Box textAlign='justify'   >
      <Box mb='5' bg={isDarkMode? 'blue.800': 'blue.100'}p='20px' >
      <header>
        <Heading fontSize="4xl" mb='3' >Todo App</Heading>
        <Text>Una aplicación para gestionar tus tareas y listas de quehaceres.</Text>
      </header>
      </Box>

      <Box mb='5'p='20px' bg={isDarkMode? 'gray.700': 'white'}>
      <section>
        <Heading fontSize="2xl" mb='2'  >Producto y Propósito:</Heading>
        <Text mb='2'>
          Esta aplicación se ha diseñado para ayudar a las personas a administrar 
          sus tareas y listas de quehaceres de manera sencilla y eficiente.
        </Text>
        <Text>
          Su propósito principal es servir como una herramienta de organización 
          personal que permite a los usuarios registrar, editar, eliminar y realizar un 
          seguimiento de sus tareas, incluyendo la capacidad de marcar tareas como completadas.
        </Text>
      </section>
      </Box>

      <Box mb='5'  bg={isDarkMode? 'blue.800': 'blue.100'} p='20px' >
      <section>
        <Heading fontSize="2xl">Funcionalidades Clave:</Heading>
        <UnorderedList>
          <ListItem>Añadir Tareas: Los usuarios pueden agregar nuevas tareas...</ListItem>
          <ListItem>Editar Tareas: Los usuarios pueden editar el texto de sus tareas existentes...</ListItem>
          <ListItem>Eliminar Tareas: Los usuarios pueden eliminar tareas que ya no son relevantes...</ListItem>
          <ListItem>Marcar Tareas como Completadas: Los usuarios pueden marcar sus tareas como completadas...</ListItem>
          <ListItem>Almacenamiento Local: La aplicación utiliza almacenamiento local (localStorage)...</ListItem>
        </UnorderedList>
      </section>
      </Box>

      <Box mb='5' p='20px'  bg={isDarkMode? 'gray.700': 'white'}>
      <section>
        <Heading fontSize="2xl">¿Por qué los usuarios usarían esta aplicación?</Heading>
        <UnorderedList>
          <ListItem>Organización: Les permite mantener un registro claro de todas sus tareas pendientes...</ListItem>
          <ListItem>Sencillez: La aplicación es fácil de usar...</ListItem>
          <ListItem>Accesibilidad: Como una aplicación web, los usuarios pueden acceder a ella desde cualquier dispositivo...</ListItem>
          <ListItem>Persistencia: La capacidad de almacenar tareas localmente garantiza que los usuarios no perderán sus datos...</ListItem>
          <ListItem>Flexibilidad: La aplicación es versátil y puede adaptarse a las necesidades de cualquier usuario...</ListItem>
        </UnorderedList>
      </section>
      </Box>

      <Box mb='' bg={isDarkMode? 'blue.800': 'blue.100'} p='20px' >
        <section>
        <Heading fontSize="2xl">Tecnologías Utilizadas</Heading>
        <UnorderedList>
          <ListItem>JavaScript</ListItem>
          <ListItem>React</ListItem>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
        </UnorderedList>
      </section>
      </Box>
    </Box>
  )
}

export default SobreNosotros