// import React, { useState, useRef, useEffect } from "react";
//   import { vehicles } from "./vehicleData";


// // Mock vehicle data for demo purposes


// export default function CombinedSearchAbout() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredVehicles, setFilteredVehicles] = useState([]);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(-1);
//   const [isLoading, setIsLoading] = useState(false);
//   const inputRef = useRef(null);
//   const dropdownRef = useRef(null);

//   // Helper function to format prices in INR
//   const formatPrice = (serviceData) => {
//     if (typeof serviceData === 'object' && serviceData.price) {
//       const price = serviceData.price;
//       if (typeof price === 'number') {
//         return new Intl.NumberFormat('en-IN', {
//           style: 'currency',
//           currency: 'INR',
//           maximumFractionDigits: 0
//         }).format(price);
//       }
//       return price;
//     }
//     return serviceData;
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//         setSelectedIndex(-1);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     setSelectedIndex(-1);

//     if (value.trim() === "") {
//       setFilteredVehicles([]);
//       setIsDropdownOpen(false);
//     } else {
//       setIsLoading(true);
//       // Simulate API call delay
//       setTimeout(() => {
//         const filtered = vehicles.filter((v) => {
//           const nameMatch = v.name?.toLowerCase().includes(value.toLowerCase());
//           const brandMatch = v.brand?.toLowerCase().includes(value.toLowerCase());
//           const typeMatch = v.type?.toLowerCase().includes(value.toLowerCase());
          
//           return nameMatch || brandMatch || typeMatch;
//         });
//         setFilteredVehicles(filtered);
//         setIsDropdownOpen(filtered.length > 0);
//         setIsLoading(false);
//       }, 300);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (!isDropdownOpen || filteredVehicles.length === 0) return;

//     switch (e.key) {
//       case "ArrowDown":
//         e.preventDefault();
//         setSelectedIndex(prev => 
//           prev < filteredVehicles.length - 1 ? prev + 1 : 0
//         );
//         break;
//       case "ArrowUp":
//         e.preventDefault();
//         setSelectedIndex(prev => 
//           prev > 0 ? prev - 1 : filteredVehicles.length - 1
//         );
//         break;
//       case "Enter":
//         e.preventDefault();
//         if (selectedIndex >= 0) {
//           handleSelect(filteredVehicles[selectedIndex]);
//         }
//         break;
//       case "Escape":
//         setIsDropdownOpen(false);
//         setSelectedIndex(-1);
//         inputRef.current?.blur();
//         break;
//     }
//   };

//   const handleSelect = (vehicle) => {
//     setSearchTerm(vehicle.name);
//     setFilteredVehicles([]);
//     setIsDropdownOpen(false);
//     setSelectedIndex(-1);
    
//     // Navigate to vehicle details page (simulate routing)
//     // In a real app, you'd use router.push(`/vehicle/${vehicle.id}`)
//     window.open(`vehicle/${vehicle.id}`, '_blank');
//   };

//   const clearSearch = () => {
//     setSearchTerm("");
//     setFilteredVehicles([]);
//     setIsDropdownOpen(false);
//     setSelectedIndex(-1);
//     inputRef.current?.focus();
//   };

//   // Get the starting price (lowest price from services)
//   const getStartingPrice = (vehicle) => {
//     if (!vehicle.services) return "N/A";
    
//     const services = vehicle.services;
//     const prices = Object.values(services).map(service => {
//       if (typeof service === 'object' && service.price) {
//         return typeof service.price === 'number' ? service.price : 0;
//       }
//       return typeof service === 'number' ? service : 0;
//     }).filter(price => price > 0);

//     if (prices.length === 0) return "Contact for pricing";
    
//     const minPrice = Math.min(...prices);
//     return formatPrice({ price: minPrice });
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        
//         {/* Search Section */}
//         <div className="w-full max-w-4xl mx-auto mb-16">
//           <div className="text-center mb-8">
//             <h2 
//             // className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight"
//             className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight"

//             >
//               Find Your Vehicle
//             </h2>
//             <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
//               Search for your vehicle to get expert detailing and protection services
//             </p>
//           </div>

//           <div className="relative w-full max-w-lg mx-auto" ref={dropdownRef}>
//             {/* Search Input Container */}
//             <div className="relative group">
//               <div className="relative bg-white rounded-2xl border-2 border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-gray-400 group">
//                 {/* Animated gradient border effect */}
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 rounded-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 blur-sm"></div>
//                 <div className="relative bg-white rounded-2xl">
                
//                   {/* Search Icon */}
//                   <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
//                     <div className="relative">
//                       <svg 
//                         className="w-5 h-5 text-gray-500 group-focus-within:text-gray-700 transition-all duration-300 group-focus-within:scale-110" 
//                         fill="none" 
//                         stroke="currentColor" 
//                         viewBox="0 0 24 24"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                       </svg>
//                       {/* Pulsing ring on focus */}
//                       <div className="absolute -inset-2 border border-gray-300 rounded-full opacity-0 group-focus-within:opacity-50 group-focus-within:animate-ping"></div>
//                     </div>
//                   </div>

//                   {/* Input Field */}
//                   <input
//                     ref={inputRef}
//                     type="text"
//                     className="w-full py-4 pl-12 pr-12 bg-white text-gray-800 placeholder-gray-500 text-base sm:text-lg focus:outline-none focus:ring-0 font-medium rounded-2xl transition-all duration-300"
//                     placeholder="Search your vehicle (e.g., Toyota Fortuner)..."
//                     value={searchTerm}
//                     onChange={handleChange}
//                     onKeyDown={handleKeyDown}
//                     onFocus={() => {
//                       if (filteredVehicles.length > 0) {
//                         setIsDropdownOpen(true);
//                       }
//                     }}
//                     autoComplete="off"
//                     spellCheck={false}
//                   />

//                   {/* Clear Button with enhanced animation */}
//                   {searchTerm && (
//                     <button
//                       onClick={clearSearch}
//                       className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 transition-all duration-300 group/clear animate-in slide-in-from-right-2 fade-in"
//                       type="button"
//                     >
//                       <svg className="w-4 h-4 text-gray-500 group-hover/clear:text-gray-700 transition-all duration-200 group-hover/clear:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                       </svg>
//                     </button>
//                   )}

//                   {/* Enhanced Loading Indicator */}
//                   {isLoading && (
//                     <div className="absolute right-4 top-1/2 transform -translate-y-1/2 animate-in slide-in-from-right-2 fade-in">
//                       <div className="relative">
//                         <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
//                         <div className="absolute -inset-1 border border-gray-200 rounded-full animate-pulse"></div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Dropdown Results */}
//             {isDropdownOpen && filteredVehicles.length > 0 && (
//               <div className="absolute w-full mt-3 bg-white/95 backdrop-blur-md border-2 border-gray-300/50 rounded-3xl shadow-2xl shadow-black/10 z-50 overflow-hidden animate-in slide-in-from-top-2 fade-in duration-300">
//                 {/* Glass morphism overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90 backdrop-blur-sm rounded-3xl"></div>
                
//                 <div className="relative z-10">
//                   {/* Header */}
//                   <div className="px-6 py-4 bg-gradient-to-r from-gray-50 via-white to-gray-50 border-b border-gray-200/50">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-3">
//                         <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
//                           <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
//                             <path d="M7 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"/>
//                             <path d="M17 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"/>
//                             <path d="M8.5 12h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5z"/>
//                             <path d="M6 15c.83 0 1.5.67 1.5 1.5S6.83 18 6 18s-1.5-.67-1.5-1.5S5.17 15 6 15z"/>
//                             <path d="M18 15c.83 0 1.5.67 1.5 1.5S18.83 18 18 18s-1.5-.67-1.5-1.5S17.17 15 18 15z"/>
//                             <path d="M12 4c-4.24 0-7.65 3.28-7.96 7.4-.03.38.25.68.63.68h14.66c.38 0 .66-.3.63-.68C19.65 7.28 16.24 4 12 4z"/>
//                             <path d="M12 20c3.31 0 6.13-2.14 7.13-5.11.14-.41-.15-.89-.6-.89H5.47c-.45 0-.74.48-.6.89C5.87 17.86 8.69 20 12 20z"/>
//                           </svg>
//                         </div>
//                         <span className="text-sm font-semibold text-gray-700">Found {filteredVehicles.length} vehicle{filteredVehicles.length > 1 ? 's' : ''}</span>
//                       </div>
//                       <div className="flex space-x-1">
//                         <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                         <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
//                         <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-200"></div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Results List */}
//                   <div className="py-2 max-h-80 overflow-y-auto">
//                     {filteredVehicles.map((vehicle, index) => (
//                       <div
//                         key={vehicle.id}
//                         onClick={() => handleSelect(vehicle)}
//                         style={{ animationDelay: `${index * 50}ms` }}
//                         className={`mx-3 mb-2 px-6 py-5 cursor-pointer transition-all duration-300 flex items-center justify-between group rounded-2xl border border-transparent animate-in slide-in-from-left-3 fade-in ${
//                           index === selectedIndex 
//                             ? 'bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 border-gray-300 shadow-lg transform scale-[1.02] ring-2 ring-gray-400/30' 
//                             : 'hover:bg-gradient-to-r hover:from-gray-50/80 hover:via-white hover:to-gray-50/80 hover:shadow-lg hover:border-gray-200 hover:transform hover:scale-[1.01]'
//                         }`}
//                       >
//                         <div className="flex items-center space-x-5">
//                           {/* Enhanced Vehicle Icon with animation */}
//                           <div className="relative">
//                             <div className={`w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-600/30 ${
//                               index === selectedIndex ? 'rotate-6 scale-110' : 'group-hover:rotate-3 group-hover:scale-105'
//                             }`}>
//                               <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
//                                 <path d="M7 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"/>
//                                 <path d="M17 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"/>
//                                 <path d="M8.5 12h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5z"/>
//                                 <path d="M6 15c.83 0 1.5.67 1.5 1.5S6.83 18 6 18s-1.5-.67-1.5-1.5S5.17 15 6 15z"/>
//                                 <path d="M18 15c.83 0 1.5.67 1.5 1.5S18.83 18 18 18s-1.5-.67-1.5-1.5S17.17 15 18 15z"/>
//                                 <path d="M12 4c-4.24 0-7.65 3.28-7.96 7.4-.03.38.25.68.63.68h14.66c.38 0 .66-.3.63-.68C19.65 7.28 16.24 4 12 4z"/>
//                                 <path d="M12 20c3.31 0 6.13-2.14 7.13-5.11.14-.41-.15-.89-.6-.89H5.47c-.45 0-.74.48-.6.89C5.87 17.86 8.69 20 12 20z"/>
//                               </svg>
//                             </div>
//                             {/* Animated ring */}
//                             <div className={`absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-2xl opacity-20 blur-sm transition-all duration-300 ${
//                               index === selectedIndex ? 'opacity-40 animate-pulse' : 'group-hover:opacity-30'
//                             }`}></div>
//                           </div>
                          
//                           <div className="flex-1">
//                             <div className={`font-bold text-gray-800 text-lg mb-1 transition-all duration-300 ${
//                               index === selectedIndex ? 'text-gray-900 text-xl' : 'group-hover:text-gray-900'
//                             }`}>
//                               {vehicle.name}
//                             </div>
//                             <div className="flex items-center space-x-2 text-sm text-gray-600">
//                               <span className="px-2 py-1 bg-gray-100 rounded-lg font-medium">{vehicle.brand}</span>
//                               <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
//                               <span className="px-2 py-1 bg-gray-100 rounded-lg font-medium">{vehicle.type}</span>
//                             </div>
//                             <div className="mt-2 text-sm font-semibold text-gray-700">
//                               Starting from <span className="text-gray-900">{getStartingPrice(vehicle)}</span>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Enhanced Arrow with animation */}
//                         <div className="flex items-center space-x-3">
//                           <div className={`transition-all duration-300 ${
//                             index === selectedIndex ? 'transform translate-x-2' : 'group-hover:transform group-hover:translate-x-1'
//                           }`}>
//                             <svg 
//                               className={`w-6 h-6 transition-all duration-300 ${
//                                 index === selectedIndex 
//                                   ? 'text-gray-800 scale-110' 
//                                   : 'text-gray-500 group-hover:text-gray-700'
//                               }`}
//                               fill="none" 
//                               stroke="currentColor" 
//                               viewBox="0 0 24 24"
//                             >
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//                             </svg>
//                           </div>
//                           {/* Animated dots */}
//                           <div className={`flex flex-col space-y-1 transition-opacity duration-300 ${
//                             index === selectedIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
//                           }`}>
//                             <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
//                             <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-100"></div>
//                             <div className="w-1 h-1 bg-gray-600 rounded-full animate-bounce delay-200"></div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Enhanced Footer */}
//                   <div className="px-6 py-4 bg-gradient-to-r from-gray-50/80 via-white/90 to-gray-50/80 border-t border-gray-200/50 backdrop-blur-sm">
//                     <div className="flex items-center justify-center space-x-4">
//                       <div className="flex items-center space-x-2 text-xs text-gray-600">
//                         <div className="flex space-x-1">
//                           <kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">↑↓</kbd>
//                           <span>Navigate</span>
//                         </div>
//                         <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
//                         <div className="flex space-x-1">
//                           <kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">⏎</kbd>
//                           <span>Select</span>
//                         </div>
//                         <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
//                         <div className="flex space-x-1">
//                           <kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">Esc</kbd>
//                           <span>Close</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* No Results */}
//             {isDropdownOpen && searchTerm && filteredVehicles.length === 0 && !isLoading && (
//               <div className="absolute w-full mt-3 bg-white/95 backdrop-blur-md border-2 border-gray-300/50 rounded-3xl shadow-2xl shadow-black/10 z-50 overflow-hidden animate-in slide-in-from-top-2 fade-in duration-300">
//                 {/* Glass morphism overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90 backdrop-blur-sm rounded-3xl"></div>
                
//                 <div className="relative z-10 px-8 py-12 text-center">
//                   {/* Animated search icon */}
//                   <div className="relative mx-auto mb-6">
//                     <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg">
//                       <svg className="w-10 h-10 text-gray-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                       </svg>
//                     </div>
//                     {/* Animated rings */}
//                     <div className="absolute -inset-2 border-2 border-gray-300 rounded-full animate-ping opacity-20"></div>
//                     <div className="absolute -inset-4 border-2 border-gray-400 rounded-full animate-ping opacity-10 animation-delay-300"></div>
//                   </div>

//                   <div className="space-y-4">
//                     <h3 className="text-2xl font-bold text-gray-800 animate-in slide-in-from-bottom-2 fade-in duration-300">No vehicles found</h3>
                    
//                     <div className="max-w-sm mx-auto">
//                       <p className="text-gray-600 mb-4 animate-in slide-in-from-bottom-2 fade-in duration-300 delay-100">
//                         We couldn't find any vehicles matching <span className="font-semibold text-gray-800">"{searchTerm}"</span>
//                       </p>
                      
//                       {/* Suggestions */}
//                       <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl p-4 border border-gray-200 animate-in slide-in-from-bottom-2 fade-in duration-300 delay-200">
//                         <p className="text-sm text-gray-600 font-medium mb-3">Try searching for:</p>
//                         <div className="flex flex-wrap gap-2 justify-center">
//                           {['Toyota', 'Honda', 'BMW', 'Maruti', 'Hyundai'].map((suggestion, idx) => (
//                             <button
//                               key={suggestion}
//                               onClick={() => {
//                                 setSearchTerm(suggestion);
//                                 handleChange({ target: { value: suggestion } });
//                               }}
//                               style={{ animationDelay: `${idx * 50}ms` }}
//                               className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-800 transition-all duration-200 animate-in slide-in-from-bottom-1 fade-in hover:scale-105"
//                             >
//                               {suggestion}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Vehicle Details Section - Only show when vehicle is selected */}
//         {/* Removed - now navigating to separate page */}

//         {/* About Section - Always show */}
//         <div className="w-full max-w-4xl mx-auto">
//           <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border-2 border-gray-800 rounded-3xl p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-gray-700">
//             <div className="mb-8 text-center">
//               <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-800 to-black rounded-full mb-6 shadow-lg hover:from-gray-700 hover:to-gray-900 transition-all duration-300 hover:scale-105">
//                 <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                 </svg>
//               </div>
               
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-8 leading-tight">
//                 About Us
//               </h1>
//             </div>
             
//             <div className="space-y-6">
//               <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-light text-center">
//                 At <span className="text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-3 py-1 rounded-lg border border-gray-700">Shine R car detailing & accessories</span>, we bring your vehicle back to life with our expert detailing, ceramic coating, and protection services.
//               </p>
               
//               <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black border-2 border-gray-700 rounded-2xl p-6 shadow-md">
//                 <p className="text-lg sm:text-xl md:text-2xl text-white font-medium italic text-center">
//                   "We treat every vehicle like our own."
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";

// Mock vehicle data for demo purposes

 import { vehicles } from "./vehicleData";
export default function CombinedSearchAbout() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Helper function to format prices in INR
  const formatPrice = (serviceData) => {
    if (typeof serviceData === 'object' && serviceData.price) {
      const price = serviceData.price;
      if (typeof price === 'number') {
        return new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          maximumFractionDigits: 0
        }).format(price);
      }
      return price;
    }
    return serviceData;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSelectedIndex(-1);

    if (value.trim() === "") {
      setFilteredVehicles([]);
      setIsDropdownOpen(false);
    } else {
      setIsLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        const filtered = vehicles.filter((v) => {
          const nameMatch = v.name?.toLowerCase().includes(value.toLowerCase());
          const brandMatch = v.brand?.toLowerCase().includes(value.toLowerCase());
          const typeMatch = v.type?.toLowerCase().includes(value.toLowerCase());
          
          return nameMatch || brandMatch || typeMatch;
        });
        setFilteredVehicles(filtered);
        setIsDropdownOpen(filtered.length > 0);
        setIsLoading(false);
      }, 300);
    }
  };

  const handleKeyDown = (e) => {
    if (!isDropdownOpen || filteredVehicles.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredVehicles.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredVehicles.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSelect(filteredVehicles[selectedIndex]);
        }
        break;
      case "Escape":
        setIsDropdownOpen(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSelect = (vehicle) => {
    setSearchTerm(vehicle.name);
    setFilteredVehicles([]);
    setIsDropdownOpen(false);
    setSelectedIndex(-1);
    
    // Navigate to vehicle details page (simulate routing)
    // In a real app, you'd use router.push(`/vehicle/${vehicle.id}`)
    window.open(`vehicle/${vehicle.id}`, '_blank');
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredVehicles([]);
    setIsDropdownOpen(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  // Get the starting price (lowest price from services)
  const getStartingPrice = (vehicle) => {
    if (!vehicle.services) return "N/A";
    
    const services = vehicle.services;
    const prices = Object.values(services).map(service => {
      if (typeof service === 'object' && service.price) {
        return typeof service.price === 'number' ? service.price : 0;
      }
      return typeof service === 'number' ? service : 0;
    }).filter(price => price > 0);

    if (prices.length === 0) return "Contact for pricing";
    
    const minPrice = Math.min(...prices);
    return formatPrice({ price: minPrice });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center min-h-screen px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Search Section */}
        <div className="w-full max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight">
              Find Your Vehicle
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">
              Search for your vehicle to get expert detailing and protection services
            </p>
          </div>

          <div className="relative w-full max-w-lg mx-auto" ref={dropdownRef}>
            {/* Search Input Container */}
            <div className="relative group">
              <div className="relative bg-white rounded-2xl border-2 border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-gray-400">
                {/* Animated gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                <div className="relative bg-white rounded-2xl">
                
                  {/* Search Icon */}
                  <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-focus-within:text-gray-700 transition-colors duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>

                  {/* Input Field */}
                  <input
                    ref={inputRef}
                    type="text"
                    className="w-full py-3 sm:py-4 pl-10 sm:pl-12 pr-10 sm:pr-12 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-0 font-medium rounded-2xl transition-all duration-300"
                    placeholder="Search your vehicle (e.g., Toyota Fortuner)..."
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => {
                      if (filteredVehicles.length > 0) {
                        setIsDropdownOpen(true);
                      }
                    }}
                    autoComplete="off"
                    spellCheck={false}
                  />

                  {/* Clear Button */}
                  {searchTerm && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
                      type="button"
                    >
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 hover:text-gray-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}

                  {/* Loading Indicator */}
                  {isLoading && (
                    <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Dropdown Results */}
            {isDropdownOpen && filteredVehicles.length > 0 && (
              <div className="absolute w-full mt-2 sm:mt-3 bg-white/95 backdrop-blur-md border-2 border-gray-300/50 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/10 z-50 overflow-hidden">
                {/* Glass morphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-gray-50 via-white to-gray-50 border-b border-gray-200/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                            <path d="M18 15c.83 0 1.5.67 1.5 1.5S18.83 18 18 18s-1.5-.67-1.5-1.5S17.17 15 18 15z"/>
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">Found {filteredVehicles.length} vehicle{filteredVehicles.length > 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  </div>

                  {/* Results List */}
                  <div className="py-1 sm:py-2 max-h-64 sm:max-h-80 overflow-y-auto">
                    {filteredVehicles.map((vehicle, index) => (
                      <div
                        key={vehicle.id}
                        onClick={() => handleSelect(vehicle)}
                        className={`mx-2 sm:mx-3 mb-1 sm:mb-2 px-3 sm:px-6 py-3 sm:py-5 cursor-pointer transition-all duration-200 flex items-center justify-between group rounded-lg sm:rounded-2xl border border-transparent ${
                          index === selectedIndex 
                            ? 'bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 border-gray-300 shadow-lg' 
                            : 'hover:bg-gradient-to-r hover:from-gray-50/80 hover:via-white hover:to-gray-50/80 hover:shadow-lg hover:border-gray-200'
                        }`}
                      >
                        <div className="flex items-center space-x-3 sm:space-x-5">
                          {/* Vehicle Icon */}
                          <div className="relative">
                            <div className={`w-8 h-8 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg transition-all duration-200 ${
                              index === selectedIndex ? 'scale-105' : 'group-hover:scale-105'
                            }`}>
                              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                <path d="M6 15c.83 0 1.5.67 1.5 1.5S6.83 18 6 18s-1.5-.67-1.5-1.5S5.17 15 6 15z"/>
                                <path d="M18 15c.83 0 1.5.67 1.5 1.5S18.83 18 18 18s-1.5-.67-1.5-1.5S17.17 15 18 15z"/>
                              </svg>
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className={`font-bold text-gray-800 text-sm sm:text-lg mb-1 transition-all duration-200 truncate ${
                              index === selectedIndex ? 'text-gray-900' : 'group-hover:text-gray-900'
                            }`}>
                              {vehicle.name}
                            </div>
                            <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-600 mb-1">
                              <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-100 rounded text-xs font-medium">{vehicle.brand}</span>
                              <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-400 rounded-full"></span>
                              <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-100 rounded text-xs font-medium">{vehicle.type}</span>
                            </div>
                            <div className="text-xs sm:text-sm font-semibold text-gray-700">
                              Starting from <span className="text-gray-900">{getStartingPrice(vehicle)}</span>
                            </div>
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="flex-shrink-0 ml-2">
                          <svg 
                            className={`w-4 h-4 sm:w-6 sm:h-6 transition-all duration-200 ${
                              index === selectedIndex 
                                ? 'text-gray-800' 
                                : 'text-gray-500 group-hover:text-gray-700'
                            }`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer - Hidden on mobile for space */}
                  <div className="hidden sm:block px-6 py-4 bg-gradient-to-r from-gray-50/80 via-white/90 to-gray-50/80 border-t border-gray-200/50 backdrop-blur-sm">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center space-x-2 text-xs text-gray-600">
                        <div className="flex space-x-1">
                          <kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">↑↓</kbd>
                          <span>Navigate</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="flex space-x-1">
                          <kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">⏎</kbd>
                          <span>Select</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="flex space-x-1">
                          <kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">Esc</kbd>
                          <span>Close</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* No Results */}
            {isDropdownOpen && searchTerm && filteredVehicles.length === 0 && !isLoading && (
              <div className="absolute w-full mt-2 sm:mt-3 bg-white/95 backdrop-blur-md border-2 border-gray-300/50 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/10 z-50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl"></div>
                
                <div className="relative z-10 px-4 sm:px-8 py-6 sm:py-12 text-center">
                  {/* Search icon */}
                  <div className="relative mx-auto mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 sm:w-10 sm:h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-800">No vehicles found</h3>
                    
                    <div className="max-w-sm mx-auto">
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                        We couldn't find any vehicles matching <span className="font-semibold text-gray-800">"{searchTerm}"</span>
                      </p>
                      
                      {/* Suggestions */}
                      <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-200">
                        <p className="text-xs sm:text-sm text-gray-600 font-medium mb-2 sm:mb-3">Try searching for:</p>
                        <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                          {['Toyota', 'Honda', 'BMW', 'Maruti', 'Hyundai'].map((suggestion) => (
                            <button
                              key={suggestion}
                              onClick={() => {
                                setSearchTerm(suggestion);
                                handleChange({ target: { value: suggestion } });
                              }}
                              className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-gray-300 rounded-lg text-xs sm:text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-800 transition-all duration-200"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* About Section */}
        {/* <div className="w-full max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border-2 border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-gray-700">
            <div className="mb-6 sm:mb-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-gray-800 to-black rounded-full mb-4 sm:mb-6 shadow-lg hover:from-gray-700 hover:to-gray-900 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
               
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight">
                About Us
              </h1>
            </div>
             
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed font-light text-center px-2">
                At <span className="text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-2 sm:px-3 py-1 rounded-lg border border-gray-700">Shine R car detailing & accessories</span>, we bring your vehicle back to life with our expert detailing, ceramic coating, and protection services.
              </p>
               
              <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black border-2 border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-medium italic text-center">
                  "We treat every vehicle like our own."
                </p>
              </div>
            </div>
          </div>
        </div> */}

         <div className="w-full max-w-4xl mx-auto">
         <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border-2 border-gray-800 rounded-3xl p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-gray-700">
             <div className="mb-8 text-center">
               <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-800 to-black rounded-full mb-6 shadow-lg hover:from-gray-700 hover:to-gray-900 transition-all duration-300 hover:scale-105">
                 <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                 </svg>
               </div>
               
               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-8 leading-tight">
                 About Us
               </h1>
             </div>
             
             <div className="space-y-6">
               <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-light text-center">
                 At <span className="text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-3 py-1 rounded-lg border border-gray-700">Shine R car detailing & accessories</span> , we bring your vehicle back to life with our expert detailing, ceramic coating, and protection services.
               </p>
               
               <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black border-2 border-gray-700 rounded-2xl p-6 shadow-md">
                 <p className="text-lg sm:text-xl md:text-2xl text-white font-medium italic text-center">
                   "We treat every vehicle like our own."
                 </p>
               </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
}