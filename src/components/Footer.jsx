import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-darkgreen text-white pt-10 pb-6 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://wa.me/5592999999999"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Converse conosco no WhatsApp"
          className="text-white hover:text-primary transition text-2xl"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://instagram.com/oticaamazonia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Siga-nos no Instagram"
          className="text-white hover:text-primary transition text-2xl"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Ótica Amazônia — A amiga dos seus olhos.
      </p>
    </footer>
  )
}

export default Footer
