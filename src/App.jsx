import './App.css'
import Home from './routes/Home';
import ContextProvider from './contexts/contextProvider'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreNosotros from './routes/SobreNosotros';
import  Tareas  from './routes/Tareas';
import Menu from './Components/Menu';

function App() {

  return (
    <div className='container-app'>
    <BrowserRouter>
      <ContextProvider>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobre-nosotros' element={<SobreNosotros/>}/>
          <Route path='/Tareas' element={<Tareas/>}/>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
