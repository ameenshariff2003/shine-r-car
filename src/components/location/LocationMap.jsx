import React from "react";
import '../location/loco.scss'

const LocationMap = () => {
  return (
    <section className="px-6 -mt-20 py-24 bg-white relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-gray-200/40 to-gray-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tl from-gray-100/50 to-gray-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-gray-200/30 to-transparent rounded-full blur-2xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced header section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gray-400 to-gray-700 rounded-full"></div>
            <div className="mx-4 w-3 h-3 bg-gray-700 rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent via-gray-400 to-gray-700 rounded-full"></div>
          </div>
          
          <h2
          className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight"
           >

            Visit Us


          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our state-of-the-art automotive care facility, designed with sophistication 
            and equipped to deliver unparalleled service excellence to our valued clientele.
          </p>
        </div>
        
        {/* Enhanced map container */}
        <div className="group perspective-1000">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl shadow-gray-900/15 border border-gray-200/60 hover:shadow-3xl hover:shadow-gray-900/20 transition-all duration-700 transform hover:scale-[1.02] hover:rotate-y-1">
            
            {/* Map with enhanced styling */}
            <div className="relative">
              <div className="w-full h-96 relative overflow-hidden rounded-2xl shadow-2xl shadow-gray-900/25 group-hover:shadow-gray-900/35 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4119.390145785654!2d77.52917637817596!3d12.959919017400006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f00c6e202d7%3A0x8988adea35e5f19d!2sShine%20R%20Car%20Detailing%20%26%20accessories%20near%20me%20premium%20car%20wash%20bestceramic%20coating%20best%20ppf%20in%20Bangalore%20best%20car%20detailing!5e0!3m2!1sen!2sin!4v1753654990390!5m2!1sen!2sin"
                  className="w-full h-full border-0 transition-all duration-1000 hover:saturate-110 hover:contrast-110"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                {/* Enhanced overlay effects */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-inset ring-gray-300/50 pointer-events-none"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-gray-900/10 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-gray-300 rounded-tl-lg opacity-60"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-r-4 border-t-4 border-gray-300 rounded-tr-lg opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-4 border-b-4 border-gray-300 rounded-bl-lg opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-gray-300 rounded-br-lg opacity-60"></div>
            </div>
            
            {/* Enhanced business hours section */}
            <div className="mt-16 flex justify-center">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg shadow-gray-900/10 border border-gray-200/80 hover:shadow-xl hover:shadow-gray-900/15 transition-all duration-500 max-w-md">
                
                {/* Icon with enhanced styling */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-lg shadow-gray-700/30 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl opacity-20 blur-sm"></div>
                  </div>
                </div>
                
                <h3 className="text-center font-bold text-gray-900 mb-6 text-2xl">Business Hours</h3>
                
                {/* Updated hours with better formatting */}
                <div className="space-y-4 text-center">
                  <div className="bg-white/80 p-4 rounded-xl border border-gray-100">
                    <p className="text-gray-600 font-medium mb-1">Monday - Saturday</p>
                    <p className="text-gray-900 font-bold text-xl">9:30 AM - 8:00 PM</p>
                  </div>
                  
                  <div className="bg-white/80 p-4 rounded-xl border border-gray-100">
                    <p className="text-gray-600 font-medium mb-1">Sunday</p>
                    <p className="text-gray-900 font-bold text-xl">9:30 AM - 5:00 PM</p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-gray-500 text-sm italic">Always ready to serve you with excellence</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;