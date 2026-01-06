import React, { useState, useEffect } from "react";
import '../nav-bar/nav.scss'
import logo from '../images/logo.jpg'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigateToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
       
      <nav className={`flex justify-between items-center px-6 lg:px-12 py-4 fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
        scrolled 
          ? 'exotic-glass shadow-2xl' 
          : 'exotic-glass shadow-xl'
      }`}>
        
        {/* Logo with Royal Effects */}
        <div className="relative group exotic-logo-container">
          <a 
            href="/"
            className="block relative z-10 royal-float"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative">
              <div className="royal-frame imperial-glow">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="oblate-logo lg:oblate-logo-lg"
                />
              </div>
              
              {/* Royal aura effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-1000 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-400/30 via-slate-300/20 to-slate-500/30 rounded-full animate-pulse"></div>
              </div>
              
              {/* Diamond sparkles */}
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-slate-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" style={{animation: 'bubblePop 2s ease-in-out infinite'}}></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-slate-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" style={{animation: 'bubblePop 2.5s ease-in-out infinite', animationDelay: '0.3s'}}></div>
            </div>
          </a>

          {/* Royal underline with gems */}
          <div className="absolute -bottom-2 left-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent group-hover:w-full transition-all duration-700 rounded-full transform -translate-x-1/2">
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-slate-200 rounded-full transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{animation: 'bubblePop 2s ease-in-out infinite', animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden relative p-4 rounded-2xl opulent-social text-gray-800 transition-all duration-400 hover:scale-105 lavish-shadow diamond-shimmer modern-font"
        >
          <svg 
            className={`w-6 h-6 transform transition-all duration-400 ${isMobileMenuOpen ? 'rotate-180 scale-110' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            strokeWidth="2.5"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Contact button */}
          <button 
            onClick={navigateToContact}
            className="exotic-nav-item relative group px-10 py-4 crystal-button font-semibold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 text-base luxury-font tracking-wide lavish-shadow"
          >
            <span className="relative z-10 flex items-center gap-2">
              Contact Us
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
          </button>

          {/* Social icons */}
          <div className="flex items-center space-x-5">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/shine_r_car_detailing_?igsh=MTZ6N2JmN3o4b29mOA==" 
              target="_blank" 
              rel="noreferrer"
              className="exotic-nav-item relative p-4 rounded-2xl opulent-social text-gray-700 hover:scale-110 transition-all duration-500 hover:shadow-xl group lavish-shadow"
            >
              <svg className="w-5 h-5 relative z-10 transition-transform duration-400 group-hover:scale-110 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer"
              className="exotic-nav-item relative p-4 rounded-2xl opulent-social text-gray-700 hover:scale-110 transition-all duration-500 hover:shadow-xl group lavish-shadow"
            >
              <svg className="w-5 h-5 relative z-10 transition-transform duration-400 group-hover:scale-110 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`md:hidden absolute top-full left-0 w-full exotic-glass border-t border-slate-300/30 shadow-2xl transition-all duration-700 ease-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-6 invisible'
        }`}>
          <div className="px-6 py-10 space-y-10">
            {/* Mobile contact button */}
            <button 
              onClick={navigateToContact}
              className="w-full relative group px-10 py-5 crystal-button font-semibold rounded-full overflow-hidden transition-all duration-500 text-lg luxury-font tracking-wide lavish-shadow"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Contact Us
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </span>
            </button>

            {/* Mobile social icons */}
            <div className="flex justify-center items-center space-x-10">
              {/* Mobile Instagram */}
              <a 
                href="https://www.instagram.com/shine_r_car_detailing_?igsh=MTZ6N2JmN3o4b29mOA==" 
                target="_blank" 
                rel="noreferrer"
                className="relative p-5 rounded-2xl opulent-social text-gray-700 hover:scale-110 transition-all duration-500 hover:shadow-xl group lavish-shadow"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-7 h-7 relative z-10 transition-transform duration-400 group-hover:scale-110 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Mobile YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="relative p-5 rounded-2xl opulent-social text-gray-700 hover:scale-110 transition-all duration-500 hover:shadow-xl group lavish-shadow"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-7 h-7 relative z-10 transition-transform duration-400 group-hover:scale-110 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Mobile menu gradient waves */}
          <div className="gradient-waves"></div>
        </div>
        
        {/* Lavish bottom gradient waves */}
        <div className="gradient-waves"></div>
        
        {/* Sparkle effects */}
        <div className="sparkle-effect"></div>
        
        {/* Additional floating sparkles */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-slate-300 rounded-full opacity-60" style={{animation: 'bubblePop 4s ease-in-out infinite', animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-slate-200 rounded-full opacity-40" style={{animation: 'bubblePop 5s ease-in-out infinite', animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-slate-400 rounded-full opacity-50" style={{animation: 'bubblePop 3.5s ease-in-out infinite', animationDelay: '0.5s'}}></div>
      </nav>
    </div>
  );
};

export default Navbar;