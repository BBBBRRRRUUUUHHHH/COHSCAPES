import React from "react";
import SectionTitle from "./SectionTitle";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle>About Us</SectionTitle>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Bringing Landscaping Visions to Life
            </h3>
            <p className="text-gray-600 mb-4">
              Founded in 2015, Cohscapes is a leading firm dedicated to creating
              spaces that inspire, function beautifully, and stand the test of
              time. Our team of experienced landscapers and designers combines
              innovative thinking with practical solutions to deliver
              exceptional results for every project.
            </p>
            <p className="text-gray-600 mb-8">
              We believe that great design should reflect the unique needs and
              aspirations of our clients while respecting the environmental and
              cultural context of each site. Our collaborative approach ensures
              that every design we create is both visually stunning and
              perfectly tailored to its purpose.
            </p>
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
          <div className="md:w-1/2">
            {/* IMPORTANT: Place your about section image at `public/images/about-us.jpg` */}
            <img
              src="/images/4.jpg"
              alt="Our Team"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
