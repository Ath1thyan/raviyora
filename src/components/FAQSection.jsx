import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import pot1 from "../assets/bgb4.png";
import pot2 from "../assets/bgb3.png";

export default function FAQSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
      { 
        q: "Is your biriyani spicy?", 
        a: "Just enough to make your soul dance. But we've got mild versions too.",
        icon: "🌶️"
      },
      { 
        q: "Do you deliver for small groups?", 
        a: "Pre-orders start at 10 boxes. For 1 or 2? Catch us at a tech park near you.",
        icon: "📦"
      },
      { 
        q: "Veg biriyani?? Really??", 
        a: "We call it pulao with pride. And it's chef's kiss 🌿",
        icon: "🌿"
      },
      { 
        q: "How to book a stall for our company fest?", 
        a: "Head to the contact form below or WhatsApp us for fast booking.",
        icon: "🎉"
      },
    ];

    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <section className="p-10 royal-black pattern-bg relative overflow-hidden" id="faq">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Decorative Pot Images */}
          {/* <motion.img 
            src={pot2} 
            alt="decorative pot" 
            className="absolute top-48 -right-0 w-60 h-60 opacity-20 rotate-12"
            animate={{ 
              y: [0, -20, 0],
              rotate: [12, 15, 12]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          /> */}
          <motion.img 
            src={pot2} 
            alt="decorative pot" 
            className="absolute bottom-2/4 -left-0 w-60 h-60 opacity-20 -rotate-12"
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
          {/* <div className="absolute top-1/3 right-10 w-28 h-28 border-2 border-[#D4AF37]/10 rounded-full"></div>
          <div className="absolute bottom-1/3 left-10 w-32 h-32 border-2 border-[#D4AF37]/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-[#D4AF37]/5 rounded-full"></div> */}
        </div>

        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto relative"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold ethnic-gold font-serif mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                className="bg-black/30 border border-[#D4AF37]/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{faq.icon}</span>
                    <h3 className="font-semibold text-[#D4AF37] text-lg">
                      {faq.q}
                    </h3>
                  </div>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#D4AF37] text-2xl"
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-[#FDB931]/90 border-t border-[#D4AF37]/20">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-[#D4AF37]/80 italic">
              "Still have questions? We're just a click away!"
            </p>
          </motion.div>
        </motion.div>
      </section>
    );
  }
  