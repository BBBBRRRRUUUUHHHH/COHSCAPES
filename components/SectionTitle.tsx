
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-secondary inline-block relative pb-4">
        {children}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary rounded"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;
