import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          Stickercides
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-white hover:text-accent transition-colors">
            Sobre
          </a>
          <a href="#galeria" className="text-white hover:text-accent transition-colors">
            Galeria
          </a>
          <a href="#contato" className="text-white hover:text-accent transition-colors">
            Contato
          </a>
          <div className="flex items-center space-x-4 ml-4">
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
          </div>
        </nav>

        {/* Botão menu mobile */}
        <button 
          className="md:hidden text-white" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary-dark animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#sobre" 
              className="text-white hover:text-accent py-2 transition-colors"
              onClick={toggleMenu}
            >
              Sobre
            </a>
            <a 
              href="#galeria" 
              className="text-white hover:text-accent py-2 transition-colors"
              onClick={toggleMenu}
            >
              Galeria
            </a>
            <a 
              href="#contato" 
              className="text-white hover:text-accent py-2 transition-colors"
              onClick={toggleMenu}
            >
              Contato
            </a>
            <div className="flex items-center space-x-4 py-2">
              <a 
                href="https://api.whatsapp.com/send?phone=5511999999999" 
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;