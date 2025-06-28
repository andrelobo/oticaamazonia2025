import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <Link to="/">
          <img src="/logo.png" alt="Ótica Amazônia" className="h-20" />
        </Link>

        {/* Botão Hamburguer Mobile */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu de navegação"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navegação principal */}
        <nav className="hidden md:flex gap-6 text-primary font-semibold">
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-4 text-primary font-semibold">
            <Link to="/" onClick={() => setIsOpen(false)}>Início</Link>
            <Link to="/sobre" onClick={() => setIsOpen(false)}>Sobre</Link>
            <Link to="/servicos" onClick={() => setIsOpen(false)}>Serviços</Link>
            <Link to="/contato" onClick={() => setIsOpen(false)}>Contato</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
