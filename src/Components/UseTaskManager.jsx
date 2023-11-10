import { useEffect, useState } from 'react'

const useTaskManager = () => {

    const [ tasks, setTasks ] = useState([])
    const [newTask, setNewTask] = useState('');
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

      const crearTarea = () => {
        if(newTask.trim() !== ''){
            addTask({
                id: Date.now(),
                description: newTask,
                isComplete: false
            });          
            setNewTask('')       
        }};

      const borrarTarea = (tarea) => {
        const updatedTasks = tasks.filter((task) => task.id !== tarea.id);  
        setTasks(updatedTasks);
        updateLocalStorage(updatedTasks);
      };

      const eliminarTodasLasTareas = () => {
        setTasks([]); 
        localStorage.removeItem('tasks'); 
      };

      const editarTarea = (tarea, newDescription) => {
        tarea.description = newDescription;
        setEditTask(null);
        updateLocalStorage(tasks);
      };

      const completarTarea = (tarea) => {
        tarea.isComplete = !tarea.isComplete;
        const updatedTasks = tasks.map((task) =>
          task.id === tarea.id ? tarea : task
        );
        setTasks(updatedTasks); 
        updateLocalStorage(updatedTasks); 
      };

      return {
        tasks,
        crearTarea,
        borrarTarea,
        editarTarea,
        eliminarTodasLasTareas,
        completarTarea,
        newTask,
        setNewTask,
        editTask,
        setEditTask
      };
    };

export default useTaskManager;