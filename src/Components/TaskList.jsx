import { FaEdit, FaTrash, FaCheckSquare } from 'react-icons/fa';
import useTaskManager from './UseTaskManager';


function TaskList() {
  const {
    tasks,
    borrarTarea,
    eliminarTodasLasTareas,
    editarTarea,
    completarTarea,
    editTask,
    setEditTask
  } = useTaskManager();
 

  return (
    <div >
      {tasks.map((tarea) => (
       <div className='task' key={tarea.id}>
        <div >
        {editTask === tarea ? (
              <input
              className='input-update'
              type="text"
              defaultValue={tarea.description}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  editarTarea(tarea, e.target.value);
                }
              }}
            />
          ) : (
            <div className="task-content">
              <button 
              onClick={() => completarTarea(tarea)}>
                <FaCheckSquare className='complete-icon'/>
                </button>
              <p>
                <strong>Tarea: </strong>
                {tarea.isComplete ? <del>{tarea.description}</del> : tarea.description}
              </p>
              <button 
              className='boton-edit' 
              onClick={() => setEditTask(tarea)}>
                <FaEdit className='edit-icon'/>
                </button>
              <button 
              onClick={() =>  borrarTarea(tarea)}>
                <FaTrash className='delete-icon'/>
                </button>
            </div>
          )}
        </div>
      </div>
    ))}     
      <div className="contenedor-clear">
        <button 
        className="boton-clear" 
        style={{ color: "white" }} 
        onClick={eliminarTodasLasTareas}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default TaskList;


