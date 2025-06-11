import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Intro = () => {
  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const missionPoints = [
    "Serve quality and affordable food.",
    "Deliver the authentic, homely taste people crave.",
    "Ensure health and hygiene with every bite."
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
              Our Purpose &
              <span className="block text-[#FDB931] mt-1 sm:mt-2">Passion</span>
            </span>
            <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-48 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-black/30 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 sm:p-8 hover:border-[#D4AF37]/40 transition-all duration-300"
          >
            <p className="text-[#FDB931]/90 text-lg sm:text-xl leading-relaxed mb-6">
              At Secret & Spice, our passion is deeply rooted in the joy of sharing hygienic, flavorful food with people from every walk of life. Founded to combat the growing trend of unhygienic and mass-produced meals, our mission is simple.
            </p>
          </motion.div>

          {/* Right Column - Mission Points */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4"
          >
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 + (index * 0.1), duration: 0.6 }}
                className="bg-black/30 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4 sm:p-6 hover:border-[#D4AF37]/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-black/30 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:text-[#FDB931] transition-all duration-300 group-hover:border-[#D4AF37]/40 group-hover:scale-110">
                    <span className="text-lg font-semibold">{index + 1}</span>
                  </div>
                  <p className="text-[#FDB931]/90 text-base sm:text-lg">{point}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Intro
