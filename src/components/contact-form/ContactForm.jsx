// import React, { useState, useEffect } from "react";
// import { Send, User, Mail, MessageCircle, AlertCircle, CheckCircle, Sparkles } from "lucide-react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (formData.name.trim().length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = "Message must be at least 10 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);
    
//     try {
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       setSubmitted(true);
//       setFormData({ name: "", email: "", message: "" });
//       setErrors({});
      
//       setTimeout(() => {
//         setSubmitted(false);
//       }, 5000);
      
//     } catch (error) {
//       console.error('Form submission error:', error);
//       alert('There was an error sending your message. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });

//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: ""
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white relative overflow-hidden">
//       {/* Dynamic Background Patterns */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-gray-300/40 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
//         <div className="absolute top-20 right-10 w-72 h-72 bg-gray-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
//       </div>

//       {/* Geometric Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-400 rotate-45 animate-twinkle"></div>
//         <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-gray-500 rotate-45 animate-twinkle animation-delay-1000"></div>
//         <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-gray-600 rotate-45 animate-twinkle animation-delay-3000"></div>
//         <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-gray-400 rotate-45 animate-twinkle animation-delay-2000"></div>
//       </div>

//       <div id="contact" className="relative z-10 flex items-center justify-center min-h-screen p-6">
//         <div className="w-full max-w-2xl">
//           {/* Header Section */}
//           <div className="text-center mb-16 animate-slide-down">
//             <div className="inline-block mb-6 p-3 bg-gray-200/50 rounded-full backdrop-blur-sm">
//               <Sparkles className="w-8 h-8 text-gray-700 animate-spin-slow" />
//             </div>
//             <h1  className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight">
//               Let's Connect
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
//               Transform your vision into reality. Share your ideas and we'll bring them to life.
//             </p>
//           </div>

//           {/* Contact Form */}
//           <div className="animate-slide-up">
//             {submitted && (
//               <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6 animate-bounce-gentle">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                     <CheckCircle className="w-6 h-6 text-green-600 animate-check-pop" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-green-800">Message Sent!</h4>
//                     <p className="text-green-700">We'll get back to you soon.</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="bg-white/90 backdrop-blur-xl border border-gray-200/60 rounded-3xl p-10 shadow-2xl">
//               <div className="space-y-8">
//                 {/* Name Field */}
//                 <div className="relative group">
//                   <label className="block text-sm font-semibold text-gray-700 mb-3">Your Name</label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('name')}
//                       onBlur={() => setFocusedField(null)}
//                       placeholder="Enter your full name"
//                       className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none transition-all duration-300 relative z-10 ${
//                         errors.name 
//                           ? 'border-red-300 focus:border-red-500 bg-red-50/50' 
//                           : focusedField === 'name' 
//                             ? 'border-gray-500 bg-white shadow-lg transform scale-[1.02]' 
//                             : 'border-gray-200 hover:border-gray-300'
//                       }`}
//                     />
//                     <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400/10 to-gray-600/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
//                       focusedField === 'name' ? 'opacity-100' : ''
//                     }`}></div>
//                   </div>
//                   {errors.name && (
//                     <div className="flex items-center gap-2 mt-3 text-red-600 animate-shake">
//                       <AlertCircle className="w-4 h-4" />
//                       <span className="text-sm font-medium">{errors.name}</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Email Field */}
//                 <div className="relative group">
//                   <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
//                   <div className="relative">
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('email')}
//                       onBlur={() => setFocusedField(null)}
//                       placeholder="your.email@example.com"
//                       className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none transition-all duration-300 relative z-10 ${
//                         errors.email 
//                           ? 'border-red-300 focus:border-red-500 bg-red-50/50' 
//                           : focusedField === 'email' 
//                             ? 'border-gray-500 bg-white shadow-lg transform scale-[1.02]' 
//                             : 'border-gray-200 hover:border-gray-300'
//                       }`}
//                     />
//                     <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400/10 to-gray-600/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
//                       focusedField === 'email' ? 'opacity-100' : ''
//                     }`}></div>
//                   </div>
//                   {errors.email && (
//                     <div className="flex items-center gap-2 mt-3 text-red-600 animate-shake">
//                       <AlertCircle className="w-4 h-4" />
//                       <span className="text-sm font-medium">{errors.email}</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Message Field */}
//                 <div className="relative group">
//                   <label className="block text-sm font-semibold text-gray-700 mb-3">Your Message</label>
//                   <div className="relative">
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('message')}
//                       onBlur={() => setFocusedField(null)}
//                       placeholder="Tell us about your project, goals, and how we can help..."
//                       rows="6"
//                       className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none resize-none transition-all duration-300 relative z-10 ${
//                         errors.message 
//                           ? 'border-red-300 focus:border-red-500 bg-red-50/50' 
//                           : focusedField === 'message' 
//                             ? 'border-gray-500 bg-white shadow-lg transform scale-[1.02]' 
//                             : 'border-gray-200 hover:border-gray-300'
//                       }`}
//                     />
//                     <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400/10 to-gray-600/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
//                       focusedField === 'message' ? 'opacity-100' : ''
//                     }`}></div>
//                   </div>
//                   {errors.message && (
//                     <div className="flex items-center gap-2 mt-3 text-red-600 animate-shake">
//                       <AlertCircle className="w-4 h-4" />
//                       <span className="text-sm font-medium">{errors.message}</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="button"
//                   onClick={handleSubmit}
//                   disabled={isSubmitting}
//                   className="group relative w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white font-bold py-5 px-8 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-400/50 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-700">
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                   </div>
//                   <div className="relative flex items-center justify-center gap-3 text-lg">
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         <span>Sending Message...</span>
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//                         <span>Send Message</span>
//                       </>
//                     )}
//                   </div>
//                 </button>
//                               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ContactForm;

// import React, { useState, useEffect } from "react";
// import { Send, User, Mail, MessageCircle, AlertCircle, CheckCircle, Sparkles } from "lucide-react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (formData.name.trim().length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = "Message must be at least 10 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);
    
//     try {
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       setSubmitted(true);
//       setFormData({ name: "", email: "", message: "" });
//       setErrors({});
      
//       setTimeout(() => {
//         setSubmitted(false);
//       }, 5000);
      
//     } catch (error) {
//       console.error('Form submission error:', error);
//       alert('There was an error sending your message. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });

//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: ""
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white relative overflow-hidden">
//       {/* Dynamic Background Patterns */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-gray-300/40 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
//         <div className="absolute top-20 right-10 w-72 h-72 bg-gray-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
//       </div>

//       {/* Geometric Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-400 animate-twinkle"></div>
//         <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-gray-500 animate-twinkle animation-delay-1000"></div>
//         <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-gray-600 animate-twinkle animation-delay-3000"></div>
//         <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-gray-400 animate-twinkle animation-delay-2000"></div>
//       </div>

//       <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
//         <div className="w-full max-w-2xl">
//           {/* Header Section */}
//           <div className="text-center mb-16 animate-slide-down">
//             <div className="inline-block mb-6 p-3 bg-gray-200/50 rounded-full backdrop-blur-sm">
//               <Sparkles className="w-8 h-8 text-gray-700 animate-spin-slow" />
//             </div>
//             <h1 
//             id="contact"
//              className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight">
//               Let's Connect
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
//               Transform your vision into reality. Share your ideas and we'll bring them to life.
//             </p>
//           </div>

//           {/* Contact Form */}
//           <div className="animate-slide-up">
//             {submitted && (
//               <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6 animate-bounce-gentle">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                     <CheckCircle className="w-6 h-6 text-green-600 animate-check-pop" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-green-800">Message Sent!</h4>
//                     <p className="text-green-700">We'll get back to you soon.</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="bg-white/90 backdrop-blur-xl border border-gray-200/60 rounded-3xl p-10 shadow-2xl">
//               <div className="space-y-8">
//                 {/* Name Field */}
//                 <div className="relative group">
//                   <label className="block text-sm font-semibold text-gray-700 mb-3">Your Name</label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('name')}
//                       onBlur={() => setFocusedField(null)}
//                       placeholder="Enter your full name"
//                       className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none transition-all duration-300 relative z-10 ${
//                         errors.name 
//                           ? 'border-red-300 focus:border-red-500 bg-red-50/50' 
//                           : focusedField === 'name' 
//                             ? 'border-gray-500 bg-white shadow-lg transform scale-[1.02]' 
//                             : 'border-gray-200 hover:border-gray-300'
//                       }`}
//                     />
//                     <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400/10 to-gray-600/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
//                       focusedField === 'name' ? 'opacity-100' : ''
//                     }`}></div>
//                   </div>
//                   {errors.name && (
//                     <div className="flex items-center gap-2 mt-3 text-red-600 animate-shake">
//                       <AlertCircle className="w-4 h-4" />
//                       <span className="text-sm font-medium">{errors.name}</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Email Field */}
//                 <div className="relative group">
//                   <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
//                   <div className="relative">
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('email')}
//                       onBlur={() => setFocusedField(null)}
//                       placeholder="your.email@example.com"
//                       className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none transition-all duration-300 relative z-10 ${
//                         errors.email 
//                           ? 'border-red-300 focus:border-red-500 bg-red-50/50' 
//                           : focusedField === 'email' 
//                             ? 'border-gray-500 bg-white shadow-lg transform scale-[1.02]' 
//                             : 'border-gray-200 hover:border-gray-300'
//                       }`}
//                     />
//                     <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400/10 to-gray-600/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
//                       focusedField === 'email' ? 'opacity-100' : ''
//                     }`}></div>
//                   </div>
//                   {errors.email && (
//                     <div className="flex items-center gap-2 mt-3 text-red-600 animate-shake">
//                       <AlertCircle className="w-4 h-4" />
//                       <span className="text-sm font-medium">{errors.email}</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Message Field */}
//                 <div className="relative group">
//                   <label className="block text-sm font-semibold text-gray-700 mb-3">Your Message</label>
//                   <div className="relative">
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('message')}
//                       onBlur={() => setFocusedField(null)}
//                       placeholder="Tell us about your project, goals, and how we can help..."
//                       rows="6"
//                       className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none resize-none transition-all duration-300 relative z-10 ${
//                         errors.message 
//                           ? 'border-red-300 focus:border-red-500 bg-red-50/50' 
//                           : focusedField === 'message' 
//                             ? 'border-gray-500 bg-white shadow-lg transform scale-[1.02]' 
//                             : 'border-gray-200 hover:border-gray-300'
//                       }`}
//                     />
//                     <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400/10 to-gray-600/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
//                       focusedField === 'message' ? 'opacity-100' : ''
//                     }`}></div>
//                   </div>
//                   {errors.message && (
//                     <div className="flex items-center gap-2 mt-3 text-red-600 animate-shake">
//                       <AlertCircle className="w-4 h-4" />
//                       <span className="text-sm font-medium">{errors.message}</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="button"
//                   onClick={handleSubmit}
//                   disabled={isSubmitting}
//                   className="group relative w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white font-bold py-5 px-8 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-400/50 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-700">
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                   </div>
//                   <div className="relative flex items-center justify-center gap-3 text-lg">
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         <span>Sending Message...</span>
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//                         <span>Send Message</span>
//                       </>
//                     )}
//                   </div>
//                 </button>
//                               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
      


//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
        
//         @keyframes twinkle {
//           0%, 100% { opacity: 0.3; transform: rotate(45deg) scale(1); }
//           50% { opacity: 1; transform: rotate(225deg) scale(1.2); }
//         }
        
//         @keyframes slide-down {
//           from { opacity: 0; transform: translateY(-50px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes slide-up {
//           from { opacity: 0; transform: translateY(50px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes bounce-gentle {
//           0% { opacity: 0; transform: translateY(-20px) scale(0.9); }
//           60% { opacity: 1; transform: translateY(5px) scale(1.02); }
//           100% { opacity: 1; transform: translateY(0) scale(1); }
//         }
        
//         @keyframes check-pop {
//           0% { transform: scale(0) rotate(-180deg); }
//           80% { transform: scale(1.2) rotate(10deg); }
//           100% { transform: scale(1) rotate(0deg); }
//         }
        
//         @keyframes shake {
//           0%, 100% { transform: translateX(0); }
//           25% { transform: translateX(-5px); }
//           75% { transform: translateX(5px); }
//         }
        
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
        
//         .animate-twinkle {
//           animation: twinkle 3s ease-in-out infinite;
//         }
        
//         .animate-slide-down {
//           animation: slide-down 1s ease-out;
//         }
        
//         .animate-slide-up {
//           animation: slide-up 1s ease-out;
//         }
        
//         .animate-bounce-gentle {
//           animation: bounce-gentle 0.8s ease-out;
//         }
        
//         .animate-check-pop {
//           animation: check-pop 0.6s ease-out;
//         }
        
//         .animate-shake {
//           animation: shake 0.5s ease-in-out;
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }
        
//         .animation-delay-1000 {
//           animation-delay: 1000ms;
//         }
        
//         .animation-delay-2000 {
//           animation-delay: 2000ms;
//         }
        
//         .animation-delay-3000 {
//           animation-delay: 3000ms;
//         }
        
//         .animation-delay-4000 {
//           animation-delay: 4000ms;
//         }
        
//       `}</style>
//     </div>
//   );
// };

// export default ContactForm;




// import React, { useState, useEffect } from "react";
// import { Send, User, Mail, MessageCircle, AlertCircle, CheckCircle, Sparkles } from "lucide-react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);
//   const [emailjsLoaded, setEmailjsLoaded] = useState(false);

//   const publicKey = process.env.PUBLIC_KEY;
// const serviceId = process.env.SERVICE_ID;
// const templateId = process.env.TEMPLATE_ID;

//   // Load EmailJS
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
//     script.onload = () => {
//       // Initialize EmailJS with your public key
//       if (window.emailjs) {
//         window.emailjs.init(publicKey); // Replace with your actual public key
//         setEmailjsLoaded(true);
//       }
//     };
//     document.head.appendChild(script);

//     return () => {
//       if (document.head.contains(script)) {
//         document.head.removeChild(script);
//       }
//     };
//   }, []);

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (formData.name.trim().length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = "Message must be at least 10 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }

//     if (!emailjsLoaded) {
//       alert('EmailJS is still loading. Please try again in a moment.');
//       return;
//     }

//     setIsSubmitting(true);
    
//     try {
//       // Send email using EmailJS
//       if (window.emailjs) {
//         const result = await window.emailjs.send(
//           serviceId,    // Replace with your service ID
//           templateId,   // Replace with your template ID
//           {
//             from_name: formData.name,
//             from_email: formData.email,
//             message: formData.message,
//             to_name: 'Zameer', // Replace with recipient name
//           }
//         );

//         console.log('Email sent successfully:', result);
//         setSubmitted(true);
//         setFormData({ name: "", email: "", message: "" });
//         setErrors({});
        
//         setTimeout(() => {
//           setSubmitted(false);
//         }, 5000);
//       } else {
//         throw new Error('EmailJS not loaded');
//       }
      
//     } catch (error) {
//       console.error('Email send error:', error);
//       alert('There was an error sending your message. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });

//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: ""
//       });
//     }
//   };

//   const blobKeyframes = `
//     @keyframes blob {
//       0% { transform: translate(0px, 0px) scale(1); }
//       33% { transform: translate(30px, -50px) scale(1.1); }
//       66% { transform: translate(-20px, 20px) scale(0.9); }
//       100% { transform: translate(0px, 0px) scale(1); }
//     }
//   `;

//   const twinkleKeyframes = `
//     @keyframes twinkle {
//       0%, 100% { opacity: 0.3; transform: rotate(45deg) scale(1); }
//       50% { opacity: 1; transform: rotate(225deg) scale(1.2); }
//     }
//   `;

//   const slideDownKeyframes = `
//     @keyframes slide-down {
//       from { opacity: 0; transform: translateY(-50px); }
//       to { opacity: 1; transform: translateY(0); }
//     }
//   `;

//   const slideUpKeyframes = `
//     @keyframes slide-up {
//       from { opacity: 0; transform: translateY(50px); }
//       to { opacity: 1; transform: translateY(0); }
//     }
//   `;

//   const bounceGentleKeyframes = `
//     @keyframes bounce-gentle {
//       0% { opacity: 0; transform: translateY(-20px) scale(0.9); }
//       60% { opacity: 1; transform: translateY(5px) scale(1.02); }
//       100% { opacity: 1; transform: translateY(0) scale(1); }
//     }
//   `;

//   const checkPopKeyframes = `
//     @keyframes check-pop {
//       0% { transform: scale(0) rotate(-180deg); }
//       80% { transform: scale(1.2) rotate(10deg); }
//       100% { transform: scale(1) rotate(0deg); }
//     }
//   `;

//   const shakeKeyframes = `
//     @keyframes shake {
//       0%, 100% { transform: translateX(0); }
//       25% { transform: translateX(-5px); }
//       75% { transform: translateX(5px); }
//     }
//   `;

//   const spinSlowKeyframes = `
//     @keyframes spin-slow {
//       from { transform: rotate(0deg); }
//       to { transform: rotate(360deg); }
//     }
//   `;

//   const allKeyframes = `
//     ${blobKeyframes}
//     ${twinkleKeyframes}
//     ${slideDownKeyframes}
//     ${slideUpKeyframes}
//     ${bounceGentleKeyframes}
//     ${checkPopKeyframes}
//     ${shakeKeyframes}
//     ${spinSlowKeyframes}
    
//     .animate-blob {
//       animation: blob 7s infinite;
//     }
    
//     .animate-twinkle {
//       animation: twinkle 3s ease-in-out infinite;
//     }
    
//     .animate-slide-down {
//       animation: slide-down 1s ease-out;
//     }
    
//     .animate-slide-up {
//       animation: slide-up 1s ease-out;
//     }
    
//     .animate-bounce-gentle {
//       animation: bounce-gentle 0.8s ease-out;
//     }
    
//     .animate-check-pop {
//       animation: check-pop 0.6s ease-out;
//     }
    
//     .animate-shake {
//       animation: shake 0.5s ease-in-out;
//     }
    
//     .animate-spin-slow {
//       animation: spin-slow 8s linear infinite;
//     }
    
//     .animation-delay-1000 {
//       animation-delay: 1000ms;
//     }
    
//     .animation-delay-2000 {
//       animation-delay: 2000ms;
//     }
    
//     .animation-delay-3000 {
//       animation-delay: 3000ms;
//     }
    
//     .animation-delay-4000 {
//       animation-delay: 4000ms;
//     }
//   `;

//   return (
//     <div className="min-h-screen bg-white relative overflow-hidden">
//       <style dangerouslySetInnerHTML={{ __html: allKeyframes }} />
      
//       {/* Dynamic Background Patterns */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-gray-300/40 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
//         <div className="absolute top-20 right-10 w-72 h-72 bg-gray-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
//       </div>

//       {/* Geometric Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-400 animate-twinkle"></div>
//         <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-gray-500 animate-twinkle animation-delay-1000"></div>
//         <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-gray-600 animate-twinkle animation-delay-3000"></div>
//         <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-gray-400 animate-twinkle animation-delay-2000"></div>
//       </div>

//       <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
//         <div className="w-full max-w-2xl">
//           {/* Header Section */}
//           <div className="text-center mb-16 animate-slide-down">
//             <div className="inline-block mb-6 p-3 bg-gray-200/50 rounded-full backdrop-blur-sm">
//               <Sparkles className="w-8 h-8 text-gray-700 animate-spin-slow" />
//             </div>
//             <h1 
//               id="contact"
//               className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight"
//             >
//               Let's Connect
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
//               Transform your vision into reality. Share your ideas and we'll bring them to life.
//             </p>
//           </div>

//           {/* Contact Form */}
//           <div className="animate-slide-up">
//             {submitted && (
//               <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6 animate-bounce-gentle">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                     <CheckCircle className="w-6 h-6 text-green-600 animate-check-pop" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-green-800">Message Sent!</h4>
//                     <p className="text-green-700">We'll get back to you soon.</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="bg-white/90 backdrop-blur-xl border border-gray-200/60 rounded-3xl p-10 shadow-2xl">
//               <div className="space-y-8">
//                 {/* Name Field */}
//                 <div className="relative group">
//                   <label className="block text-sm font-semibold text-gray-700 mb-3">Your Name</label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('name')}
//                       onBlur={() => setFocusedField(null)}
//                       placeholder="Enter your full name"
//                       className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none transition-all duration-300 relative z-10 ${
//                         errors.name 
//                           ? 'border-red-300 focus:border-red-500 bg-red-50/50' 
//                           : focusedField === 'name' 
//                             ? 'border-gray-500 bg-white shadow-lg transform scale-[1.02]' 
//                             : 'border-gray-200 hover:border-gray-300'
//                       }`}
//                     />
//                     <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400/10 to-gray-600/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
//                       focusedField === 'name' ? 'opacity-100' : ''
//                     }`}></div>
//                   </div>
//                   {errors.name && (
//                     <div className="flex items-center gap-2 mt-3 text-red-600 animate-shake">
//                       <AlertCircle className="w-4 h-4" />
//                       <span className="text-sm font-medium">{errors.name}</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Email Field */}
//                 <div className="relative group">
//                   <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
//                   <div className="relative">
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('email')}
//                       onBlur={() => setFocusedField(null)}
//                       placeholder="your.email@example.com"
//                       className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none transition-all duration-300 relative z-10 ${
//                         errors.email 
//                           ? 'border-red-300 focus:border-red-500 bg-red-50/50' 
//                           : focusedField === 'email' 
//                             ? 'border-gray-500 bg-white shadow-lg transform scale-[1.02]' 
//                             : 'border-gray-200 hover:border-gray-300'
//                       }`}
//                     />
//                     <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400/10 to-gray-600/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
//                       focusedField === 'email' ? 'opacity-100' : ''
//                     }`}></div>
//                   </div>
//                   {errors.email && (
//                     <div className="flex items-center gap-2 mt-3 text-red-600 animate-shake">
//                       <AlertCircle className="w-4 h-4" />
//                       <span className="text-sm font-medium">{errors.email}</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Message Field */}
//                 <div className="relative group">
//                   <label className="block text-sm font-semibold text-gray-700 mb-3">Your Message</label>
//                   <div className="relative">
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('message')}
//                       onBlur={() => setFocusedField(null)}
//                       placeholder="Tell us about your project, goals, and how we can help..."
//                       rows="6"
//                       className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none resize-none transition-all duration-300 relative z-10 ${
//                         errors.message 
//                           ? 'border-red-300 focus:border-red-500 bg-red-50/50' 
//                           : focusedField === 'message' 
//                             ? 'border-gray-500 bg-white shadow-lg transform scale-[1.02]' 
//                             : 'border-gray-200 hover:border-gray-300'
//                       }`}
//                     />
//                     <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400/10 to-gray-600/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
//                       focusedField === 'message' ? 'opacity-100' : ''
//                     }`}></div>
//                   </div>
//                   {errors.message && (
//                     <div className="flex items-center gap-2 mt-3 text-red-600 animate-shake">
//                       <AlertCircle className="w-4 h-4" />
//                       <span className="text-sm font-medium">{errors.message}</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="button"
//                   onClick={handleSubmit}
//                   disabled={isSubmitting || !emailjsLoaded}
//                   className="group relative w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white font-bold py-5 px-8 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-400/50 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-700">
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                   </div>
//                   <div className="relative flex items-center justify-center gap-3 text-lg">
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         <span>Sending Message...</span>
//                       </>
//                     ) : !emailjsLoaded ? (
//                       <>
//                         <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         <span>Loading...</span>
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//                         <span>Send Message</span>
//                       </>
//                     )}
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { Send, User, Mail, MessageCircle, AlertCircle, CheckCircle, Sparkles } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [emailjsLoaded, setEmailjsLoaded] = useState(false);

  // EmailJS configuration - replace with your actual values or use environment variables
  const emailjsConfig = {
    publicKey: import.meta?.env?.VITE_EMAILJS_PUBLIC_KEY || "i2P0nIzz-BOF95X7F",
    serviceId: import.meta?.env?.VITE_EMAILJS_SERVICE_ID || "service_fqgq1z8",
    templateId:  import.meta?.env?.VITE_EMAILJS_TEMPLATE_ID || "template_a4gp2uj"
  };

  // Debug: Log the configuration values (remove this in production)
  // console.log('EmailJS Config:', {
  //   publicKey: emailjsConfig.publicKey ? emailjsConfig.publicKey.substring(0, 10) + '...' : 'Not set',
  //   serviceId: emailjsConfig.serviceId || 'Not set',
  //   templateId: emailjsConfig.templateId || 'Not set'
  // });

  // Load EmailJS
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = () => {
      // Initialize EmailJS with your public key from environment variables
      if (window.emailjs) {
        // console.log('Initializing EmailJS with key:', emailjsConfig.publicKey ? emailjsConfig.publicKey.substring(0, 10) + '...' : 'No key found');
        window.emailjs.init(emailjsConfig.publicKey);
        setEmailjsLoaded(true);
      } else {
        console.error('EmailJS failed to load');
      }
    };
    script.onerror = () => {
      console.error('Failed to load EmailJS script');
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [emailjsConfig.publicKey]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (!emailjsLoaded || !window.emailjs) {
      alert('EmailJS is not ready. Please try again in a moment.');
      return;
    }

    // Check if configuration values are set
    if (!emailjsConfig.publicKey || emailjsConfig.publicKey === 'YOUR_PUBLIC_KEY' ||
        !emailjsConfig.serviceId || emailjsConfig.serviceId === 'YOUR_SERVICE_ID' ||
        !emailjsConfig.templateId || emailjsConfig.templateId === 'YOUR_TEMPLATE_ID') {
      // console.error('EmailJS configuration is incomplete:', emailjsConfig);
      alert('EmailJS configuration is incomplete. Please check your environment variables.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('Attempting to send email with config:', {
        serviceId: emailjsConfig.serviceId,
        templateId: emailjsConfig.templateId,
        templateParams: {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Zameer',
        }
      });

      // Send email using EmailJS
      const result = await window.emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Zameer',
          reply_to: formData.email,
        }
      );

      console.log('Email sent successfully:', result);
      
      if (result.status === 200) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
        
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
      
    } catch (error) {
      console.error('Email send error:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const blobKeyframes = `
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
  `;

  const twinkleKeyframes = `
    @keyframes twinkle {
      0%, 100% { opacity: 0.3; transform: rotate(45deg) scale(1); }
      50% { opacity: 1; transform: rotate(225deg) scale(1.2); }
    }
  `;

  const slideDownKeyframes = `
    @keyframes slide-down {
      from { opacity: 0; transform: translateY(-50px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  const slideUpKeyframes = `
    @keyframes slide-up {
      from { opacity: 0; transform: translateY(50px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  const bounceGentleKeyframes = `
    @keyframes bounce-gentle {
      0% { opacity: 0; transform: translateY(-20px) scale(0.9); }
      60% { opacity: 1; transform: translateY(5px) scale(1.02); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
  `;

  const checkPopKeyframes = `
    @keyframes check-pop {
      0% { transform: scale(0) rotate(-180deg); }
      80% { transform: scale(1.2) rotate(10deg); }
      100% { transform: scale(1) rotate(0deg); }
    }
  `;

  const shakeKeyframes = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
  `;

  const spinSlowKeyframes = `
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;

  const allKeyframes = `
    ${blobKeyframes}
    ${twinkleKeyframes}
    ${slideDownKeyframes}
    ${slideUpKeyframes}
    ${bounceGentleKeyframes}
    ${checkPopKeyframes}
    ${shakeKeyframes}
    ${spinSlowKeyframes}
    
    .animate-blob {
      animation: blob 7s infinite;
    }
    
    .animate-twinkle {
      animation: twinkle 3s ease-in-out infinite;
    }
    
    .animate-slide-down {
      animation: slide-down 1s ease-out;
    }
    
    .animate-slide-up {
      animation: slide-up 1s ease-out;
    }
    
    .animate-bounce-gentle {
      animation: bounce-gentle 0.8s ease-out;
    }
    
    .animate-check-pop {
      animation: check-pop 0.6s ease-out;
    }
    
    .animate-shake {
      animation: shake 0.5s ease-in-out;
    }
    
    .animate-spin-slow {
      animation: spin-slow 8s linear infinite;
    }
    
    .animation-delay-1000 {
      animation-delay: 1000ms;
    }
    
    .animation-delay-2000 {
      animation-delay: 2000ms;
    }
    
    .animation-delay-3000 {
      animation-delay: 3000ms;
    }
    
    .animation-delay-4000 {
      animation-delay: 4000ms;
    }
  `;

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: allKeyframes }} />
      
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gray-300/40 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gray-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-400 animate-twinkle"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-gray-500 animate-twinkle animation-delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-gray-600 animate-twinkle animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-gray-400 animate-twinkle animation-delay-2000"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-2xl">
          {/* Header Section */}
          <div className="text-center mb-16 animate-slide-down">
            <div className="inline-block mb-6 p-3 bg-gray-200/50 rounded-full backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-gray-700 animate-spin-slow" />
            </div>
            <h1 
              id="contact"
              className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight"
            >
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
              Transform your vision into reality. Share your ideas and we'll bring them to life.
            </p>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            {submitted && (
              <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6 animate-bounce-gentle">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600 animate-check-pop" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800">Message Sent!</h4>
                    <p className="text-green-700">We'll get back to you soon.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white/90 backdrop-blur-xl border border-gray-200/60 rounded-3xl p-10 shadow-2xl">
              <div className="space-y-8">
                {/* Name Field */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Your Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter your full name"
                      className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none transition-all duration-300 relative z-10 ${
                        errors.name 
                          ? 'border-red-300 focus:border-red-500 bg-red-50/50' 
                          : focusedField === 'name' 
                            ? 'border-gray-500 bg-white shadow-lg transform scale-[1.02]' 
                            : 'border-gray-200 hover:border-gray-300'
                      }`}
                    />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400/10 to-gray-600/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
                      focusedField === 'name' ? 'opacity-100' : ''
                    }`}></div>
                  </div>
                  {errors.name && (
                    <div className="flex items-center gap-2 mt-3 text-red-600 animate-shake">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="your.email@example.com"
                      className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none transition-all duration-300 relative z-10 ${
                        errors.email 
                          ? 'border-red-300 focus:border-red-500 bg-red-50/50' 
                          : focusedField === 'email' 
                            ? 'border-gray-500 bg-white shadow-lg transform scale-[1.02]' 
                            : 'border-gray-200 hover:border-gray-300'
                      }`}
                    />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400/10 to-gray-600/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
                      focusedField === 'email' ? 'opacity-100' : ''
                    }`}></div>
                  </div>
                  {errors.email && (
                    <div className="flex items-center gap-2 mt-3 text-red-600 animate-shake">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Your Message</label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us about your project, goals, and how we can help..."
                      rows="6"
                      className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none resize-none transition-all duration-300 relative z-10 ${
                        errors.message 
                          ? 'border-red-300 focus:border-red-500 bg-red-50/50' 
                          : focusedField === 'message' 
                            ? 'border-gray-500 bg-white shadow-lg transform scale-[1.02]' 
                            : 'border-gray-200 hover:border-gray-300'
                      }`}
                    />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400/10 to-gray-600/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
                      focusedField === 'message' ? 'opacity-100' : ''
                    }`}></div>
                  </div>
                  {errors.message && (
                    <div className="flex items-center gap-2 mt-3 text-red-600 animate-shake">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || !emailjsLoaded}
                  className="group relative w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white font-bold py-5 px-8 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-400/50 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  <div className="relative flex items-center justify-center gap-3 text-lg">
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : !emailjsLoaded ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Loading...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;