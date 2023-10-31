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
        }
    }

    return(
        <div className="add">
        <input 
        type="text" 
        placeholder="Add your new todo" 
        className="input"
        value={newTask}
        onChange={(e)=> setNewTask(e.target.value)}
        onKeyPress={(e) => {
            if (e.key === 'Enter') {
              agregarTarea();
            }
          }}
        /> 
        <button onClick={agregarTarea} className="agregar" style={{color:"white"}}><FaPlus/></button>
        </div>
    )
}

export default FormData