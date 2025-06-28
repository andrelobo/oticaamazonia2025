
import React from 'react'

function Services() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">Nossos Serviços</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-semibold mb-2">Consulta Oftalmológica</h3>
            <p>Exame completo da saúde ocular realizado por especialistas qualificados.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-semibold mb-2">Exame de Refração</h3>
            <p>Determinação precisa do grau necessário para seus óculos ou lentes de contato.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-semibold mb-2">Adaptação de Lentes</h3>
            <p>Lentes de contato ideais para seu conforto e estilo de vida.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
