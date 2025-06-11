import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const JoinUs = () => {
  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const opportunities = [
    {
      title: "Foodpreneurs",
      description: "Looking for Foodpreneurs to run franchisee take-away counters",
      icon: "👨‍🍳",
      spice: "Entrepreneurial"
    },
    {
      title: "Collaborations",
      description: "Collaborations with Corporates, Education Institutions & event caterers",
      icon: "🤝",
      spice: "Strategic"
    },
    {
      title: "Corporate Partnerships",
      description: "Corporate partnerships for bulk meals, events & cafeteria takeovers",
      icon: "🏢",
      spice: "Professional"
    }
  ]

  const legalInfo = [
    {
      title: "FSSAI License",
      value: "11225332000363"
    },
    {
      title: "TAN No.",
      value: "BLRR33245C"
    },
    {
      title: "PAN No.",
      value: "ABLFR2484B"
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
              Join Our Journey
              <span className="block text-[#FDB931] mt-1 sm:mt-2">Let's build a food revolution together</span>
            </span>
            <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-48 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </motion.h2>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
              className="group"
            >
              <div className="bg-black/30 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 sm:p-8 hover:border-[#D4AF37]/40 transition-all duration-300 relative overflow-hidden h-full">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-[#FDB931]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative">
                  <div className="relative group/icon mb-4">
                    <div className="w-16 h-16 rounded-full bg-black/30 border border-[#D4AF37]/20 flex items-center justify-center text-4xl transition-all duration-300 group-hover/icon:border-[#D4AF37]/40 group-hover/icon:scale-110">
                      {opportunity.icon}
                    </div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:8px_8px] opacity-0 group-hover/icon:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full blur-md opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-[#D4AF37] font-semibold text-xl sm:text-2xl mb-2">
                    {opportunity.title}
                  </h3>
                  <span className="text-xs text-[#FDB931]/60 mb-3 block">{opportunity.spice}</span>
                  <p className="text-[#FDB931]/80 text-base sm:text-lg">
                    {opportunity.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37]/20 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#D4AF37]/20 rounded-bl-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legal Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-black/30 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {legalInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.7 + (index * 0.1), duration: 0.6 }}
                className="text-center group"
              >
                <div className="relative inline-block">
                  <h4 className="text-[#D4AF37] text-sm sm:text-base mb-2">
                    {info.title}
                  </h4>
                  <p className="text-[#FDB931]/90 text-lg sm:text-xl font-medium">
                    {info.value}
                  </p>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-block hover:bg-black/30 backdrop-blur-sm border hover:border-[#D4AF37]/30 text-[#D4AF37] px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-lg sm:text-xl md:text-2xl font-medium bg-[#D4AF37]/10 border-[#D4AF37]/50 transition-all duration-300 hover:scale-105 hover:shadow-gold group relative overflow-hidden"
          >
            <span className="relative z-10">Partner With Us</span>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:8px_8px] sm:bg-[length:10px_10px] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default JoinUs
