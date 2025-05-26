import React from 'react';
import { MessageCircle, Instagram, Mail, MapPin, Clock } from 'lucide-react';

const Contato = () => {
  return (
    <section id="contato" className="bg-primary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white inline-block relative">
              <span className="inline-block relative">
                Entre em Contato
                <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-secondary"></span>
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tem alguma dúvida ou quer fazer um pedido personalizado? 
              Entre em contato através de um dos canais abaixo e retornarei o mais breve possível.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-dark-light rounded-lg p-8 animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-white">Fale Comigo</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">WhatsApp</h4>
                    <p className="text-gray-300 mb-2">Resposta mais rápida para dúvidas e pedidos</p>
                    <a 
                      href="https://api.whatsapp.com/send?phone=5521996091086" 
                      className="text-accent hover:text-accent-light transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      +55 (21) 99609-1086
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Instagram className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Instagram</h4>
                    <p className="text-gray-300 mb-2">Acompanhe novidades e designs exclusivos</p>
                    <a 
                      href="https://instagram.com/0cides" 
                      className="text-accent hover:text-accent-light transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      @0cides
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">E-mail</h4>
                    <p className="text-gray-300 mb-2">Para pedidos maiores e parcerias</p>
                    <a 
                      href="mailto:contato@ocides.com.br" 
                      className="text-accent hover:text-accent-light transition-colors"
                    >
                      contato@0cides.com.br
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-light rounded-lg p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold mb-6 text-white">Informações Adicionais</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Localização</h4>
                    <p className="text-gray-300">
                      Niterói, RJ - Brasil<br />
                      Envio para todo o país
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-300">
                      Segunda a Sexta: 9h às 18h<br />
                      Sábado: 9h às 12h
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-white mb-3">Formas de Pagamento</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-dark p-2 rounded text-center text-sm text-gray-300">Pix</div>
                    <div className="bg-dark p-2 rounded text-center text-sm text-gray-300">Cartão</div>
                    <div className="bg-dark p-2 rounded text-center text-sm text-gray-300">Boleto</div>
                    <div className="bg-dark p-2 rounded text-center text-sm text-gray-300">Transferência</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;