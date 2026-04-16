import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../pages/Navbar'

const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navbar/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation