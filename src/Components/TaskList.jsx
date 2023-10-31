import { useState, useEffect } from 'react';

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
  
  const editarTarea = (tarea, newDescripcion) => {
    tarea.descripcion = newDescripcion;
    setEditTask(null);
    updateLocalStorage(tasks);
  };

  const eliminarTarea = (tarea) => {
    const updatedTasks = tasks.filter((task) => task.id !== tarea.id);  
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
       <div className="task" key={tarea.id}>
        <div >
        {editTask === tarea ? (
              <input
              className='input-update'
              type="text"
              defaultValue={tarea.descripcion}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  editarTarea(tarea, e.target.value);
                }
              }}
            />
          ) : (
            <div className="task-content">
              <p>Tarea: {tarea.description}</p>
              <button onClick={() => setEditTask(tarea)}>Edit</button>
              <button onClick={() =>  eliminarTarea(tarea)}>Delete</button>
            </div>
          )}
        </div>
      </div>
    ))}     
      <div className="clear">
        <button className="boton" style={{ color: "white" }} onClick={eliminarTodasLasTareas}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default TaskList;
