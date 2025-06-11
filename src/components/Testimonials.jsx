import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import b1 from "../assets/b12.jpg"; // same bg as Hero

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const quotes = [
    {
      name: "An HR Manager at RMZ Ecoworld",
      text: "After 3 rounds of biriyani, my team stopped working and started dreaming.",
      role: "Corporate Client",
      rating: 5,
      spiceLevel: "Medium-Hot"
    },
    {
      name: "Rahul, Software Engineer",
      text: "Can't believe I look forward to Mondays because of this biriyani stall!",
      role: "Regular Customer",
      rating: 5,
      spiceLevel: "Hot"
    },
    {
      name: "Sita, Event Organizer",
      text: "Crowd loved the stall at our fest – people kept coming back for more.",
      role: "Event Partner",
      rating: 5,
      spiceLevel: "Customizable"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % quotes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section
      className="relative text-center p-0 royal-black pattern-bg"
      id="testimonials"
    >
      {/* Background Image */}
      <img
        src={b1}
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="biryani bg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:20px_20px] opacity-5 z-10"></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 max-w-6xl mx-auto py-20 px-4"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold ethnic-gold font-serif mb-2">
            Spice Menu of Praise
          </h2>
          <p className="text-[#FDB931]/90 text-lg italic">
            Curated tasting notes from our biryani connoisseurs
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {quotes.map((quote, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-black/30 backdrop-blur-md border border-[#D4AF37]/30 shadow-xl rounded-2xl p-6 transition-all duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-[#D4AF37] font-serif">
                        {quote.spiceLevel} Blend
                      </h3>
                      <span className="text-sm text-[#FDB931]/80">Aroma Intensity</span>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4 justify-center">
                      {[...Array(quote.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="italic text-[#FDB931]/90 text-md mb-6">
                      "{quote.text}"
                    </p>

                    {/* Footer */}
                    <div className="pt-4 border-t border-[#D4AF37]/20">
                      <p className="text-[#D4AF37] font-semibold">{quote.name}</p>
                      <span className="text-sm text-[#FDB931]/70">{quote.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors"
            >
              <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors"
            >
              <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-10">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="group relative"
            >
              <div className="bg-black/30 backdrop-blur-md border border-[#D4AF37]/30 shadow-xl rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-gold">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-[#D4AF37] font-serif">
                    {quote.spiceLevel} Blend
                  </h3>
                  <span className="text-sm text-[#FDB931]/80">Aroma Intensity</span>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(quote.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="italic text-[#FDB931]/90 text-md mb-6">
                  "{quote.text}"
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-[#D4AF37]/20">
                  <p className="text-[#D4AF37] font-semibold">{quote.name}</p>
                  <span className="text-sm text-[#FDB931]/70">{quote.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#D4AF37]/80 italic">
            "Ready to taste the hype?"
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
