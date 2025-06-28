import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Router from './routes/Router'

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Router />
      <Footer />
    </div>
  )
}

export default App
