import React from 'react'
import { FaStethoscope, FaGlasses, FaEyeDropper } from 'react-icons/fa'

function Services() {
  const services = [
    {
      title: 'Consulta Oftalmológica',
      description: 'Exame completo da saúde ocular realizado por especialistas qualificados.',
      icon: <FaStethoscope className="text-primary text-4xl mb-4" />,
    },
    {
      title: 'Exame de Refração',
      description: 'Determinação precisa do grau necessário para seus óculos ou lentes de contato.',
      icon: <FaGlasses className="text-primary text-4xl mb-4" />,
    },
    {
      title: 'Adaptação de Lentes',
      description: 'Lentes de contato ideais para seu conforto e estilo de vida.',
      icon: <FaEyeDropper className="text-primary text-4xl mb-4" />,
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-primary">Nossos Serviços</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white shadow rounded text-center">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
