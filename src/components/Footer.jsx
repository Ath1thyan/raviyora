import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { Instagram, Facebook, ExternalLink, Home, Info, Utensils, Star, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
      navigation: [
        { name: "Home", href: "#hero", icon: Home },
        { name: "About", href: "#about", icon: Info },
        { name: "Menu", href: "#menu", icon: Utensils },
        { name: "Where We Serve", href: "#where", icon: MapPin },
        { name: "Contact", href: "#contact", icon: Phone }
      ],
      social: [
        { name: "Instagram", href: "https://instagram.com/", icon: Instagram },
        { name: "Facebook", href: "https://facebook.com/", icon: Facebook },
        { name: "Zomato", href: "https://zomato.com", icon: ExternalLink },
        { name: "Swiggy", href: "https://swiggy.com", icon: ExternalLink }
      ]
    };

    return (
      <footer className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:20px_20px] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#D4AF37]/5 to-black/0"></div>
        </div>

        {/* Main Footer Content */}
        <div className="relative p-8 royal-black pattern-bg border-t border-[#D4AF37]/20">
          <div className="max-w-6xl mx-auto">
            {/* Logo and Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-[#D4AF37]/5 rounded-full"></div>
              <h2 className="text-6xl font-bold ethnic-gold font-serif mb-6 tracking-wide relative">
                <span className="relative z-10 text-[#FDB931] mb-4 italic">
                  Secret & Spice
                </span>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
              </h2>
              <p className="text-[#FDB931]/90 text-xl italic font-serif max-w-2xl mx-auto relative z-10">
                "Where every grain tells a story of tradition"
              </p>
            </motion.div>

            {/* Navigation Links */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Main Navigation */}
              <div className="space-y-4">
                <h3 className="text-[#D4AF37] font-semibold text-xl border-b border-[#D4AF37]/20 pb-2">
                  Quick Links
                </h3>
                <div className="relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:10px_10px] opacity-5"></div>
                  <div className="grid grid-cols-2 gap-4">
                    {footerLinks.navigation.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                        className="group relative"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-black/30 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:text-[#FDB931] transition-all duration-300 group-hover:border-[#D4AF37]/40">
                            <link.icon className="w-4 h-4" />
                          </div>
                          <div className="relative">
                            <span className="text-[#D4AF37] group-hover:text-[#FDB931] transition-colors text-base font-medium">
                              {link.name}
                            </span>
                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                          </div>
                        </div>
                        <div className="absolute -inset-2 bg-[#D4AF37]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-[#D4AF37] font-semibold text-xl border-b border-[#D4AF37]/20 pb-2">
                  Connect With Us
                </h3>
                <div className="relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:10px_10px] opacity-5"></div>
                  <div className="grid grid-cols-2 gap-4">
                    {footerLinks.social.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                        className="group relative"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-black/30 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:text-[#FDB931] transition-all duration-300 group-hover:border-[#D4AF37]/40">
                            <link.icon className="w-4 h-4" />
                          </div>
                          <div className="relative">
                            <span className="text-[#D4AF37] group-hover:text-[#FDB931] transition-colors text-base font-medium">
                              {link.name}
                            </span>
                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                          </div>
                        </div>
                        <div className="absolute -inset-2 bg-[#D4AF37]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center mb-8"
            >
              <div className="inline-flex flex-col md:flex-row gap-6 bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm p-6 rounded-xl border border-[#D4AF37]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black/30 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[#FDB931]/60 text-sm">Call us</p>
                    <a href="tel:+919876543210" className="text-[#D4AF37] hover:text-[#FDB931] text-lg font-semibold transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="hidden md:block w-px bg-[#D4AF37]/20"></div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black/30 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[#FDB931]/60 text-sm">Email us</p>
                    <a href="mailto:biriyani@dumdelights.in" className="text-[#D4AF37] hover:text-[#FDB931] text-lg font-semibold transition-colors">
                      biriyani@dumdelights.in
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-center border-t border-[#D4AF37]/20 pt-6"
            >
              <p className="text-[#D4AF37]/80 text-sm">
                © {currentYear} Raviyora. Made with ❤️ and Spice.
              </p>
              <p className="text-[#D4AF37]/60 text-xs mt-1">
                "Serving happiness, one biryani at a time"
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="h-1 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/30 to-[#D4AF37]/0"></div>
      </footer>
    );
  }
