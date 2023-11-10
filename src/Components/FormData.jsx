import { FaPlus } from "react-icons/fa";
import useTaskManager from './UseTaskManager';

function FormData (){

    const {
        crearTarea,  
        newTask,
        setNewTask,
      } = useTaskManager();


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
                    crearTarea();
                    }
                }}
            /> 
             <button name="agregar"onClick={crearTarea} className="agregar" style={{color:"white"}}><FaPlus/></button>           
        </form>
    )};

export default FormData
