import { useContext } from "react";
import Context from "../contexts/context";
import { useForm } from "react-hook-form";

function FormData () {
  
  const { register, handleSubmit, formState: { errors }, reset,  } = useForm();

    const onSubmit = (data) => {
       crearTarea(data.newTask, data.description);
       reset();
    }

    const { crearTarea } = useContext(Context);

    return(    
        <form 
        className="container-form"
        onSubmit={handleSubmit(onSubmit)}>
            <label className="subtitulo">Ingresa una Tarea</label>       
            <input 
                {...register('newTask', {
                  required: true,
                  maxLength: 30,
                  minLength: 3
                })}
                type="text" 
                placeholder="Ej: Entregar el proyecto..." 
                className="input-tittle"
                onKeyPress={(e) => {
                    e.key = 'Enter'
                }}/> 
            {errors.newTask?.type === 'required' && <p className="validacion">El campo no puede estar vacio</p>}
            {errors.newTask?.type === 'minLength' && <p className="validacion">El nombre debe contener al menos 3 caracteres</p>}
            
            <label className="label-descripcion">Descripcion (opcional)</label>
            <textarea
                {...register('description', {
                  maxLength: 100,
                })}
                placeholder=" Máximo 100 caracteres. . . "
                className="text-area"

            />
            <div className="contenedor-agregar">
                <button name="agregar" type="submit" className="agregar" style={{color:"white"}}>Agregar</button>
            </div>

            
        </form>

        
    )};
    
export default FormData
