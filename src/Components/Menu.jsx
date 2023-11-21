import React from 'react'
import { Link } from 'react-router-dom'
import { Tabs, TabList, TabPanels, Tab } from '@chakra-ui/react'

const Menu = () => {
  return (
    <Tabs 
      mt='40px' 
      p='20px'
      colorScheme='blue'
      variant='enclosed'
    
      >
      <TabList  >
        <Tab _selected={{ color: 'white', bg: 'blue.500' }} 
              width='100px'
              borderRadius='0PX'
        >
          <Link to='/' >Home</Link>
        </Tab>
        <Tab _selected={{ color: 'white', bg: 'blue.500' }} 
          borderRadius='0PX'
        >
          <Link to='/sobre-nosotros' >Sobre Nosotros</Link>
        </Tab>
        <Tab _selected={{ color: 'white', bg: 'blue.500' }} 
              width='100px'
              borderRadius='0PX'
          >
          <Link to='/tareas' >Tareas</Link>
        </Tab>
      </TabList>
    </Tabs>
   
  )
}

export default Menu

