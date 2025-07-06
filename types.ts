import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  id: number;
  thumbUrl: string;
  fullUrl: string;
  alt: string;
}
