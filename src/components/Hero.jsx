import React, { useState, useEffect } from 'react'
import { Sparkles, Terminal, AlertCircle } from 'lucide-react'
import imagemFacomp from '../../imagem_facomp.png'

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2026-08-26T00:00:00')

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-secomp-darker/80 backdrop-blur-sm border border-secomp-border/50 rounded-xl px-4 py-3 min-w-[80px] shadow-lg">
        <span className="text-3xl font-black text-white">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-secomp-text/80 mt-3 uppercase tracking-wider font-medium">{label}</span>
    </div>
  )

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-6 pb-8 overflow-x-hidden">
      <div className="text-center max-w-6xl mx-auto mb-12 px-4 md:px-0">
        {/* Badge moved to overlay on image */}
      </div>

      {/* FACOMP Image + Countdown Container - Full width */}
      <div className="relative w-full mb-12 overflow-hidden">
        <div className="relative w-full overflow-hidden">
          <img
            src={imagemFacomp}
            alt="Imagem FACOMP"
            className="w-full h-auto object-cover object-center block"
          />

          {/* Badge - Overlay on image */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="inline-flex items-center gap-2 bg-secomp-cyan/10 backdrop-blur-sm border border-secomp-cyan/30 rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-secomp-cyan" />
              <span className="text-secomp-cyan text-sm font-medium">
                1ª Edição • 26 a 29 de Agosto de 2026
              </span>
            </div>
          </div>

          {/* Countdown Card - Enhanced positioning */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-secomp-card/95 backdrop-blur-sm border border-secomp-border rounded-3xl p-10 shadow-2xl">
            <p className="text-secomp-text uppercase tracking-widest text-sm mb-8 font-semibold text-center">Faltam</p>
            <div className="flex items-center gap-4">
              <TimeBlock value={timeLeft.days} label="Dias" />
              <span className="text-3xl text-secomp-cyan font-bold">:</span>
              <TimeBlock value={timeLeft.hours} label="Horas" />
              <span className="text-3xl text-secomp-cyan font-bold">:</span>
              <TimeBlock value={timeLeft.minutes} label="Minutos" />
              <span className="text-3xl text-secomp-cyan font-bold">:</span>
              <TimeBlock value={timeLeft.seconds} label="Segundos" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center max-w-6xl mx-auto px-4 md:px-0">
        {/* Subtitle with better hierarchy */}
        <div className="mb-8">
          <p className="text-2xl md:text-3xl lg:text-4xl text-secomp-text font-light mb-6 leading-relaxed">
            Semana da Computação da UFPA
          </p>

          {/* Location with enhanced styling */}
          <div className="inline-flex items-center gap-3 bg-secomp-darker/50 border border-secomp-border/50 rounded-full px-8 py-4">
            <Terminal className="w-5 h-5 text-secomp-cyan" />
            <span className="font-mono text-secomp-cyan text-lg font-medium">Belém, Pará</span>
          </div>
        </div>

        {/* Call to Action or Additional Info */}
        <div className="mt-8">
          <p className="text-secomp-text/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Quatro dias de palestras, oficinas e atividades voltadas para o desenvolvimento
            profissional e acadêmico na área da computação.
          </p>
        </div>
      </div>

      {/* Announcement Card - Enhanced */}
      <div className="w-full mt-16 mb-24 px-4">
        <div className="relative max-w-3xl mx-auto bg-secomp-card/80 backdrop-blur-sm border-2 border-yellow-400/60 rounded-3xl p-12 shadow-2xl shadow-yellow-400/10">
          {/* Prorrogação Banner */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center gap-2 bg-yellow-400 text-secomp-dark font-bold uppercase tracking-wider text-sm px-5 py-2 rounded-full shadow-lg animate-pulse">
              <AlertCircle className="w-4 h-4" />
              Prazo Prorrogado
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6 mt-2">
            <Sparkles className="w-10 h-10 text-secomp-cyan" />
            <h3 className="text-3xl font-bold text-white text-center">Concurso: Chamada Criativa</h3>
          </div>
          <p className="text-secomp-text text-lg leading-relaxed mb-6 text-center max-w-xl mx-auto">
            Chamada Criativa para escolha da logomarca da SECOMP.
          </p>

          {/* New deadline highlight */}
          <div className="max-w-md mx-auto mb-8 bg-yellow-400/10 border border-yellow-400/40 rounded-xl p-4 text-center">
            <p className="text-yellow-300 text-sm uppercase tracking-wider font-semibold mb-1">
              Nova data limite para inscrições
            </p>
            <p className="text-white text-2xl font-bold">
              24/05/2026 <span className="text-secomp-text text-base font-normal">às 23:59</span>
            </p>
            <p className="text-secomp-text text-sm mt-2">
              As inscrições foram prorrogadas — não perca o prazo!
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => window.open('/Edital_Chamada_criativa_Logomarca_novo.pdf', '_blank')}
              className="bg-secomp-cyan hover:bg-secomp-cyan/80 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Ver Edital Atualizado
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
