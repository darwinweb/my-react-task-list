import { useState } from "react"

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
        /> 
        <button onClick={agregarTarea} className="agregar" style={{color:"white"}}>+</button>
        </div>
    )
}

export default FormData