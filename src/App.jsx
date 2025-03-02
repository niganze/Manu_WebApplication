import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App