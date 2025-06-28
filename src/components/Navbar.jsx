
import React from 'react'

function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <img src="/logo.png" alt="Ótica Amazônia" className="h-20" />
        <nav className="hidden md:flex gap-6 text-primary font-semibold">
          <a href="#">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Serviços</a>
          <a href="#">Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
