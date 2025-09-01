const Gallery = () => {
  const galleryItems = Array(6).fill(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-600">A glimpse of our facilities and services</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((_, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Image {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;