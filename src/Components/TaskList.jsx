import { FaEdit, FaTrash } from 'react-icons/fa';
import { useContext } from 'react';
import Context from '../contexts/context';
import { Button, Checkbox } from '@chakra-ui/react';


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

              <Checkbox 
              onClick={() => completarTarea(tarea)}
              size='lg'
              colorScheme='green'
              p='10px'
              />            

              <p>
                <strong className='tarea'>Tarea: </strong>
                {tarea.isComplete ? <del>{tarea.tittle}</del> : tarea.tittle}
                <br/>
                {tarea.isComplete ? <del className='descripcion'>{tarea.description}</del> : <p className='descripcion'>{tarea.description}</p>  } 
              </p>

              <Button 
                w='50px' 
                onClick={() => setEditTask(tarea)}>
                <FaEdit className='edit-icon'/>
              </Button>

              <Button 
                w='50px'
                ml='15px'
                onClick={() =>  borrarTarea(tarea)}>
                <FaTrash className='delete-icon'/>
                </Button>

            </div>
          )}
        </div>
      </div>
    ))}     
      <div className="contenedor-clear">

        <Button 
         m='20px' p='30px' 
         bg='red.500' 
         name='limpiar'
         fontSize='20px'
        style={{ color: "white" }} 
        onClick={eliminarTodasLasTareas}>
          Limpiar
        </Button>
        
      </div>
    </div>
  );
}

export default TaskList;


