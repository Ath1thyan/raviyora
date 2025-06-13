import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import b1 from "../assets/b12.jpg"; // same bg as Hero

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
    },
    {
      name: "Dr. Meera, Cardiologist",
      text: "As a health-conscious foodie, I appreciate how they balance taste with quality ingredients. The portion control is perfect!",
      role: "Health-Conscious Foodie",
      rating: 5,
      spiceLevel: "Mild"
    },
    {
      name: "Vikram, Food Blogger",
      text: "The layers of flavors in their biryani are mind-blowing. Each grain of rice tells a story of perfect cooking.",
      role: "Food Critic",
      rating: 5,
      spiceLevel: "Hot"
    },
    {
      name: "Priya, College Student",
      text: "Best value for money! The student combo is a lifesaver during exam season.",
      role: "Student",
      rating: 5,
      spiceLevel: "Medium"
    },
    {
      name: "Rajesh, Uber Driver",
      text: "I stop here every day during my lunch break. The quick service and consistent taste keep me coming back.",
      role: "Regular Customer",
      rating: 5,
      spiceLevel: "Medium-Hot"
    },
    {
      name: "Neha, Wedding Planner",
      text: "They catered for my client's wedding reception. The guests couldn't stop raving about the biryani!",
      role: "Event Partner",
      rating: 5,
      spiceLevel: "Customizable"
    },
    {
      name: "Amit, Fitness Trainer",
      text: "I was skeptical about biryani being healthy, but their protein-rich version changed my mind completely.",
      role: "Fitness Enthusiast",
      rating: 5,
      spiceLevel: "Mild"
    },
    {
      name: "Lakshmi, Home Chef",
      text: "As someone who cooks biryani professionally, I'm impressed by their consistency and authentic taste.",
      role: "Food Professional",
      rating: 5,
      spiceLevel: "Hot"
    },
    {
      name: "Karan, Tech Startup CEO",
      text: "We order their biryani for all our team celebrations. It's become our company tradition!",
      role: "Corporate Client",
      rating: 5,
      spiceLevel: "Medium"
    },
    {
      name: "Divya, Food Delivery Partner",
      text: "Even after delivering hundreds of orders, the aroma still makes me hungry every time!",
      role: "Delivery Partner",
      rating: 5,
      spiceLevel: "Medium-Hot"
    },
    {
      name: "Sunil, Restaurant Owner",
      text: "I've tried biryani across the country, and this place stands out for its authentic taste and presentation.",
      role: "Industry Expert",
      rating: 5,
      spiceLevel: "Hot"
    },
    {
      name: "Ananya, Travel Vlogger",
      text: "Filmed my food vlog here and the response was overwhelming. The biryani stole the show!",
      role: "Content Creator",
      rating: 5,
      spiceLevel: "Customizable"
    },
    {
      name: "Ravi, Local Foodie",
      text: "Been coming here since they started. The taste has only gotten better with time!",
      role: "Loyal Customer",
      rating: 5,
      spiceLevel: "Hot"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide((prev) => (prev + 1) % quotes.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [quotes.length, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % quotes.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + quotes.length) % quotes.length);
    setTimeout(() => setIsAnimating(false), 500);
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
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.5
              }}
            >
              {quotes.map((quote, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-black/30 backdrop-blur-md border border-[#D4AF37]/30 shadow-xl rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-gold">
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
              disabled={isAnimating}
              className="p-2 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentSlide(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  disabled={isAnimating}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-[#D4AF37] w-4' 
                      : 'bg-[#D4AF37]/30 hover:bg-[#D4AF37]/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="p-2 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 33.333}%` }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.5
              }}
            >
              {quotes.map((quote, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <div className="h-full bg-black/30 backdrop-blur-md border border-[#D4AF37]/30 shadow-xl rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-gold">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-[#D4AF37] font-serif">
                        {quote.spiceLevel} Blend
                      </h3>
                      <span className="text-base text-[#FDB931]/80">Aroma Intensity</span>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4 justify-center">
                      {[...Array(quote.rating)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="italic text-[#FDB931]/90 text-lg mb-6 text-center">
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

          {/* Desktop Carousel Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="p-3 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#D4AF37]/10"
            >
              <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-3">
              {Array.from({ length: Math.ceil(quotes.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentSlide(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  disabled={isAnimating}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-[#D4AF37] w-6' 
                      : 'bg-[#D4AF37]/30 hover:bg-[#D4AF37]/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="p-3 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#D4AF37]/10"
            >
              <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
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
