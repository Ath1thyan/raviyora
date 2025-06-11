import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pot1 from "../assets/bgb1.png";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const storyParts = [
    {
      title: "Premium Ingredients",
      content: "Every dish is made with handpicked spices and fresh produce",
      color: "from-[#D4AF37]/20 to-[#D4AF37]/5"
    },
    {
      title: "Hygiene First",
      content: "Kitchens that meet FSSAI and corporate standards",
      color: "from-[#FDB931]/20 to-[#FDB931]/5"
    },
    {
      title: "Transparent Pricing",
      content: "Friendly costs, unmatched quality",
      color: "from-[#D4AF37]/20 to-[#D4AF37]/5"
    }
  ];

  return (
    <section id="about" className="p-4 sm:p-6 md:p-8 lg:p-10 royal-black pattern-bg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Background Circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"></div>

        {/* Decorative Pot Images */}
        <motion.img
          src={pot1}
          alt="decorative pot"
          className="absolute top-1/4 -right-20 w-40 sm:w-50 md:w-60 h-40 sm:h-50 md:h-60 opacity-100 rotate-12"
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
          className="absolute bottom-1/4 -left-20 w-40 sm:w-50 md:w-60 h-40 sm:h-50 md:h-60 opacity-100 -rotate-12"
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
              Crafted with Care,
              <span className="block text-[#FDB931] mt-1 sm:mt-2">Served with Love</span>
            </span>
            <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 w-32 sm:w-48 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </h2>
          <p className="text-[#FDB931]/90 text-lg sm:text-xl md:text-2xl italic font-serif max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 relative z-10 px-4">
            From a first bite to a full plate – it's a story of purity and satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 perspective-1000">
          {storyParts.map((part, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
              transition={{ delay: 0.3 + (index * 0.2), duration: 0.6 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${part.color} border border-[#D4AF37]/20 rounded-xl p-6 sm:p-8 hover:border-[#D4AF37]/40 transition-all duration-300 relative overflow-hidden transform hover:-translate-y-2 hover:shadow-xl h-full flex flex-col justify-center`}>
                <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/5 transition-colors duration-300 rounded-xl"></div>

                <motion.h3
                  className="text-[#D4AF37] font-semibold text-xl sm:text-2xl mb-3 sm:mb-4 text-center relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + (index * 0.2), duration: 0.4 }}
                  whileHover={{ scale: 1.05, color: "#FDB931" }}
                >
                  <span className="relative">
                    {part.title}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                  </span>
                </motion.h3>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.7 + (index * 0.2), duration: 0.4 }}
                >
                  <motion.p
                    className="text-[#FDB931]/90 text-base sm:text-lg leading-relaxed text-center"
                    whileHover={{ scale: 1.02, color: "#FDB931" }}
                  >
                    {part.content}
                  </motion.p>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 0.9 + (index * 0.2), duration: 0.6 }}
                  />
                </motion.div>

                {/* Card Corner Accent */}
                <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#D4AF37]/10 transform rotate-45 translate-x-6 sm:translate-x-8 -translate-y-6 sm:-translate-y-8"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}