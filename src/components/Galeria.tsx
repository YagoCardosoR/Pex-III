import React, { useState } from 'react';
import { produtos } from '../data/produtos';
import { ShoppingCart, Info } from 'lucide-react';

const Galeria = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="galeria" className="bg-dark-dark py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white inline-block relative">
            <span className="inline-block relative">
              Galeria de Adesivos
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-secondary"></span>
            </span>
          </h2>
          <p className="text-gray-300">
            Explore nossa coleção de adesivos autorais. Cada design é único, 
            criado com paixão e atenção aos detalhes. Adesivos resistentes à água 
            e raios UV, perfeitos para laptops, garrafas d'água, skates e muito mais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto) => (
            <div 
              key={produto.id} 
              className="card group overflow-hidden transition-all duration-300 animate-slide-up" 
              style={{ animationDelay: `${produto.id * 0.1}s` }}
              onMouseEnter={() => setHoveredId(produto.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={produto.imagem} 
                  alt={produto.nome} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-dark-dark/90 to-transparent transition-opacity duration-300 ${hoveredId === produto.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 transform translate-y-0">
                    <div className="flex justify-between items-center">
                      <a 
                        href={`https://api.whatsapp.com/send?phone=55999999999&text=Olá! Tenho interesse no adesivo ${produto.nome}`} 
                        className="btn btn-secondary py-2 px-4 text-sm"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ShoppingCart size={16} className="mr-2" />
                        Comprar
                      </a>
                      <span className="text-white font-bold">
                        R$ {produto.preco.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{produto.nome}</h3>
                <p className="text-gray-300 text-sm mb-3">{produto.descricao}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-400 mr-2">Tamanho:</span>
                    <span className="text-sm text-white">{produto.tamanho}</span>
                  </div>
                  <div className="flex">
                    {produto.categorias.map((categoria, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-primary-light rounded-full mr-1 text-gray-200"
                      >
                        {categoria}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            Não encontrou o que procurava? Entre em contato para pedidos personalizados!
          </p>
          <a href="#contato" className="btn btn-primary">
            <Info size={18} className="mr-2" />
            Solicitar Designs Personalizados
          </a>
        </div>
      </div>
    </section>
  );
};

export default Galeria;