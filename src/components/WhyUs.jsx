import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WhyUs = () => {
  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      title: "Authentic Flavors",
      description: "From classic Chicken and Mutton Biriyani to Ghee Rice, Mushroom delights, and Kebabs",
      icon: "🍛"
    },
    {
      title: "Quality Assured",
      description: "FSSAI Licensed (No. 11225332000363) ensuring the highest food safety standards",
      icon: "✨"
    },
    {
      title: "Fresh & Hygienic",
      description: "Every dish comes with our signature touch of quality, freshness, and tradition",
      icon: "🌟"
    }
  ]

  return (
    <section className="p-4 sm:p-6 md:p-8 lg:p-10 royal-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#D4AF37_1px,transparent_1px),linear-gradient(-45deg,#D4AF37_1px,transparent_1px)] bg-[length:20px_20px] sm:bg-[length:30px_30px] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#D4AF37]/5 to-black/0"></div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto relative"
      >
        <div className="text-center mb-12 sm:mb-14 md:mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 border-2 border-[#D4AF37]/5 rounded-full"></div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold ethnic-gold font-serif mb-4 sm:mb-5 md:mb-6 tracking-wide relative"
          >
            <span className="relative z-10">
              Why Customers
              <span className="block text-[#FDB931] mt-1 sm:mt-2">Choose Us</span>
            </span>
            <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-48 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </motion.h2>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-black/30 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 sm:p-8 mb-12 hover:border-[#D4AF37]/40 transition-all duration-300 relative overflow-hidden group"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37]/20 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#D4AF37]/20 rounded-bl-xl"></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-[#FDB931]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Spice Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:10px_10px] opacity-5"></div>

          <div className="relative">
            <p className="text-[#FDB931]/90 text-lg sm:text-xl leading-relaxed font-serif">
              <span className="text-2xl sm:text-3xl text-[#D4AF37] font-bold">Secret & Spice</span> isn't just about biriyani — it's a flavorful journey through both veg and non-veg delicacies. From our classic <span className="text-[#D4AF37] font-medium">Chicken and Mutton Biriyani</span> to <span className="text-[#D4AF37] font-medium">Ghee Rice</span>, <span className="text-[#D4AF37] font-medium">Mushroom delights</span>, <span className="text-[#D4AF37] font-medium">Kebabs</span>, and <span className="text-[#D4AF37] font-medium">Combos</span> — we serve with love, hygiene, and consistency. Every dish comes with our signature touch of quality, freshness, and tradition.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
              className="group"
            >
              <div className="bg-black/30 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 sm:p-8 hover:border-[#D4AF37]/40 transition-all duration-300 relative overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-[#FDB931]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-[#D4AF37] font-semibold text-xl sm:text-2xl mb-3 relative inline-block">
                    {feature.title}
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </h3>
                  <p className="text-[#FDB931]/80 text-base sm:text-lg font-serif leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37]/20 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#D4AF37]/20 rounded-bl-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 sm:mt-14 md:mt-16 text-center relative px-4"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 border-2 border-[#D4AF37]/5 rounded-full"></div>
          <blockquote className="text-[#D4AF37] italic text-xl sm:text-2xl md:text-3xl font-serif relative z-10">
            <span className="text-2xl sm:text-3xl md:text-4xl text-[#FDB931]">"</span>
            We are proudly <span className="text-[#FDB931] font-medium">FSSAI Licensed</span> 
            <span className="block text-base sm:text-lg mt-2 text-[#FDB931]/80">(No. 11225332000363)</span>
            <span className="text-2xl sm:text-3xl md:text-4xl text-[#FDB931]">"</span>
          </blockquote>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhyUs
