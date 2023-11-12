import { FaPlus } from "react-icons/fa";
import { useState, useContext } from "react";
import Context from "../contexts/context";

function FormData (){

    const {
        crearTarea      
      } = useContext(Context);

    const [ newTask, setNewTask] = useState('')
    const [description, setDescription] = useState('');
    

    const createTask = (e) => {
        e.preventDefault();
    
        if (newTask.trim().length < 3 || newTask.trim().length > 20) {
          alert("El título debe tener al menos 3 caracteres y no mas de 20");
          return;
        }
        if (description && description.length > 100) {
          alert("La descripción no debe superar los 100 caracteres.");
          return;
        }
        crearTarea(newTask, description);
        setNewTask("");
        setDescription("");
      };

    return(    
        <form 
        className="container-form"
        onSubmit={(e) => createTask(e)}>
            <h3 className="subtitulo">Agrega una tarea</h3>       
            <input 
                type="text" 
                placeholder="Ej: Entregar el proyecto..." 
                className="input-tittle"
                value={newTask}
                onChange={(e)=> setNewTask(e.target.value)}
                onKeyPress={(e) => {
                    e.key = 'Enter'
                }}
            /> 
                <button name="agregar" type="submit" className="agregar" style={{color:"white"}}><FaPlus/></button>           
            <textarea
                placeholder="Descripción (opcional, máximo 100 caracteres)"
                className="text-area"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </form>
    )};

export default FormData
