import { FaPlus } from "react-icons/fa";
import { useState, useContext } from "react";
import Context from "../contexts/context";

function FormData (){

    const {
        crearTarea      
      } = useContext(Context);

      const [ newTask, setNewTask] = useState('')

      const createTask = (e) => {
        e.preventDefault()
        crearTarea(newTask)
        setNewTask('')
      } 

    return(    
        <form onSubmit={(e) => createTask(e)}>
            <h3>Agrega una tarea</h3>       
            <input 
                type="text" 
                placeholder="Ej: Entregar el proyecto..." 
                className="input"
                value={newTask}
                onChange={(e)=> setNewTask(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                    
                    }
                }}
            /> 
             <button name="agregar" type="submit" className="agregar" style={{color:"white"}}><FaPlus/></button>           
        </form>
    )};

export default FormData
