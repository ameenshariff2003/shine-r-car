import React from "react";
import { Heart, Car, MapPin, Phone, Mail, Shield, Star, Wrench, Sparkles } from "lucide-react";

const Footer = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Visit Us",
      text: "Attiguppe, Bangalore",
      href: "https://www.google.com/maps/dir//23,+3rd+Main+Rd,+Binny+Employyes+Layout,+Vijayanagar,+Attiguppe,+Bengaluru,+Karnataka+560040/@12.9599036,77.4493947,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae3f00c6e202d7:0x8988adea35e5f19d!2m2!1d77.5317966!2d12.9599166?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      icon: Phone,
      label: "Call Us",
      text: "+91 9900116376",
      href: "tel:+919900116376"
    },
    {
      icon: Mail,
      label: "Email Us",
      text: "Shinercardetailing4263@gmail.com",
      href: "mailto:Shinercardetailing4263@gmail.com"
    }
  ];

  const highlights = [
    { icon: Shield, title: "Premium Protection", desc: "Advanced PPF & Ceramic Coatings" },
    { icon: Star, title: "Expert Craftsmanship", desc: "Skilled professionals you can trust" },
    { icon: Wrench, title: "Complete Care", desc: "Interior to exterior perfection" },
    { icon: Sparkles, title: "Lasting Results", desc: "Protection that endures" }
  ];

  return (
    <footer className="bg-gray-100 border-t-4 border-gray-300">
      {/* Top decorative wave */}
      <div className="relative">
        <svg className="w-full h-12 text-gray-200" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,20 600,100 900,40 C1050,10 1150,80 1200,60 L1200,120 L0,120 Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Main brand section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 p-6 bg-white rounded-3xl shadow-lg border border-gray-200 mb-6">
              <div className="p-4 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl shadow-md">
                <Car className="w-12 h-12 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-3xl font-bold text-gray-800">Shine R</h2>
                <p className="text-gray-600 text-lg">car detailing & accessories</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
              Your vehicle's appearance is our passion. We combine cutting-edge techniques with meticulous attention to detail for results that exceed expectations.
            </p>
          </div>

          {/* Highlights section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, index) => (
              <div key={index} className="group text-center p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-gray-800 font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Contact section */}
          <div className="max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-gray-300 text-center">
              Get In Touch
            </h3>
            <div className="grid gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md hover:border-gray-400 transition-all duration-300"
                >
                  <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">{item.label}</p>
                    <p className="text-gray-800 font-semibold">{item.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-300 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-gray-600 text-center md:text-left">
                © 2025 Shine R. All rights reserved.
              </div>
              
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-gray-500">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                  <span>in Bangalore</span>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400"></div>
    </footer>
  );
};

export default Footer;