
import React from 'react';
import SectionTitle from './SectionTitle';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionTitle>Client Testimonials</SectionTitle>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-10 rounded-lg shadow-xl text-center">
            <p className="text-lg italic text-gray-600 mb-6">
              "Cohscapes transformed our vision into reality beyond our expectations. Their attention to detail and innovative approach to sustainable design created a home that is both beautiful and efficient."
            </p>
            <h4 className="font-bold text-secondary text-lg">Sarah Johnson</h4>
            <p className="text-gray-500">Residential Client</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
