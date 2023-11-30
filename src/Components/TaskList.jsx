import { FaEdit, FaTrash } from 'react-icons/fa';
import { useContext } from 'react';
import Context from '../contexts/context';
import { Button, Checkbox, Text, Box, Center, Input, Grid, GridItem, useColorMode } from '@chakra-ui/react';


function TaskList() {

  const { colorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark';

  const {
    tasks,
    borrarTarea,
    eliminarTodasLasTareas,
    editarTarea,
    completarTarea,
    editTask,
    setEditTask
  } = useContext(Context);
 
  return (
    <Center>
      <Box w='700px'>
      {tasks.map((tarea) => (
       <Box bg={isDarkMode? 'blue.800': 'blue.100'} mt='20px' p='10px' borderRadius='10px' pr='20px'
       key={tarea.id}>
        < Box >
        {editTask === tarea ? (
              <Input
              type="text"
              defaultValue={tarea.tittle}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  editarTarea(tarea, e.target.value);
                }
              }}
            />
            
          ) : (
            <Box >
              <Grid
                templateColumns='auto 1fr 45px 9%'
                alignItems="center"
                fontSize="15px"
                h='65px'
              >
              <GridItem>
                <Checkbox
                isChecked={tarea.isComplete}
                onChange={() => {completarTarea(tarea)}}
                size='lg'
                colorScheme='green'
                p='10px'
                border='green'
                /> 
              </GridItem>
              <GridItem>
                <Text ml='15px'fontSize='20px' >
                  <strong >Tarea: </strong>
                  {tarea.isComplete? <Text as='del' >{tarea.tittle}</Text>: tarea.tittle}
                  <br/>
                  {tarea.isComplete ? <Text as='del' m='0'color='gray' fontSize='md' >{tarea.description}</Text> : <Text m='0'color='gray' fontSize='md'>{tarea.description}</Text>  } 
                </Text>
              </GridItem>
              <GridItem>
                <Button 
                  w='50px' 
                  onClick={() => setEditTask(tarea)}>
                  <FaEdit color='gray'/>
                </Button>
              </GridItem>
              <GridItem>
                <Button 
                  w='50px'
                  ml='15px'
                  onClick={() =>  borrarTarea(tarea)}>
                  <FaTrash color='red' />
                  </Button>
              </GridItem>
              </Grid>
            </Box>
          )}
        </Box>
      </Box>
    ))}     
      < Box display="flex" 
            justifyContent="center" 
            alignItems="center"
        >

        <Button 
         m='20px' p='30px' 
         bg='red.500' 
         name='limpiar'
         fontSize='20px'
        color='white'
        onClick={eliminarTodasLasTareas}>
          Limpiar
        </Button>
        
      </Box>
    </Box>
    </Center>
    
  );
}

export default TaskList;


