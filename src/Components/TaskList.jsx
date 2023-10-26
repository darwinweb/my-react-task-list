import listaTareas from './ListaTareas';

function TaskList() {
  return (
    <div >
      {listaTareas.map((tarea) => (
       <div className="task" key={tarea.titulo}>
        <div className="task-item">
            <input type="checkbox" className="seleccion" checked={tarea.isComplete} />          
             <p>Tarea: {tarea.descripcion}</p>
             <button>Edit</button>
             <button>Delete</button>
        </div >
       </div>
       ))}     
      <div className="clear">
        <button className="boton" style={{ color: "white" }}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default TaskList;
