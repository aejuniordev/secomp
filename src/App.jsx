import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SobreEvento from './components/SobreEvento'
import Programacao from './components/Programacao'
import Maratona from './components/Maratona'
import Contato from './components/Contato'
import Patrocinadores from './components/Patrocinadores'
import Realizacao from './components/Realizacao'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-secomp-dark">
      <Header />
      <main>
        <Hero />
        <SobreEvento />
        <Programacao />
        <Maratona />
        <Contato />
        <Patrocinadores />
        <Realizacao />
      </main>
      <Footer />
    </div>
  )
}

export default App
