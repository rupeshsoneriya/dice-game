import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Startgame from '../pages/Startgame'
import Home from '../pages/Home'
function RoutingIndex() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/startgame' element={<Startgame/>} />
    </Routes>
    
      
    </BrowserRouter>
  )
}

export default RoutingIndex
