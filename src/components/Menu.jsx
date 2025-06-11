import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
// import b1 from "../assets/b1.avif"
import b2 from "../assets/b2.jpg"
import b3 from "../assets/b3.jpg"
import b4 from "../assets/b4.jpeg"
import b5 from "../assets/b5.jpg"
import b6 from "../assets/b6.webp"
import pot1 from "../assets/bgb4.png"

export default function Menu() {
    const items = [
      { 
        name: "Chicken Dum Biriyani", 
        desc: "Tender, spicy, cooked over slow flame",
        spice: "🌶️🌶️🌶️",
        image: b2,
        bestseller: true,
        journey: "The Classic",
        curve: "curve-1"
      },
      { 
        name: "Mutton Dum Biriyani", 
        desc: "Soft meat, rich masala",
        spice: "🌶️🌶️🌶️🌶️",
        image: b3,
        special: true,
        journey: "The Royal",
        curve: "curve-2"
      },
      { 
        name: "Egg Biriyani", 
        desc: "Classic and comforting",
        spice: "🌶️🌶️",
        image: b4,
        journey: "The Comfort",
        curve: "curve-3"
      },
      { 
        name: "Paneer / Veg Pulao", 
        desc: "For our veggie friends",
        spice: "🌶️",
        image: b5,
        journey: "The Vegetarian",
        curve: "curve-4"
      },
      { 
        name: "Raita & Salna", 
        desc: "It's not complete without them",
        spice: "🌶️",
        image: b6,
        journey: "The Accompaniment",
        curve: "curve-5"
      },
    ];

    const comboMenus = [
      {
        name: "Royal Feast",
        desc: "A complete royal dining experience",
        details: [
          "Chicken Dum Biryani (1 Full)",
          "Raita (1 Cup)",
          "Salna (1 Cup)",
          "Gulab Jamun (2 Pieces)",
          "Mint Chutney (1 Cup)",
          "Onion Raita (1 Cup)"
        ],
        price: "₹299",
        spice: "🌶️🌶️",
        image: b2,
        bestseller: true,
        journey: "The Complete Meal",
        curve: "curve-6",
        serves: "1 Person",
        time: "25-30 mins",
        savings: "Save ₹50"
      },
      {
        name: "Family Pack",
        desc: "Perfect for family gatherings and celebrations",
        details: [
          "Chicken Dum Biryani (2 Full)",
          "Mutton Dum Biryani (2 Full)",
          "Raita (2 Cups)",
          "Salna (2 Cups)",
          "Gulab Jamun (4 Pieces)",
          "Mint Chutney (2 Cups)",
          "Onion Raita (2 Cups)",
          "Extra Salna (1 Cup)"
        ],
        price: "₹999",
        spice: "🌶️🌶️🌶️",
        image: b3,
        special: true,
        journey: "The Family Special",
        curve: "curve-7",
        serves: "4-5 People",
        time: "35-40 mins",
        savings: "Save ₹150"
      },
      {
        name: "Veg Delight",
        desc: "A wholesome vegetarian feast",
        details: [
          "Paneer Pulao (1 Full)",
          "Veg Raita (1 Cup)",
          "Veg Salna (1 Cup)",
          "Gulab Jamun (2 Pieces)",
          "Mint Chutney (1 Cup)",
          "Onion Raita (1 Cup)",
          "Extra Salna (1 Cup)"
        ],
        price: "₹249",
        spice: "🌶️",
        image: b5,
        journey: "The Vegetarian Feast",
        curve: "curve-8",
        serves: "1 Person",
        time: "20-25 mins",
        savings: "Save ₹40"
      }
    ];

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3
        }
      }
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    };
  
    return (
      <section id="menu" className="p-4 sm:p-6 md:p-8 lg:p-10 royal-black pattern-bg relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Decorative Pot Images */}
          <motion.img 
            src={pot1} 
            alt="decorative pot" 
            className="absolute top-1/4 -right-20 w-40 sm:w-50 md:w-60 h-40 sm:h-50 md:h-60 opacity-20 rotate-12"
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
            className="absolute bottom-1/4 -left-20 w-40 sm:w-50 md:w-60 h-40 sm:h-50 md:h-60 opacity-20 -rotate-12"
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

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 sm:mb-14 md:mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 border-2 border-[#D4AF37]/5 rounded-full"></div>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold ethnic-gold font-serif mb-4 sm:mb-5 md:mb-6 tracking-wide relative"
            >
              <span className="relative z-10">
                What's on the pot 
                <span className="block text-[#FDB931] mt-1 sm:mt-2 italic">today?</span>
              </span>
              <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-48 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[#FDB931] text-lg sm:text-xl md:text-2xl italic font-serif relative z-10"
            >
              Experience the royal flavors of authentic dum biryani
            </motion.p>
          </div>
          
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Mobile View - Horizontal Scroll Cards */}
            <div className="md:hidden">
              <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory px-2 -mx-2">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex-none w-[280px] snap-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-black/50 border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-300 h-full"
                    >
                      {/* Image Section */}
                      <div className="relative h-40">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <span className="text-[#D4AF37] text-sm font-medium tracking-wider">
                            {item.journey}
                          </span>
                          <h3 className="text-xl font-semibold ethnic-gold mt-1">
                            {item.name}
                          </h3>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-4">
                        <p className="text-[#FDB931]/80 text-sm mb-4">
                          {item.desc}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#D4AF37]/80 text-sm">{item.spice}</span>
                          <div className="flex gap-2">
                            {item.bestseller && (
                              <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#D4AF37] text-black px-3 py-1 rounded-full text-xs font-medium"
                              >
                                Best Seller
                              </motion.span>
                            )}
                            {item.special && (
                              <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#FDB931] text-black px-3 py-1 rounded-full text-xs font-medium"
                              >
                                Chef's Special
                              </motion.span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop View - Timeline Layout */}
            <div className="hidden md:block">
              {/* Curved Timeline */}
              <svg className="absolute left-1/2 transform -translate-x-1/2 h-full w-1" viewBox="0 0 1 1000" preserveAspectRatio="none">
                <path
                  d="M0.5,0 C0.5,100 0.5,200 0.5,300 C0.5,400 0.5,500 0.5,600 C0.5,700 0.5,800 0.5,900 C0.5,1000"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-dash"
                />
              </svg>

              {/* Menu Items */}
              <div className="space-y-24 md:space-y-32">
                {items.map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 lg:pr-12' : 'pl-8 lg:pl-12'}`}>
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-black/50 border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37]/40 transition-all duration-300"
                      >
                        <div className="mb-4">
                          <span className="text-[#D4AF37] text-sm font-medium tracking-wider relative">
                            {item.journey}
                            <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                          </span>
                        </div>
                        <h3 className="text-3xl font-semibold ethnic-gold mb-4">
                          {item.name}
                        </h3>
                        <p className="text-[#FDB931]/80 text-lg mb-6">
                          {item.desc}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-[#D4AF37]/80 text-lg">{item.spice}</span>
                          {item.bestseller && (
                            <motion.span 
                              whileHover={{ scale: 1.05 }}
                              className="bg-[#D4AF37] text-black px-4 py-1.5 rounded-full text-sm font-medium"
                            >
                              Best Seller
                            </motion.span>
                          )}
                          {item.special && (
                            <motion.span 
                              whileHover={{ scale: 1.05 }}
                              className="bg-[#FDB931] text-black px-4 py-1.5 rounded-full text-sm font-medium"
                            >
                              Chef's Special
                            </motion.span>
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline dot with animation */}
                    <motion.div 
                      className="absolute left-1/2 transform -translate-x-1/2"
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-black relative">
                        <div className="absolute inset-0 rounded-full bg-[#D4AF37] animate-ping opacity-75"></div>
                      </div>
                    </motion.div>

                    {/* Image with animation */}
                    <div className="w-1/2">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className={`relative h-72 rounded-xl overflow-hidden ${
                          index % 2 === 0 ? 'ml-8 lg:ml-12' : 'mr-8 lg:mr-12'
                        }`}
                      >
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Combo Menus Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-24 sm:mt-32 md:mt-40"
          >
            <div className="text-center mb-12 sm:mb-14 md:mb-16 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 border-2 border-[#D4AF37]/5 rounded-full"></div>
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold ethnic-gold font-serif mb-4 sm:mb-5 md:mb-6 tracking-wide relative"
              >
                <span className="relative z-10">
                  Combo Specials
                  <span className="block text-[#FDB931] mt-1 sm:mt-2 italic">complete meals for every occasion</span>
                </span>
                <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-48 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
              </motion.h2>
            </div>

            <motion.div 
              className="relative"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Mobile View - Horizontal Scroll Cards */}
              <div className="md:hidden">
                <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory px-2 -mx-2">
                  {comboMenus.map((combo, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex-none w-[280px] snap-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-black/50 border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-300 h-full"
                      >
                        {/* Image Section */}
                        <div className="relative h-40">
                          <img 
                            src={combo.image} 
                            alt={combo.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <span className="text-[#D4AF37] text-sm font-medium tracking-wider">
                              {combo.journey}
                            </span>
                            <h3 className="text-xl font-semibold ethnic-gold mt-1">
                              {combo.name}
                            </h3>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-4">
                          <p className="text-[#FDB931]/80 text-sm mb-3">
                            {combo.desc}
                          </p>
                          <div className="space-y-2 mb-4">
                            {combo.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center text-sm text-[#FDB931]/90">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2"></span>
                                {detail}
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="text-[#D4AF37]/80 text-sm">{combo.spice}</span>
                              <span className="text-[#D4AF37]/60 text-xs">•</span>
                              <span className="text-[#D4AF37]/80 text-sm">{combo.serves}</span>
                            </div>
                            <span className="text-[#FDB931] font-semibold">{combo.price}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#D4AF37]/60 text-xs">{combo.time}</span>
                            <span className="text-[#FDB931]/80 text-xs">{combo.savings}</span>
                          </div>
                          <div className="flex gap-2 mt-3">
                            {combo.bestseller && (
                              <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#D4AF37] text-black px-3 py-1 rounded-full text-xs font-medium"
                              >
                                Best Seller
                              </motion.span>
                            )}
                            {combo.special && (
                              <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#FDB931] text-black px-3 py-1 rounded-full text-xs font-medium"
                              >
                                Special Offer
                              </motion.span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Desktop View - Grid Layout */}
              <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
                {comboMenus.map((combo, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="relative"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-black/50 border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-300 h-full"
                    >
                      {/* Image Section */}
                      <div className="relative h-48">
                        <img 
                          src={combo.image} 
                          alt={combo.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <span className="text-[#D4AF37] text-sm font-medium tracking-wider">
                            {combo.journey}
                          </span>
                          <h3 className="text-2xl font-semibold ethnic-gold mt-1">
                            {combo.name}
                          </h3>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        <p className="text-[#FDB931]/80 text-base mb-4">
                          {combo.desc}
                        </p>
                        <div className="space-y-2 mb-6">
                          {combo.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center text-sm text-[#FDB931]/90">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2"></span>
                              {detail}
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-[#D4AF37]/80 text-base">{combo.spice}</span>
                            <span className="text-[#D4AF37]/60 text-sm">•</span>
                            <span className="text-[#D4AF37]/80 text-base">{combo.serves}</span>
                          </div>
                          <span className="text-[#FDB931] text-xl font-semibold">{combo.price}</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[#D4AF37]/60 text-sm">{combo.time}</span>
                          <span className="text-[#FDB931]/80 text-sm">{combo.savings}</span>
                        </div>
                        <div className="flex gap-2">
                          {combo.bestseller && (
                            <motion.span 
                              whileHover={{ scale: 1.05 }}
                              className="bg-[#D4AF37] text-black px-4 py-1.5 rounded-full text-sm font-medium"
                            >
                              Best Seller
                            </motion.span>
                          )}
                          {combo.special && (
                            <motion.span 
                              whileHover={{ scale: 1.05 }}
                              className="bg-[#FDB931] text-black px-4 py-1.5 rounded-full text-sm font-medium"
                            >
                              Special Offer
                            </motion.span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 sm:mt-16 md:mt-20 text-center relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 border-2 border-[#D4AF37]/5 rounded-full"></div>
          </motion.div>
        </div>
      </section>
    );
  }