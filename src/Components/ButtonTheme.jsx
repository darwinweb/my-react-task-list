import { Button, Heading, useColorMode } from "@chakra-ui/react"
import { FaSun, FaMoon } from "react-icons/fa";


function ButtonTheme () {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <Heading pos='relative'>
        <Button 
        position='absolute'
        right={3}
        bottom='1px'
        onClick={toggleColorMode}
        >
           {colorMode === 'light' ? <FaMoon /> : <FaSun />}
        </Button>
      </Heading>
    )
  }

export default ButtonTheme;