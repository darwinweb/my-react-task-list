import './App.css'
import { useState } from 'react'
import FormData from './Components/FormData'
import Header from './Components/Header'
import TaskList from './Components/TaskList'


function App() {
  

  return (
    <>
     <Header/>
    <FormData  />
    <TaskList />
    </>
  )
}

export default App
