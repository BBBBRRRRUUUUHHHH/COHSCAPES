import React from "react";
import SectionTitle from "./SectionTitle";
import { PortfolioItem } from "../types";

const PortfolioCard: React.FC<PortfolioItem> = ({
  imageUrl,
  title,
  description,
}) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg h-80">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <a
        href="#"
        className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
      >
        View Project
      </a>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  // IMPORTANT: Place your portfolio images in `public/images/portfolio/`
  // and name them `1.jpg`, `2.jpg`, etc.
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      imageUrl: "/images/port1.jpg",
      title: "Azure Skyline Tower",
      description: "A modern commercial skyscraper with sustainable features.",
    },
    {
      id: 2,
      imageUrl: "/images/port2.jpg",
      title: "Harmony Residence",
      description:
        "A luxury residential home that blends with its natural surroundings.",
    },
    {
      id: 3,
      imageUrl: "/images/port3.jpg",
      title: "Green Valley Center",
      description:
        "A sustainable community hub with eco-friendly design elements.",
    },
    {
      id: 4,
      imageUrl: "/images/port4.jpg",
      title: "Metropolitan Museum",
      description:
        "A modern addition to a historical museum respecting the original.",
    },
    {
      id: 5,
      imageUrl: "/images/port5.jpg",
      title: "Cascade Apartments",
      description:
        "A multi-residential development with innovative use of space.",
    },
    {
      id: 6,
      imageUrl: "/images/port6.jpg",
      title: "Riverside Restaurant",
      description: "A dining establishment with stunning waterfront views.",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
