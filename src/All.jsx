import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from './components/nav-bar/Navbar';

import SearchSection from "./components/search-bar/SearchSection";
import Services from "./components/services/Services";
import LocationMap from "./components/location/LocationMap";
import Feedback from "./components/feedback/Feedback";
import ContactForm from "./components/contact-form/ContactForm";
import Footer from "./components/footer/Footer";
import VehicleDetail from "./components/search-bar/VehicleDetail";
import HeroVideo from "./components/hero/HeroVideo";
import ServiceDetail from "./components/services/ServiceDetail";

function All() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroVideo/>
              <SearchSection />
              <Services />
              <LocationMap />
              <Feedback />
              <ContactForm />
              <Footer />
            </>
          }
        />
        <Route path="/vehicle/:id" element={<VehicleDetail />} />
                <Route path="/service/:id" element={<ServiceDetail />} /> {/* ⬅️ ADD THIS LINE */}

      </Routes>
    </div>
  );
}

export default All;
