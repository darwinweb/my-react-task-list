import { useContext } from "react";
import Context from "../contexts/context";
import { useForm } from "react-hook-form";
import { Input, FormLabel, Button, FormControl, Box, Text, Center } from "@chakra-ui/react";

function FormData () {
  
  const { register, handleSubmit, formState: { errors }, reset  } = useForm();

    const onSubmit = (data) => {
       crearTarea(data.newTask, data.description);
       reset();
    }

    const { crearTarea } = useContext(Context);

    return(  
        <Center>
            <Box mt='50px'> 
            <form 
        
        onSubmit={handleSubmit(onSubmit)}>

            <FormControl isRequired >
                <FormLabel>Ingresa una Tarea</FormLabel>       
                <Input
                    {...register('newTask', {
                    required: true,
                    maxLength: 30,
                    minLength: 3
                    })}
                    type="text" 
                    placeholder="Ej: Entregar el proyecto..." 
                    w='700px'
                    htmlSize={4}
                    onKeyPress={(e) => {
                        e.key = 'Enter'
                    }}/> 
                {errors.newTask?.type === 'required' && <Text color='red' m='0' fontSize='sm'>* El campo no puede estar vacio</Text>}
                {errors.newTask?.type === 'minLength' && <Text color='red' m='0' fontSize='sm'>* El nombre debe contener al menos 3 caracteres</Text>}
            </FormControl>
            
            <FormControl>
            <FormLabel mt='10px'>Descripcion </FormLabel>
            <Input
                {...register('description', {
                  maxLength: 50,
                })}
                placeholder=" Máximo 50 caracteres. . . "
                w='700px'

            />
             {errors.description?.type === 'maxLength' && <Text color='red' m='0' fontSize='sm'>* Ha superado el maximo de caracteres</Text>}
            </FormControl>

            <Box display="flex" 
                justifyContent="center" 
                alignItems="center"
            >
                <Button 
                    name="agregar" 
                    type="submit" 
                    m='20px' p='30px' 
                    bg='blue.500' 
                    color="white"
                    fontSize='20px'
                    
                >
                    Agregar
                </Button>
            </Box>

            
        </form>
        </Box>
        </Center>  
        
        
    )};
    
export default FormData
