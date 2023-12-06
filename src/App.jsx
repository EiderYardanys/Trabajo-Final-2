import { Route, Routes } from 'react-router-dom'
import './App.css'
import ContenedorTarjetas from './Componentes/ContenedorTarjetas/ContenedorTarjetas'
import Footer from './Componentes/Footer/Footer'
import Login from './Componentes/Login/Login'
import NavBar from './Componentes/NavBar/NavBar'


function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tarjetas" element={<ContenedorTarjetas />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
