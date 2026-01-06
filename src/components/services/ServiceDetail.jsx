
import React from "react";
import '../services/ser-det.scss'
import { useParams, useNavigate } from "react-router-dom";

const serviceDetails = {
  "ceramic-coating": {
    name: "Ceramic Coating",
    description: "Premium protection with long-lasting shine and durability for your vehicle's paint surface.",
    icon: "🛡️",
    steps: [
      "Wash car – Thoroughly clean to remove dirt and contaminants.",
      "Prep surface – Use clay bar and polish to ensure a smooth base.",
      "Apply coating – Evenly apply ceramic layer with an applicator pad.",
      "Cure – Allow time for the coating to bond and harden properly.",
      "Final polish – Buff the surface to enhance gloss and finish."
    ],
  },
  "graphene-coating": {
    name: "Graphene Coating",
    description: "Next-generation protection with superior durability, enhanced hydrophobic properties, and advanced heat dissipation technology.",
    icon: "⚡",
    steps: [
      "Deep clean – Remove all contaminants and residues from the surface.",
      "Paint correction – Polish and correct any imperfections for optimal bonding.",
      "Surface decontamination – Use specialized products to ensure pristine surface.",
      "Graphene application – Apply the advanced graphene coating in thin, even layers.",
      "Heat activation – Use controlled heat to activate graphene particles for maximum bonding.",
      "Final inspection – Quality check and apply finishing touches for perfect results."
    ],
  },
  "paint-protection-film": {
    name: "Paint Protection Film (PPF)",
    description: "Ultimate paint protection against scratches, chips, and environmental damage.",
    icon: "🎯",
    steps: [
      "Surface inspection – Examine the paint for imperfections or debris.",
      "Film cutting – Pre-cut the PPF to fit vehicle panels precisely.",
      "Application – Carefully apply film using slip solution for positioning.",
      "Trimming – Trim excess edges for seamless alignment and fit.",
      "Sealing – Squeegee and heat seal the film to ensure long-lasting adhesion."
    ],
  },
  "foam-wash": {
    name: "Foam Wash",
    description: "Deep cleaning with premium foam technology for thorough dirt and grime removal.",
    icon: "🧽",
    steps: [
      "Rinse – Remove loose dirt with water.",
      "Apply foam – Cover the vehicle with thick foam to loosen grime.",
      "Brush – Gently scrub with soft brushes or mitts.",
      "Rinse again – Wash off all foam and loosened dirt.",
      "Dry – Wipe down with microfiber cloths to prevent water spots."
    ],
  },
  "interior-detailing": {
    name: "Interior Detailing",
    description: "Complete interior restoration and cleaning for a fresh, pristine cabin experience.",
    icon: "✨",
    steps: [
      "Vacuuming – Clean carpets, seats, and corners thoroughly.",
      "Stain removal – Treat and remove fabric or upholstery stains.",
      "Leather treatment – Clean and condition leather surfaces.",
      "Glass cleaning – Polish interior windows and mirrors.",
      "Perfume – Add a fresh interior scent for a finishing touch."
    ],
  },
  "scratch-removal": {
    name: "Scratch Removal",
    description: "Professional scratch and swirl removal to restore your paint's original beauty.",
    icon: "🔧",
    steps: [
      "Inspect – Assess the depth and extent of scratches.",
      "Sand – Lightly sand the affected area to smooth the surface.",
      "Polish – Restore gloss and blend the repair with surrounding paint.",
      "Seal – Apply sealant to protect the treated area.",
      "Final buffing – Buff for a flawless finish and enhanced shine."
    ],
  },
  "engine-bay-cleaning": {
    name: "Engine Bay Cleaning",
    description: "Thorough engine compartment detailing for optimal performance and appearance.",
    icon: "⚙️",
    steps: [
      "Cover electronics – Protect sensitive components with covers.",
      "Degrease – Spray degreaser to break down oil and grime.",
      "Brush – Agitate with detailing brushes in tight spots.",
      "Rinse – Gently rinse off the cleaner without high pressure.",
      "Dry & shine – Dry with air or cloth and apply dressing for a clean look."
    ],
  },
  "sun-film": {
    name: "Sun Film",
    description: "Professional window tinting for UV protection, privacy, and enhanced comfort with premium quality films.",
    icon: "🌞",
    steps: [
      "Window cleaning – Thoroughly clean all glass surfaces inside and out.",
      "Measurement – Precisely measure each window for accurate film cutting.",
      "Film cutting – Cut premium tint film to exact window dimensions.",
      "Application – Apply film using professional slip solution for perfect positioning.",
      "Squeegee – Remove air bubbles and ensure complete adhesion.",
      "Trimming – Trim edges for clean, professional finish.",
      "Final inspection – Check for imperfections and ensure optimal clarity."
    ],
  },
  "bike-ppf": { 
  name: "Bike PPF",
  description: "Premium paint protection film to shield your bike’s body from scratches, chips, and weather damage.",
  icon: "🏍️",
  steps: [
    "Surface preparation – Wash and dry the bike to remove dirt and debris.",
    "Paint inspection – Check for scratches or imperfections before application.",
    "PPF cutting – Measure and cut film precisely for each panel.",
    "Film application – Apply protection film smoothly without bubbles.",
    "Finishing – Trim edges, ensure perfect adhesion, and polish the surface."
  ],
},

};

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Get service data
  const service = serviceDetails[id];
  
  // Contact details
  const phoneNumber = "9900116376";
  const whatsappNumber = "919900116376";

  // Navigation function
  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  // Contact functions
  const handleWhatsAppClick = () => {
    if (service) {
      const message = encodeURIComponent(`Hi! I'm interested in getting a quote for ${service.name}. Can you please provide me with the pricing and availability?`);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Loading state
  if (!id) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  // Service not found
  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service "{id}" could not be found.</p>
          <button
            onClick={handleBackClick}
            className="inline-flex   items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <svg className="w-4  h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-[50px] bg-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-gray-200 via-gray-100 to-white rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-64 h-64 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 rounded-full blur-3xl opacity-35 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gradient-to-r from-black via-gray-800 to-gray-700 rounded-full blur-3xl opacity-8 animate-pulse"></div>
        
        {/* Subtle geometric accents */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-gray-400 rounded-full opacity-20"></div>
        <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-gray-500 rounded-full opacity-25"></div>
        <div className="absolute top-1/3 left-2/3 w-1 h-1 bg-gray-600 rounded-full opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={handleBackClick}
            className="inline-flex fixed top-40 left-4 z-[9999] items-center px-4 py-2 text-gray-600 hover:text-gray-800 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-full mb-8 shadow-2xl">
            <span className="text-4xl" role="img" aria-label={service.name}>{service.icon}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight">
            {service.name}
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Procedure Section */}
        <div className="bg-gradient-to-br from-white via-gray-50/80 to-gray-100/60 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-8 sm:p-12 relative overflow-hidden">
          {/* Card background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/3 via-gray-800/2 to-black/3 opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-30 rounded-3xl"></div>
          
          <div className="relative z-10">
            {/* Section Header */}
            <div className="flex items-center mb-10">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                Step-by-Step Procedure
              </h2>
            </div>

            {/* Steps List */}
            <div className="space-y-6">
              {service.steps.map((step, index) => (
                <div 
                  key={index}
                  className="group flex items-start p-6 bg-gradient-to-r from-white to-gray-50/80 rounded-2xl border border-gray-200/50 hover:border-gray-300/70 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden"
                >
                  {/* Step background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mr-6 group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  
                  {/* Step content */}
                  <div className="relative z-10 flex-1">
                    <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300 text-base sm:text-lg leading-relaxed font-medium">
                      {step}
                    </p>
                  </div>
                  
                  {/* Step indicator */}
                  <div className="relative z-10 flex-shrink-0 ml-4">
                    <div className="w-3 h-3 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Completion Badge */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-2xl shadow-2xl">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg font-semibold">Professional Service Completed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Book This Service?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact our team to schedule your {service.name.toLowerCase()} service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleCallClick}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white font-semibold rounded-xl hover:from-black hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                </svg>
                Get Quote on WhatsApp
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              📞 {phoneNumber} | 💬 WhatsApp Available
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ServiceDetail;