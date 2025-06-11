import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import pot1 from "../assets/bgb4.png";

export default function EventStallBooking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section className="p-4 sm:p-6 md:p-8 lg:p-10 royal-black pattern-bg relative overflow-hidden" id="booking">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative Pot Images */}
        <motion.img 
          src={pot1} 
          alt="decorative pot" 
          className="absolute top-1/4 -right-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 opacity-20 rotate-12"
          animate={{ 
            y: [0, -20, 0],
            rotate: [12, 15, 12]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.img 
          src={pot1} 
          alt="decorative pot" 
          className="absolute bottom-1/4 -left-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 opacity-20 -rotate-12"
          animate={{ 
            y: [0, 20, 0],
            rotate: [-12, -15, -12]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Spice Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:15px_15px] sm:bg-[length:20px_20px] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#D4AF37]/5 to-black/0"></div>
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
          className="text-center mb-12 sm:mb-16 md:mb-20 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 border-2 border-[#D4AF37]/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 border-2 border-[#D4AF37]/10 rounded-full"></div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold ethnic-gold font-serif mb-4 sm:mb-6 md:mb-8 tracking-wide relative">
            <span className="relative z-10">
              Spice Up
              <span className="block text-[#FDB931] mt-1 sm:mt-2">Your Event</span>
            </span>
            <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 w-32 sm:w-48 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </h2>
          <p className="text-[#FDB931]/90 text-lg sm:text-xl md:text-2xl italic font-serif max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 relative z-10 px-4">
            Ideal for office events, tech meetups, college fests, apartment gatherings. Full stall setup, staff, and live service available.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <a 
            href="#contact" 
            className="inline-block bg-black/30 backdrop-blur-sm border-2 border-[#D4AF37]/30 text-[#D4AF37] px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-medium hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-300 hover:scale-105 hover:shadow-gold group relative overflow-hidden"
          >
            <span className="relative z-10">Book Our Stall for Your Event</span>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:8px_8px] sm:bg-[length:10px_10px] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center relative px-4"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 border-2 border-[#D4AF37]/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 border-2 border-[#D4AF37]/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 border-2 border-[#D4AF37]/20 rounded-full"></div>
          <p className="text-[#D4AF37] italic text-2xl sm:text-3xl md:text-4xl font-serif relative z-10 bg-black/30 backdrop-blur-sm py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 rounded-xl sm:rounded-2xl">
            <span className="text-3xl sm:text-4xl md:text-5xl text-[#FDB931]">"</span>
            We set up. We serve. You enjoy the show (and the spice).
            <span className="text-3xl sm:text-4xl md:text-5xl text-[#FDB931]">"</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}