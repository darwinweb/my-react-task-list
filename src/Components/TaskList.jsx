import { FaEdit, FaTrash, FaCheckSquare } from 'react-icons/fa';
import { useContext } from 'react';
import Context from '../contexts/context';


function TaskList() {

  const {
    tasks,
    borrarTarea,
    eliminarTodasLasTareas,
    editarTarea,
    completarTarea,
    editTask,
    setEditTask
  } = useContext(Context);
 
  console.log(tasks)
  return (
    <div >
      {tasks.map((tarea) => (
       <div className='task' key={tarea.id}>
        <div >
        {editTask === tarea ? (
              <input
              className='input-update'
              type="text"
              defaultValue={tarea.tittle}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  editarTarea(tarea, e.target.value);
                }
              }}
            />
          ) : (
            <div className="task-content">

              <input 
                type='checkbox'
                className='completar'
                onClick={() => completarTarea(tarea)}/>                   

              <p>
                <strong>Tarea: </strong>
                {tarea.isComplete ? <del>{tarea.tittle}</del> : tarea.tittle}
                <br/>
                {tarea.isComplete ? <del>{tarea.description}</del> : tarea.description } 
              </p>

              <button 
                className='editar' 
                onClick={() => setEditTask(tarea)}>
                <FaEdit className='edit-icon'/>
              </button>

              <button 
              className='borrar'
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
          Limpiar
        </button>
        
      </div>
    </div>
  );
}

export default TaskList;


