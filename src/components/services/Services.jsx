

import React from "react";
import { useNavigate } from "react-router-dom";
import im1 from './images/cc.jpg';
import im2 from './images/ppf.jpg';
import im3 from './images/fwash.jpg';
import im4 from './images/int-detail.jpg';
import im5 from './images/strach.jpg';
import im6 from './images/ing.jpg';
import im7 from './images/gc.jpg';
import im8 from './images/sf.jpg';
import im9 from './images/bpf.jpg';

const serviceImages = [im1, im2, im3, im4, im5, im6, im7, im8, im9];

const services = [
  {
    id: "ceramic-coating",
    name: "Ceramic Coating",
    description: "Premium protection with long-lasting shine"
  },
  {
    id: "paint-protection-film",
    name: "Paint Protection Film (PPF)",
    description: "Ultimate paint protection against scratches"
  },
  {
    id: "foam-wash",
    name: "Foam Wash",
    description: "Deep cleaning with premium foam technology"
  },
  {
    id: "interior-detailing", 
    name: "Interior Detailing",
    description: "Complete interior restoration and cleaning"
  },
  {
    id: "scratch-removal",
    name: "Scratch Removal", 
    description: "Professional scratch and swirl removal"
  },
  {
    id: "engine-bay-cleaning",
    name: "Engine Bay Cleaning",
    description: "Thorough engine compartment detailing"
  },
  {
    id: "graphene-coating",
    name: "Graphene Coating",
    description: "Next-generation protection with superior durability and performance"
  },
  {
    id: "sun-film",
    name: "Sun Film",
    description: "Professional window tinting for UV protection and privacy"
  },
  {
    id: "bike-ppf",
    name: "Bike PPF",
    description: "Premium paint protection film to guard against scratches and wear."
  }
];
 const navigateToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    navigate(`/service/${service.id}`);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="px-4 sm:px-6 py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-black to-gray-800 rounded-full blur-3xl opacity-10 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-gradient-to-r from-gray-100 to-white rounded-full blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-800 via-gray-700 to-black rounded-full mb-6 shadow-2xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight">
            Our Services
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Professional automotive detailing services to keep your vehicle looking pristine
          </p>
        </div>
        
        {/* Services Grid - 3x3 layout for 9 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className="group cursor-pointer relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-200/50 hover:border-gray-300/70 overflow-hidden h-80 sm:h-96"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${serviceImages[idx]})`,
                }}
              />
              
              {/* Overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/50 group-hover:to-black/30 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 group-hover:to-black/40 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
                {/* Service icon - positioned at top */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                
                {/* Service title and description */}
                <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
                    {service.name}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-200 mb-4 drop-shadow-md line-clamp-2">
                    {service.description}
                  </p>
                  
                  {/* Call to action */}
                  <div className="inline-flex items-center text-white font-medium group-hover:text-yellow-300 transition-colors duration-300">
                    <span className="text-sm sm:text-base">Explore Service</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-2 ring-white/30"></div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Additional Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/60 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-full mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              Need a Custom Service?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find exactly what you're looking for? We offer customized detailing packages tailored to your specific needs.
            </p>
            <button onClick={navigateToContact} className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-gray-800 to-black text-white font-semibold rounded-xl hover:from-black hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Us for Custom Quote
            </button>
          </div>
        </div>
      </div>

       
    </section>
  );
};

export default Services;