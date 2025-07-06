import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <Hero onOpenGallery={() => setIsGalleryOpen(true)} />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {isGalleryOpen && <Gallery onClose={() => setIsGalleryOpen(false)} />}
    </div>
  );
};

export default App;
