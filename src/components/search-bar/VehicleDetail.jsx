import { useParams,useNavigate  } from "react-router-dom";
import '../search-bar/v-details.scss'
import { vehicles } from "./vehicleData";

export default function VehicleDetails() {
  const { id } = useParams();
    const navigate = useNavigate();
   const handleBackClick = () => {
  console.log("Button clicked!"); // Check if this appears in console
  navigate("/");
};
  const vehicle = vehicles.find((v) => v.id.toString() === id);


  

  // Helper function to format prices
  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR'
      }).format(price);
    }
    return price;
  };

  if (!vehicle) {
    return (
      <>
       
        
        <div className="pt-40 mt-[100px] p-6 max-w-xl mx-auto bg-white min-h-screen">
          <div className="bg-white glass-morphism luxury-shadow rounded-2xl p-8 text-center border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 luxury-font">Vehicle Not Found</h2>
            <p className="text-gray-600 luxury-font">The requested vehicle could not be found in our premium collection.</p>
          </div>
        </div>
      </>
    );
  }

  const { name,brand, services } = vehicle;

 

  return (
    <>
    

      <div className="pt-40  p-6 max-w-4xl mx-auto bg-white min-h-screen">

<div className="mb-8">
  <button 
    onClick={handleBackClick}
    className="fixed top-36 left-4 z-[9999] inline-flex items-center px-4 py-2 text-white bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
  >
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
    Back
  </button>
</div>



        <div className="bg-white luxury-shadow rounded-3xl overflow-hidden luxury-border">




          {/* Header */}
          <div className="premium-gradient px-8 py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 glass-morphism">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0v-6a2 2 0 012-2h2a2 2 0 012 2v6m-4 0h4" />
                  </svg>
                </div>
                <span className="text-white/80 text-sm font-medium luxury-font tracking-wider uppercase">{brand}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white luxury-font tracking-tight leading-tight">{name}</h1>
              <div className="mt-4 w-24 h-1 bg-gradient-to-r from-white via-gray-300 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Services */}
          <div className="p-8 lg:p-12">
            <div className="mb-10">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center mr-4 luxury-shadow">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-3xl font-semibold text-gray-900 luxury-font">Service Prices</h2>
              </div>
              <p className="text-gray-600 luxury-font ml-14">Premium detailing services tailored for your vehicle</p>
            </div>
            
            <div className="grid gap-6">
              {Object.entries(services).map(([serviceKey, serviceData]) => {
                // Convert camelCase to readable format
                const serviceName = serviceKey
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, str => str.toUpperCase());

                // Handle both object and primitive value structures
                const price = typeof serviceData === 'object' ? serviceData.price : serviceData;
                const duration = serviceData?.duration;
                const warranty = serviceData?.warranty;
                const description = serviceData?.description;

                return (
                  <div key={serviceKey} className="service-card-shadow bg-white rounded-2xl border luxury-border elegant-hover elegant-shimmer group">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 luxury-font group-hover:text-black transition-colors">
                            {serviceName}
                          </h3>
                        </div>
                        <div className="ml-4">
                          <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4 py-2 rounded-xl font-bold text-lg luxury-font">
                            {formatPrice(price)}
                          </div>
                        </div>
                      </div>
                      
                      {/* Additional service details */}
                      {(duration || warranty || description) && (
                        <div className="space-y-3 pt-4 border-t border-gray-100">
                          {duration && (
                            <div className="flex items-center text-gray-600">
                              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <span className="luxury-font font-medium">Duration: <span className="text-gray-800">{duration}</span></span>
                            </div>
                          )}
                          {warranty && (
                            <div className="flex items-center text-gray-600">
                              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                              </div>
                              <span className="luxury-font font-medium">Warranty: <span className="text-gray-800">{warranty}</span></span>
                            </div>
                          )}
                          {description && (
                            <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                              <p className="text-gray-700 luxury-font leading-relaxed">{description}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

           

          {/* Action Buttons */}
          <div className="px-8 lg:px-12 py-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Call Button */}
              <a 
                href="tel:+919900116376" 
                className="flex-1 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-4 px-6 rounded-2xl font-semibold hover:from-black hover:via-gray-900 hover:to-black transition-all duration-400 flex items-center justify-center gap-3 luxury-shadow hover:shadow-2xl hover:shadow-black/20 transform hover:scale-105 elegant-shimmer luxury-font"
              >
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <span className="text-lg">Call Now</span>
              </a>

              {/* WhatsApp Button - FIXED */}
              <a 
                href="https://wa.me/919900116376?text=Hi%2C%20I%27m%20interested%20in%20your%20car%20services%20for%20my%20vehicle." 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white py-4 px-6 rounded-2xl font-semibold hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 transition-all duration-400 flex items-center justify-center gap-3 luxury-shadow hover:shadow-2xl hover:shadow-black/15 transform hover:scale-105 elegant-shimmer luxury-font"
              >
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                  </svg>
                </div>
                <span className="text-lg">WhatsApp</span>
              </a>
            </div>
            
            {/* Contact info */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-white rounded-2xl luxury-shadow border border-gray-100">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-700 luxury-font font-medium">
                  +91 99001 16376 • WhatsApp Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}