import { Button } from "@/components/ui/button";
import { Menu, Instagram, Twitter, MessageCircle, X } from "lucide-react";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  // Scroll behavior logic
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideHeader(true); // Scroll down
      } else {
        setHideHeader(false); // Scroll up
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", label: "Home", spice: "Welcome" },
    { href: "#about", label: "About", spice: "Our Story" },
    { href: "#menu", label: "Menu", spice: "Delights" },
    { href: "#where", label: "Business Model", spice: "Roadmap" },
    { href: "#contact", label: "Contact", spice: "Connect" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/secret_spice", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: MessageCircle, href: "https://wa.me/918484943143", label: "WhatsApp" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`flex justify-between items-center p-4 royal-black pattern-bg sticky top-0 z-50 border-b border-[#D4AF37]/20 backdrop-blur-md transition-transform duration-300 ${hideHeader ? "-translate-y-full" : "translate-y-0"}`}>
      {/* Spice Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:20px_20px] opacity-5"></div>

      {/* Logo with Spice Effect */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative group"
      >
        <img className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105" src={logo} alt="logo" />
        <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 text-sm absolute left-1/2 transform -translate-x-1/2">
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative group"
          >
            <a 
              href={item.href} 
              className="text-[#D4AF37] hover:text-[#FDB931] transition-colors duration-300 flex flex-col items-center"
            >
              <span className="text-lg font-medium">{item.label}</span>
              <span className="text-xs text-[#FDB931]/60 mt-1">{item.spice}</span>
            </a>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </motion.div>
        ))}
      </nav>

      {/* Desktop Socials + CTA */}
      <div className="hidden md:flex items-center gap-4">
        <div className="flex gap-3 mr-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.6 }}
              className="relative group"
            >
              <div className="w-8 h-8 rounded-full bg-black/30 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] hover:text-[#FDB931] transition-all duration-300 hover:border-[#D4AF37]/40 hover:scale-110">
                <social.icon className="w-4 h-4" />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:8px_8px] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <a href="#contact">
            <Button 
              variant="default" 
              className="gold-gradient text-black hover:opacity-90 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Spice Up Your Event</span>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:10px_10px] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden relative group">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-[#D4AF37] hover:text-[#FDB931] transition-all duration-300"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:8px_8px] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-[#D4AF37]/20 md:hidden"
          >
            <div className="p-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block py-2 text-[#D4AF37] hover:text-[#FDB931] transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-lg font-medium">{item.label}</span>
                  <span className="block text-xs text-[#FDB931]/60">{item.spice}</span>
                </motion.a>
              ))}

              <div className="flex justify-center gap-4 pt-4 border-t border-[#D4AF37]/20">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="w-10 h-10 rounded-full bg-black/30 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] hover:text-[#FDB931] transition-all duration-300 hover:border-[#D4AF37]/40"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    variant="default" 
                    className="w-full gold-gradient text-black hover:opacity-90 transition-all duration-300"
                  >
                    Spice Up Your Event
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
