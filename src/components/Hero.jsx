import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { FaEye, FaMicroscope } from 'react-icons/fa'

function Hero() {
  const slides = [
    {
      image: '/carousel-1.jpg',
      title: 'Cuide da Saúde dos Seus Olhos',
      subtitle: 'Os Melhores Óculos e Lentes para Você',
      icon: <FaEye className="inline-block mr-2 text-white text-2xl" />,
      cta1: { label: 'Agendar Consulta', link: '/agendamento' },
      cta2: { label: 'Fale Conosco', link: '/contato' },
    },
    {
      image: '/carousel-2.jpg',
      title: 'Tecnologia de Ponta',
      subtitle: 'Exames Oftalmológicos Precisos',
      icon: <FaMicroscope className="inline-block mr-2 text-white text-2xl" />,
      cta1: { label: 'Agendar Consulta', link: '/agendamento' },
      cta2: { label: 'Nossos Serviços', link: '/servicos' },
    },
  ]

  return (
    <section className="w-full relative">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={5000}
        showArrows={true}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover h-[80vh] w-full"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-white text-xl md:text-2xl font-semibold uppercase mb-2 flex items-center justify-center gap-2">
                {slide.icon}
                {slide.title}
              </h2>
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-6">
                {slide.subtitle}
              </h1>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={slide.cta1.link}
                  className="bg-primary hover:bg-darkgreen text-white font-semibold px-6 py-3 rounded transition"
                >
                  {slide.cta1.label}
                </a>
                <a
                  href={slide.cta2.link}
                  className="bg-white hover:bg-gray-200 text-primary font-semibold px-6 py-3 rounded transition"
                >
                  {slide.cta2.label}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default Hero
