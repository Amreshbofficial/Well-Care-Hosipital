import { useState } from 'react';
// Import your gallery images here
import galleryImage1 from '../assets/images/gallery-1.webp';
import galleryImage2 from '../assets/images/gallery-2.webp';
import galleryImage3 from '../assets/images/gallery-3.webp';
import galleryImage4 from '../assets/images/gallery-4.webp';
import galleryImage5 from '../assets/images/gallery-5.webp';
import galleryImage6 from '../assets/images/gallery-6.webp';


const Gallery = () => {
  const galleryItems = [
    { src: galleryImage1, alt: 'Hospital Gallery Image 1' },
    { src: galleryImage2, alt: 'Hospital Gallery Image 2' },
    { src: galleryImage3, alt: 'Hospital Gallery Image 3' },
    { src: galleryImage4, alt: 'Hospital Gallery Image 4' },
    { src: galleryImage5, alt: 'Hospital Gallery Image 5' },
    { src: galleryImage6, alt: 'Hospital Gallery Image 6' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-600">A glimpse of our facilities and services</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;