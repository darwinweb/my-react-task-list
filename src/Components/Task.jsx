function Task({task}){
    return(
        <div className="task">
            <input type="radio"className="seleccion" />
            <p>{task}</p>
            <div className="icons-container">
                <img src="./src/icons/editing.png" alt="Ícono 2" title="edit" className="icon" />
                <img src="./src/icons/delete.png" alt="Ícono 1" title="delete" className="icon" />
            </div>
            
        </div>
    )
}

export default Task
