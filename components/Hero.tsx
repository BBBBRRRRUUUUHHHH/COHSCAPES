import React from "react";

interface HeroProps {
  onOpenGallery: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenGallery }) => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* IMPORTANT: Place your hero background image at `public/images/hero-background.jpg` */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Hero.jpg')" }}
      ></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Transforming Landscapes, Building Dreams.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          From lush gardens tp robust earthworks, we craft outdoor spaces that
          inspire, endure and delight.
        </p>
        <button
          onClick={onOpenGallery}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105"
        >
          View Our Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
