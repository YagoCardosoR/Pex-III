import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-primary">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-dark/70 to-primary/90 z-10"></div>
      <div
  className="absolute inset-0 bg-[url('/imgs/Fundo.jpg')] bg-center bg-cover bg-no-repeat opacity-30 z-0"
  aria-hidden="true"
></div>

      
      <div className="container mx-auto px-4 z-20 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Adesivos Autorais & <span className="text-accent">Originais</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Personalize seu mundo com arte exclusiva criada por um artista brasileiro.
            Cada adesivo conta uma história única.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#galeria" className="btn btn-secondary">
              Ver Galeria
            </a>
            <a href="#contato" className="btn btn-outline">
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#sobre" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="text-white h-10 w-10" />
      </a>
    </section>
  );
};

export default Hero;