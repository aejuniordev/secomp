import React from 'react'
import { Cpu, Users, Lightbulb, Globe } from 'lucide-react'
import imagemFundo from '../../imagem_fundo.webp'

const SobreEvento = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Atualização Técnica',
      description: 'Palestras e minicursos sobre IA, Ciência de Dados e Segurança da Informação',
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Conexão entre universidade, empresas e profissionais do setor',
    },
    {
      icon: Lightbulb,
      title: 'Inovação Regional',
      description: 'Soluções alinhadas às demandas locais e desenvolvimento sustentável',
    },
    {
      icon: Globe,
      title: 'Ecossistema Tech',
      description: 'Fortalecimento da comunidade de tecnologia em Belém',
    },
  ]

  return (
    <section 
      id="sobre" 
      className="py-24 px-4 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imagemFundo})` }}
    >
      {/* Overlay para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sobre o Evento</h2>
          <div className="w-16 h-1 bg-secomp-cyan mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6 text-white leading-relaxed">
            <p>
              Em 2026, realiza-se a primeira edição da{' '}
              <strong className="text-white">Semana da Computação da UFPA (SECOMP)</strong>,
              organizada por professores e estudantes dos cursos de graduação em Ciência da
              Computação, Sistemas de Informação e Inteligência Artificial, bem como do Programa
              de Pós-Graduação em Computação (PPGCC).
            </p>
            <p>
              A programação contempla palestras, oficinas e a fase regional da{' '}
              <strong className="text-white">Maratona de Programação</strong> promovida pela
              Sociedade Brasileira de Computação (SBC).
            </p>
            <p>
              A SECOMP representa uma iniciativa estratégica para o fortalecimento do ecossistema
              de Computação na cidade de Belém, gerando impactos diretos na qualificação e
              valorização dos profissionais envolvidos.
            </p>
            <p>
              Ao reunir diferentes atores do ecossistema tecnológico paraense, o evento também
              estimula o desenvolvimento de soluções alinhadas às demandas locais, contribuindo
              para o{' '}
              <strong className="text-white">desenvolvimento sustentável da Amazônia</strong> por
              meio da tecnologia.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-secomp-card border border-secomp-border rounded-xl p-6 hover:border-secomp-cyan/50 transition-colors duration-300"
              >
                <feature.icon className="w-8 h-8 text-secomp-cyan mb-4" />
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-200 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreEvento
