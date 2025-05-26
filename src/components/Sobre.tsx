import React from 'react';
import { Pencil, Palette, Package } from 'lucide-react';

const Sobre = () => {
  return (
    <section id="sobre" className="bg-dark">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold mb-6 text-white relative">
              <span className="inline-block relative">
                Sobre o Artista
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary"></span>
              </span>
            </h2>
            <p className="text-gray-300 mb-2">
              Olá! Eu sou Igor Alcides, mais conhecido como Ocides — e para os íntimos, Cidney. 
              Sou animador, ilustrador e criador por trás da Stickercides, uma marca de adesivos 
              autorais que une arte urbana, traços cartunescos e uma boa dose de irreverência.
            </p>
            <p className="text-gray-300 mb-2">
              Minha jornada começou há mais de 5 anos, quando comecei a transformar meus desenhos em adesivos 
              para compartilhar comigo e com o mundo. O que era um simples experimento virou uma linguagem própria: 
              uma mistura intensa de cultura pop, humor ácido, surrealismo do cotidiano e caos urbano.
            </p>
            <p className="text-gray-300 mb-2">
              Com uma estética que dialoga com o cartoon moderno, cada arte é criada para provocar algo — 
              seja riso, estranhamento, 
              identificação ou desconforto. Nada é neutro. Tudo é autoral.
            </p>
            <p className="text-gray-300 mb-2">
              Além da Stickercides, trabalho com animação e ilustração digital, dando vida a personagens 
              e universos que transitam entre o bizarro e o adorável. Meu foco é expressar o desenho em 
              todas as formas — 
              seja estático ou em movimento, colado na rua ou na tela.
            </p>
            <p className="text-gray-300 mb-2">
              Se você curte arte com personalidade, caos visual bem pensado e adesivos que contam histórias, você está no lugar certo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#galeria" className="btn btn-secondary">
                Ver Trabalhos
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-primary-light w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Pencil className="text-accent w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Processo Criativo</h3>
              <p className="text-gray-300">
                Cada design começa com um esboço à mão, que é refinado digitalmente para manter os traços originais com acabamento profissional.
              </p>
            </div>
            
            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary-light w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Palette className="text-accent w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Materiais Premium</h3>
              <p className="text-gray-300">
                Utilizo apenas vinil de alta qualidade, com proteção UV, garantindo que seus adesivos durem anos mesmo expostos ao sol.
              </p>
            </div>
            
            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-primary-light w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Package className="text-accent w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Envio Seguro</h3>
              <p className="text-gray-300">
                Seus adesivos são enviados em embalagens protetoras, garantindo que cheguem em perfeitas condições em qualquer lugar do Brasil.
              </p>
            </div>
            
            <div className="hidden sm:block card p-6 bg-secondary animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold mb-3">Peça o Seu</h3>
              <p className="text-gray-200 mb-4">
                Pronto para adicionar arte ao seu mundo? Veja a galeria e escolha seus favoritos.
              </p>
              <a href="#contato" className="text-white font-medium hover:text-accent transition-colors">
                Saiba mais →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;