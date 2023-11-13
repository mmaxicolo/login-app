import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import RegisterPage from './pages/registerPage';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>home</h1>}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/ingredientes' element={<h1>hola mundo</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
