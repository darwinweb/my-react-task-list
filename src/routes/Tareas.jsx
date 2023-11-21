import React from 'react'
import FormData from '../Components/FormData'
import TaskList from '../Components/TaskList'


 const Tareas = () => {
  return (
    <div className='containter-tareas'>
      <FormData/>
      <TaskList/>
    </div>
  )
}

export default Tareas;
