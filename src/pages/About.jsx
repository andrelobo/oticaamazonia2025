
import React from 'react'
import { FaHeart, FaEye, FaUsers } from 'react-icons/fa'

function About() {
  return (
    <main className="text-gray-800">
      {/* Missão */}
      <section className="bg-[#eef9f4] px-4 py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-6">
          <FaHeart className="text-secondary text-4xl shrink-0" />
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Nossa Missão</h2>
            <p className="text-lg leading-relaxed">
              Proporcionar soluções oftalmológicas de excelência com foco no cuidado humano,
              acessibilidade e inovação. Atendemos com empatia e responsabilidade,
              promovendo a saúde visual em Manaus e região.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-6">
          <FaEye className="text-secondary text-4xl shrink-0" />
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Nossos Valores</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Comprometimento com a saúde ocular da população</li>
              <li>Atendimento inclusivo e acolhedor</li>
              <li>Uso de tecnologia para diagnósticos precisos</li>
              <li>Ética e transparência em cada atendimento</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="bg-[#f0fdfa] px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <FaUsers className="text-secondary text-4xl shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Nossa Equipe</h2>
              <p className="text-lg">
                Conheça os profissionais que cuidam da sua visão com excelência e carinho.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <img
                  src={`/team-${i}.jpg`}
                  alt={`Profissional ${i} da Ótica Amazônia`}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-primary"
                />
                <p className="font-bold">Dr(a). Nome {i}</p>
                <p className="text-sm text-gray-600">Oftalmologista</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
