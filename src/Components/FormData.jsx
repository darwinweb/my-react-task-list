import { useContext } from "react";
import Context from "../contexts/context";
import { useForm } from "react-hook-form";
import { Input, FormLabel, Button, FormControl, Box } from "@chakra-ui/react";

function FormData () {
  
  const { register, handleSubmit, formState: { errors }, reset  } = useForm();

    const onSubmit = (data) => {
       crearTarea(data.newTask, data.description);
       reset();
    }

    const { crearTarea } = useContext(Context);

    return(    
        <Box>
            <form 
        className="container-form"
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
                    htmlSize={4}
                    onKeyPress={(e) => {
                        e.key = 'Enter'
                    }}/> 
                {errors.newTask?.type === 'required' && <p className="validacion">* El campo no puede estar vacio</p>}
                {errors.newTask?.type === 'minLength' && <p className="validacion">* El nombre debe contener al menos 3 caracteres</p>}
            </FormControl>
            
            <FormControl>
            <FormLabel className="label-descripcion">Descripcion (opcional)</FormLabel>
            <Input
                {...register('description', {
                  maxLength: 50,
                })}
                placeholder=" Máximo 50 caracteres. . . "

            />
             {errors.description?.type === 'maxLength' && <p className="validacion">* Ha superado el maximo de caracteres</p>}
            </FormControl>

            <div className="contenedor-agregar">
                <Button 
                    name="agregar" 
                    type="submit" 
                    m='20px' p='30px' 
                    bg='blue.300' 
                    style={{color:"white"}}
                    fontSize='20px'
                >
                    Agregar
                </Button>
            </div>

            
        </form>
        </Box>
        
    )};
    
export default FormData
