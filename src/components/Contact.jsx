import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import b1 from "../assets/b2.jpg";
import { Phone, MessageCircle, Mail, Instagram } from "lucide-react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const contactItems = [
      {
        icon: Phone,
        title: "Call Us",
        value: "+91 98765 43210",
        link: "tel:+919876543210",
        description: "For immediate assistance"
      },
      {
        icon: MessageCircle,
        title: "WhatsApp",
        value: "Chat with us",
        link: "https://wa.me/919876543210",
        description: "For pre-orders & queries"
      },
      {
        icon: Mail,
        title: "Email",
        value: "biriyani@dumdelights.in",
        link: "mailto:biriyani@dumdelights.in",
        description: "For business inquiries"
      },
      {
        icon: Instagram,
        title: "Follow Us",
        value: "@spice&secret",
        link: "https://instagram.com/",
        description: "For daily biryani stories"
      }
    ];

    return (
      <section className="p-4 sm:p-6 md:p-8 lg:p-10 royal-black relative overflow-hidden" id="contact">
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
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 md:mb-20 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 border-2 border-[#D4AF37]/5 rounded-full"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold ethnic-gold font-serif mb-4 sm:mb-6 tracking-wide relative">
              <span className="relative z-10">
                Let's Get the
                <span className="block text-[#FDB931] mt-1 sm:mt-2 italic">Spice Rolling!</span>
              </span>
              <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 w-32 sm:w-48 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            </h2>
            <p className="text-[#FDB931]/90 text-lg sm:text-xl md:text-2xl italic font-serif max-w-2xl mx-auto relative z-10 px-4">
              For pre-orders, stall bookings, or just to chat biriyani…
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24">
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="group bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-[#D4AF37]/40 transition-all duration-300 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative group-hover:scale-110 transition-transform duration-300 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-black/30 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mx-auto group-hover:text-[#FDB931] transition-all duration-300 group-hover:border-[#D4AF37]/40 group-hover:scale-110">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  {/* Spice Particles */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:6px_6px] sm:bg-[length:8px_8px] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-[#D4AF37] font-semibold text-lg sm:text-xl mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-[#FDB931]/90 text-base sm:text-lg mb-2 sm:mb-3">
                  {item.value}
                </p>
                <p className="text-[#FDB931]/60 text-sm sm:text-base">
                  {item.description}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center relative px-4"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 border-2 border-[#D4AF37]/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 border-2 border-[#D4AF37]/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 border-2 border-[#D4AF37]/30 rounded-full"></div>
            <p className="text-[#D4AF37] italic text-2xl sm:text-3xl md:text-4xl font-serif relative z-10 bg-gradient-to-r from-black/40 via-black/60 to-black/40 backdrop-blur-sm py-6 sm:py-8 px-6 sm:px-8 md:px-12 rounded-xl sm:rounded-2xl border border-[#D4AF37]/20">
              <span className="text-3xl sm:text-4xl md:text-5xl text-[#FDB931]">"</span>
              Your next biryani adventure is just a click away
              <span className="text-3xl sm:text-4xl md:text-5xl text-[#FDB931]">"</span>
            </p>
          </motion.div>
        </motion.div>
      </section>
    );
  }