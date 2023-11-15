import React from 'react'
import Context from './context'
import useTaskManager from '../Components/UseTaskManager'

export default function ContextProvider({children}) {
    const {
        tasks,
        borrarTarea,
        eliminarTodasLasTareas,
        editarTarea,
        crearTarea,
        completarTarea,
        editTask,
        setEditTask
      } = useTaskManager();
     


  return (
    <Context.Provider value={{
        tasks,
        borrarTarea,
        eliminarTodasLasTareas,
        editarTarea,
        crearTarea,
        completarTarea,
        editTask,
        setEditTask
      }}>
        {children}
    </Context.Provider>
  )
}


