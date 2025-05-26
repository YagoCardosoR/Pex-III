import React from 'react';
import { Instagram, MessageCircle, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Stickercides</h2>
            <p className="text-gray-400 mt-2">Adesivos autorais que contam histórias</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://api.whatsapp.com/send?phone=5521996091086" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon social-icon-whatsapp"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <a 
              href="https://instagram.com/0cides" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon social-icon-instagram"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:contato@0cides.com.br" 
              className="social-icon bg-primary hover:bg-primary-light"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-gray-700">
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-accent transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-accent transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Envio para todo o Brasil
              </li>
              <li className="text-gray-400">
                Adesivos à prova d'água
              </li>
              <li className="text-gray-400">
                Material Premium
              </li>
              <li className="text-gray-400">
                Designs exclusivos
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                WhatsApp: +55 (21) 99609-1086
              </li>
              <li className="text-gray-400">
                Email: contato@0cides.com.br
              </li>
              <li className="text-gray-400">
                Instagram: @0cides
              </li>
              <li className="text-gray-400">
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Stickercides. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-primary hover:bg-primary-light w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;