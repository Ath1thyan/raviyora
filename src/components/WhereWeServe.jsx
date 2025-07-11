import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function WhereWeServe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });
    const [activeIndex, setActiveIndex] = useState(0);

    const businessModels = [
      {
        title: "Corporate Kitchens",
        description: "Officially tied up with Venmat serving 1000+ employees in Manyata Tech Park – Azure Building. Targeting more such collaborations across Bangalore.",
        color: "from-[#D4AF37] to-[#FDB931]",
        speciality: "Enterprise Solutions"
      },
      {
        title: "Take-Away Points",
        description: "Premium takeaway counters offering hygienic biryani in eco-packed boxes for just Rs.10 per container logistics.",
        color: "from-[#FDB931] to-[#D4AF37]",
        speciality: "Eco-Friendly"
      },
      {
        title: "Food Truck Concept",
        description: "Mobile kitchens stationed at major corporate parks, tech clusters, and events.",
        color: "from-[#D4AF37] to-[#FDB931]",
        speciality: "Mobile Service"
      },
      {
        title: "Franchise Model",
        description: "Anyone can start with just Rs. 20,000. Comprehensive support in branding, supply chain, and setup.",
        color: "from-[#FDB931] to-[#D4AF37]",
        speciality: "Low Investment"
      }
    ];

    const nextSlide = () => {
      setActiveIndex((prev) => (prev + 1) % businessModels.length);
    };

    const prevSlide = () => {
      setActiveIndex((prev) => (prev - 1 + businessModels.length) % businessModels.length);
    };

    return (
      <section className="p-4 sm:p-6 md:p-8 lg:p-10 royal-black pattern-bg relative overflow-hidden" id="where">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Spice Patterns */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:15px_15px] sm:bg-[length:20px_20px] opacity-5"></div>
        </div>

        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto relative"
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 border-2 border-[#D4AF37]/5 rounded-full"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold ethnic-gold font-serif mb-4 sm:mb-5 md:mb-6 tracking-wide relative">
              <span className="relative z-10">
                Our Business Model &
                <span className="block text-[#FDB931] mt-1 sm:mt-2">Expansion Roadmap</span>
              </span>
              <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-48 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            </h2>
            <p className="text-[#FDB931]/90 text-lg sm:text-xl font-medium italic">
              "Scaling with Simplicity and Impact"
            </p>
          </motion.div>

          {/* Mobile View - Carousel */}
          <div className="md:hidden">
            <div className="relative">
              {/* Navigation Buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] p-2 rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] p-2 rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Carousel Content */}
              <div className="overflow-hidden">
                <motion.div 
                  className="flex transition-transform duration-500 ease-out"
                  animate={{ x: `-${activeIndex * 100}%` }}
                >
                  {businessModels.map((model, index) => (
                    <div 
                      key={index}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-black/30 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 relative overflow-hidden"
                      >
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-10`}></div>
                        
                        {/* Content */}
                        <div className="relative">
                          <h3 className="text-[#D4AF37] font-semibold text-2xl mb-3">
                            {model.title}
                          </h3>
                          <p className="text-[#FDB931]/80 text-sm mb-4">
                            {model.description}
                          </p>
                          
                          {/* Speciality Badge */}
                          <div className="mb-4">
                            <span className="text-[#D4AF37] text-xs opacity-60">Speciality</span>
                            <div className="text-[#FDB931] text-sm font-medium mt-1">
                              {model.speciality}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {businessModels.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-[#D4AF37] w-4' 
                        : 'bg-[#D4AF37]/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop View - Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-8">
            {businessModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
                className="group"
              >
                <div className="bg-black/30 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37]/40 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-10 transition-opacity duration-300 group-hover:opacity-20`}></div>
                  
                  {/* Spice Pattern Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:10px_10px] opacity-5"></div>
                  
                  <div className="relative flex flex-col pl-10 pr-4">
                    {/* Title Section */}
                    <div className="mb-6">
                      <h3 className="text-[#D4AF37] font-semibold text-2xl mb-2">
                        {model.title}
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-[#D4AF37] to-[#FDB931] rounded-full"></div>
                    </div>

                    {/* Description */}
                    <p className="text-[#FDB931]/60 text-sm mb-6">
                      {model.description}
                    </p>

                    {/* Speciality */}
                    <div className="mb-6">
                      <div className="text-[#D4AF37] text-sm">
                        <span className="block text-xs opacity-60 mb-1">Speciality</span>
                        <span className="text-[#FDB931]/90">{model.speciality}</span>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37]/20 rounded-tr-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#D4AF37]/20 rounded-bl-2xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 sm:mt-12 text-center relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 border-2 border-[#D4AF37]/5 rounded-full"></div>
            <p className="text-[#D4AF37]/90 italic text-base sm:text-lg font-medium relative z-10">
              "Building a sustainable and scalable food business"
            </p>
          </motion.div>
        </motion.div>
      </section>
    );
  }