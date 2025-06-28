import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      {/* Adicione mais rotas aqui futuramente */}
    </Routes>
  )
}

export default Router
