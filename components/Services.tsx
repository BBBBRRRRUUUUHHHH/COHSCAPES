
import React from 'react';
import SectionTitle from './SectionTitle';
import { Service } from '../types';

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
    <div className="text-primary text-5xl mb-4 inline-block">{icon}</div>
    <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services: Service[] = [
    { icon: <>&#127968;</>, title: 'Residential Design', description: 'Creating beautiful, functional homes that reflect the unique lifestyles and preferences of our clients, from modern minimalist spaces to traditional family homes.' },
    { icon: <>&#127970;</>, title: 'Commercial Architecture', description: 'Designing innovative commercial spaces that optimize workflow, enhance brand identity, and create memorable experiences for employees and customers.' },
    { icon: <>&#127793;</>, title: 'Sustainable Design', description: 'Integrating eco-friendly solutions and sustainable practices into our designs to minimize environmental impact and maximize energy efficiency.' },
    { icon: <>&#127982;</>, title: 'Urban Planning', description: 'Developing comprehensive urban design strategies that create vibrant, functional, and sustainable communities and public spaces.' },
    { icon: <>&#128260;</>, title: 'Renovation & Restoration', description: 'Breathing new life into existing structures while preserving their historical and architectural integrity through thoughtful renovation.' },
    { icon: <>&#128161;</>, title: 'Interior Design', description: 'Creating cohesive interior spaces that complement the architecture, enhance functionality, and reflect the client\'s aesthetic vision.' },
  ];

  return (
    <section id="services" className="py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionTitle>Our Services</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
