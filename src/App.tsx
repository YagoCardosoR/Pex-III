import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Galeria from './components/Galeria';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Galeria />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;