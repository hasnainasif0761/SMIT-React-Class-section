import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from '../Context/ThemeProvider'
import AppRoute from './AppRoute'

const Navigation = () => {
  return (
    <ThemeProvider>
    <BrowserRouter>
    <AppRoute/>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default Navigation