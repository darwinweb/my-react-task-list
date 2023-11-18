import './App.css'
import FormData from './Components/FormData'
import Header from './Components/Header'
import TaskList from './Components/TaskList'
import ContextProvider from './contexts/contextProvider'

function App() {


  return (
    <div className='container-app'>
    <ContextProvider>
    <Header/>
    <FormData  />
    <TaskList />
    </ContextProvider>
    </div>
  )
}

export default App
