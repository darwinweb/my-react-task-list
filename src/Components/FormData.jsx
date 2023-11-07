import { useState } from "react"
import { FaPlus } from "react-icons/fa";

function FormData ({addTask}){
    
    const [newTask, setNewTask] = useState('');
   
    const agregarTarea = () => {
        if(newTask.trim() !== ''){
            addTask({
                id: Date.now(),
                description: newTask,
                isComplete: false
            });          
            setNewTask('')       
        }};

    return(    
        <form>
            <h3>Agrega una tarea</h3>       
            <input 
                type="text" 
                placeholder="Ej: Entregar el proyecto..." 
                className="input"
                value={newTask}
                onChange={(e)=> setNewTask(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                    agregarTarea();
                    }
                }}
            /> 
             <button name="agregar"onClick={agregarTarea} className="agregar" style={{color:"white"}}><FaPlus/></button>           
        </form>
    )};

export default FormData