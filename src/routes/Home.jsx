import React from 'react'
import Header from '../Components/Header'

const Home = () => {

  const appName = "Todo App"
  const welcome = `¡Bienvenido a ${appName}, tu compañero de tareas diarias! Estamos emocionados de tenerte aquí 
                    para ayudarte a organizar y simplificar tu vida cotidiana. Con ${appName}, 
                    puedes crear listas de tareas, asignar prioridades, establecer fechas límite 
                    y mantener un seguimiento de tus actividades diarias de manera eficiente.
                    Ya sea que estés planificando tu día, semana o mes, ${appName} está aquí para 
                    facilitar tu proceso de toma de decisiones y garantizar que no se te escape nada importante. 
                    ¡Haz de ${appName} tu aliado para lograr una mayor productividad y menos estrés!`

  return (
   <div className='home'>
    <Header/>
    <p className='texto-bienvenida'>{welcome}</p>
      </div>
  )
}

export default Home