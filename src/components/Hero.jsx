import { Button } from "@/components/ui/button";
import b1 from "../assets/b11.jpg"
import { motion } from "framer-motion";

export default function Hero() {
    return (
      <section id="hero" className="relative text-center p-0 royal-black pattern-bg min-h-[500px] sm:min-h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10"></div>
        <img
          src={b1}
          autoPlay
          loop
          muted
          className="w-full h-full absolute inset-0 object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:15px_15px] sm:bg-[length:20px_20px] opacity-10 z-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 max-w-4xl mx-auto px-4 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 border-2 border-[#D4AF37]/5 rounded-full"></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold ethnic-gold font-serif mb-6 sm:mb-8 tracking-wide relative">
              <span className="relative z-10">
                <span className="italic">The Aroma of</span>
                <span className="block text-[#FDB931] mt-1 sm:mt-2">Royalty</span>
              </span>
              <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-48 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#FDB931]/90 italic font-serif max-w-xl mx-auto px-4">
              Flavour-packed, dum-cooked biriyani brought to your tech park, event, or doorstep. One bite, and you're hooked.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
                    <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <a 
            href="#contact" 
            className="inline-block hover:bg-black/30 backdrop-blur-sm border hover:border-[#D4AF37]/30 text-[#D4AF37] px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-medium bg-[#D4AF37]/10 border-[#D4AF37]/50 transition-all duration-300 hover:scale-105 hover:shadow-gold group relative overflow-hidden"
          >
            <span className="relative z-10">Pre Order Now</span>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:8px_8px] sm:bg-[length:10px_10px] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </motion.div>
          </motion.div>
        </motion.div>
      </section>
    );
  }