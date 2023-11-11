import './App.css'
import FormData from './Components/FormData'
import Header from './Components/Header'
import TaskList from './Components/TaskList'
import ContextProvider from './contexts/contextProvider'


function App() {
  

  return (
    <>
    <ContextProvider>
    <Header/>
    <FormData  />
    <TaskList />
    </ContextProvider>
    </>
  )
}

export default App
