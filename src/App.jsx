import './App.css'
import { useState } from 'react'
import FormData from './Components/FormData'
import Header from './Components/Header'
import TaskList from './Components/TaskList'


function App() {
  const [tasks, setTasks]= useState([]);

  const addTask = (newTask)=>{
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    }); 
  };

  return (
    <>
     <Header/>
    <FormData addTask={addTask} />
    <TaskList tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
