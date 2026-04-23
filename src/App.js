import React from 'react'
import Navigation from './routes/Navigation.js'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
        <Toaster position='top-center' reverseOrder={false} />
        <Navigation/>
    </>
  )
}

export default App