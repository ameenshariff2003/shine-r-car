// import React from "react";
// import '../hero/hero.scss'
// import { useState, useEffect, useRef } from "react";
// import vid from '../images/vid.mp4'

// const HeroVideo = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleCanPlay = () => {
//       setIsLoaded(true);
//       // Simple play attempt without complex retry logic
//       video.play().catch(() => {
//         // Silent fail - let user interact to play if needed
//       });
//     };

//     const handleLoadedData = () => {
//       setIsLoaded(true);
//     };
    
//     const handleEnded = () => {
//       video.currentTime = 0;
//       video.play().catch(() => {});
//     };

//     // Add minimal event listeners
//     video.addEventListener('canplay', handleCanPlay);
//     video.addEventListener('loadeddata', handleLoadedData);
//     video.addEventListener('ended', handleEnded);

//     // Set video properties
//     video.muted = true;
//     video.loop = true;
//     video.playsInline = true;
//     video.preload = 'auto';

//     // Load video
//     video.load();

//     // Cleanup
//     return () => {
//       video.removeEventListener('canplay', handleCanPlay);
//       video.removeEventListener('loadeddata', handleLoadedData);
//       video.removeEventListener('ended', handleEnded);
//     };
//   }, []);

//   return (
//     <div className={`relative w-full h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      
//       {/* Simple dark background for loading */}
//       <div className="absolute inset-0 bg-black"></div>

//       {/* Video Container */}
//       <div className="absolute inset-0 w-full h-full z-10">
//         <video
//           ref={videoRef}
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           controls={false}
//           disablePictureInPicture
//           webkit-playsinline="true"
//         >
//           <source src={vid} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
        
//         {/* Simple gradient overlays */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 z-20"></div>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20"></div>
//       </div>

//       {/* Brand Name - Bottom Left with Modern Curvy Style */}
//       <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 z-30">
//         <div className="brand-container animate-slide-up">
//           <h1 className="relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-wide cursive-text">
//             <span 
//   className="block drop-shadow-2xl transform hover:scale-105 transition-transform duration-300 cursive-main-title shine-gradient"
// >
//   Shine R
// </span>

//             <span className="block text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light tracking-widest text-gray-200 mt-2 drop-shadow-lg transform -rotate-1">
//               car detailing & accessories
//             </span>
//           </h1>
//         </div>
//       </div>

       
//     </div>
//   );
// };

// export default HeroVideo;


import React from "react";
import '../hero/hero.scss'
import { useState, useEffect, useRef } from "react";
import vid from '../images/vid.mp4'

const HeroVideo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      // Simple play attempt without complex retry logic
      video.play().catch(() => {
        // Silent fail - let user interact to play if needed
      });
    };

    const handleLoadedData = () => {
      setIsLoaded(true);
    };
        
    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    // Add minimal event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('ended', handleEnded);

    // Set video properties
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';

    // Load video
    video.load();

    // Cleanup
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className={`hero-video-container relative w-full h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            
      {/* Simple dark background for loading */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Video Container */}
      <div className="absolute inset-0 w-full h-full video-wrapper">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          webkit-playsinline="true"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
                
        {/* Simple gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 video-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent video-overlay"></div>
      </div>

      {/* Brand Name - Bottom Left with Modern Curvy Style */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 brand-content">
        <div className="brand-container animate-slide-up">
          <h1 className="relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-wide cursive-text">
            <span 
              className="block drop-shadow-2xl transform hover:scale-105 transition-transform duration-300 cursive-main-title shine-gradient"
            >
              Shine R
            </span>
            
            <span className="block text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light tracking-widest text-gray-200 mt-2 drop-shadow-lg transform -rotate-1">
              car detailing & accessories
            </span>
          </h1>
        </div>
      </div>
            
    </div>
  );
};

export default HeroVideo;