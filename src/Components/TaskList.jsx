import { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaCheckSquare } from 'react-icons/fa';


function TaskList({tasks, setTasks}) {
  const [editTask, setEditTask] = useState()
  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);
  
  const updateLocalStorage = (updatedTasks) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const editarTarea = (tarea, newDescription) => {
    tarea.description = newDescription;
    setEditTask(null);
    updateLocalStorage(tasks);
  };

  const eliminarTarea = (tarea) => {
    const updatedTasks = tasks.filter((task) => task.id !== tarea.id);  
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const completarTarea = (tarea) => {
    tarea.isComplete = !tarea.isComplete;
    const updatedTasks = tasks.map((task) =>
      task.id === tarea.id ? tarea : task
    );
    setTasks(updatedTasks); 
    updateLocalStorage(updatedTasks); 
  };

  const eliminarTodasLasTareas = () => {
    setTasks([]); 
    localStorage.removeItem('tasks'); 
  };

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
              <button onClick={() => completarTarea(tarea)}><FaCheckSquare className='complete-icon'/></button>
              <p>
                <strong>Tarea: </strong>
                {tarea.isComplete ? <del>{tarea.description}</del> : tarea.description}
              </p>
              <button className='boton-edit' onClick={() => setEditTask(tarea)}><FaEdit className='edit-icon'/></button>
              <button onClick={() =>  eliminarTarea(tarea)}><FaTrash className='delete-icon'/></button>
            </div>
          )}
        </div>
      </div>
    ))}     
      <div className="contenedor-clear">
        <button className="boton-clear" style={{ color: "white" }} onClick={eliminarTodasLasTareas}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default TaskList;
