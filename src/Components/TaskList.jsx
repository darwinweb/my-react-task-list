import Task from "./Task"

function TaskList(){
    return(
        <div >
            <Task task="Levantarme a las 5:00 am" isComplete={false}/>
            <Task task="Hacer el mercado del mes"/>                  
            <Task task="Lavar la ropa y sacarla"/>
            <Task task="Recoger a los niños del colegio"/>
            <div className="clear">
            <button className="boton" style={{color:"white"}}>Clear All</button>
            </div>
        </div>
    )
}

export default TaskList