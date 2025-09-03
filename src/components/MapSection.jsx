const MapSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Visit Our Hospital</h2>
        <div className="rounded-lg overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
          <iframe 
            src="https://www.google.com/maps?q=Wellcare+Hospital+Trichy&output=embed" 
            title="Hospital Location"
            className="w-full h-full" 
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;