import './App.css'
import ContextProvider from './contexts/contextProvider'
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import { Box } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import Menu from './Components/Menu';
import Loading from './Components/Loading';
import ButtonTheme from './Components/ButtonTheme';

const Home = lazy(() => import('./routes/Home'))
const SobreNosotros = lazy(() => import('./routes/SobreNosotros'))
const Tareas = lazy(() => import('./routes/Tareas'))

function App() {

  return (
    <Box w='900px' >
    <BrowserRouter>
      <ContextProvider>
        < ButtonTheme />
        < Menu />
        <Routes>
          <Route path='/' element={
            <Suspense fallback={< Loading />} >
               < Home />
            </Suspense>
          }/>
          <Route path='/sobre-nosotros' element={
            <Suspense fallback={< Loading />} >
             < SobreNosotros />
           </Suspense>
          }/>
          <Route path='/Tareas' element={
          <Suspense fallback={< Loading />} >
            <Tareas/>
          </Suspense>
          }/>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
    </Box>
  )
}

export default App
