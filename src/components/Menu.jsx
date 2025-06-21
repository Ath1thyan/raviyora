import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
// import b1 from "../assets/b1.avif"
import b2 from "../assets/b2.jpg"
import b3 from "../assets/b3.jpg"
import b4 from "../assets/b4.jpeg"
import b5 from "../assets/b5.jpg"
import b6 from "../assets/b6.webp"
import pot1 from "../assets/bgb4.png"
import logo from "../assets/logo.png"
import HTMLFlipBook from 'react-pageflip';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Menu() {
    const items = [
      { 
        name: "Chicken Biriyani", 
        desc: "Flavour-packed basmati rice, tender chicken, slow cooked with house spices. Comes with Raitha & Signature Curry (500g) Packed with ~25g protein per serving.",
        spice: "🌶️🌶️🌶️",
        image: b2,
        bestseller: true,
        journey: "The Classic",
        curve: "curve-1",
        price: "₹169",
        type: "non-veg",
        serves: "1-2 Persons",
        mustTry: true,
        protein: "25g",
        calories: "450-500",
        popularity: "⭐⭐⭐⭐⭐"
      },
      { 
        name: "Mutton Biriyani", 
        desc: "Juicy mutton chunks, royal spice blend, long-grain biryani rice. Comes with Raitha & Signature Curry (500g) Rich in ~30g protein, perfect for meat lovers.",
        spice: "🌶️🌶️🌶️🌶️",
        image: b3,
        special: true,
        journey: "The Royal",
        curve: "curve-2",
        price: "₹229",
        type: "non-veg",
        serves: "1-2 Persons",
        mustTry: true,
        protein: "30g",
        calories: "500-550",
        popularity: "⭐⭐⭐⭐⭐"
      },
      { 
        name: "Mushroom Biriyani", 
        desc: "Earthy mushrooms with fragrant spices & saffron-infused rice (450g) Naturally rich in ~10g plant-based protein.",
        spice: "🌶️🌶️",
        image: b4,
        journey: "The Vegetarian",
        curve: "curve-3",
        price: "₹120",
        type: "veg",
        serves: "1 Person",
        protein: "10g",
        calories: "350-400",
        popularity: "⭐⭐⭐⭐"
      },
      { 
        name: "Veg Biriyani", 
        desc: "Seasonal veggies, slow-cooked with biryani rice & handpicked herbs (450g) Balanced & wholesome with ~9g protein from mixed vegetables.",
        spice: "🌶️🌶️",
        image: b5,
        journey: "The Vegetarian",
        curve: "curve-4",
        price: "₹120",
        type: "veg",
        serves: "1 Person",
        protein: "9g",
        calories: "300-350",
        popularity: "⭐⭐⭐⭐"
      },
      { 
        name: "Ghee Rice", 
        desc: "Aromatic rice tossed in desi ghee & mild whole spices (450g) Light yet energizing, with ~5g protein per plate.",
        spice: "🌶️",
        image: b6,
        journey: "The Simple",
        curve: "curve-5",
        price: "₹120",
        type: "veg",
        serves: "1 Person",
        protein: "5g",
        calories: "250-300",
        popularity: "⭐⭐⭐"
      },
      { 
        name: "Chicken Kebab", 
        desc: "(6 pcs) Chargrilled, juicy & spiced to perfection. Delivers approximately 22g of high-quality lean protein – perfect for muscle recovery and sustained energy.",
        spice: "🌶️🌶️",
        image: b2,
        journey: "The Grilled",
        curve: "curve-6",
        price: "₹129",
        type: "non-veg",
        serves: "1-2 Persons",
        mustTry: true,
        protein: "22g",
        calories: "300-350",
        popularity: "⭐⭐⭐⭐⭐"
      },
      { 
        name: "Pepper Chicken", 
        desc: "Tender boneless chicken tossed in cracked black pepper and roasted spices. Packed with about 24g of protein – ideal for spice lovers who want a strong, satiating protein hit.",
        spice: "🌶️🌶️🌶️",
        image: b3,
        journey: "The Spicy",
        curve: "curve-7",
        price: "₹149",
        type: "non-veg",
        serves: "1-2 Persons",
        mustTry: true,
        protein: "24g",
        calories: "350-400",
        popularity: "⭐⭐⭐⭐"
      }
    ];

    const comboMenus = [
      {
        name: "Biryani Rice Combo",
        desc: "Biryani Rice Rice + Raitha + Curry + 3pc Chicken Kebab + Gulab Jamun. Biryani rice paired with creamy raitha and spicy curry, served with juicy kebabs and a sweet jamun treat.",
        price: "₹159",
        spice: "🌶️🌶️",
        image: b2,
        bestseller: true,
        journey: "The Complete Meal",
        curve: "curve-8",
        serves: "1 Person",
        savings: "Save ₹50",
        protein: "24g",
        calories: "350-400",
        popularity: "⭐⭐⭐⭐"
      },
      {
        name: "Chicken Biriyani Combo",
        desc: "Chicken Biryani + Raitha + Curry + 3pc Pepper Chicken + Gulab Jamun. A full-on feast! Aromatic chicken biryani served with refreshing raitha and curry, plus smoky pepper chicken and a soft jamun for dessert.",
        price: "₹199",
        spice: "🌶️🌶️🌶️",
        image: b3,
        special: true,
        journey: "The Feast",
        curve: "curve-9",
        serves: "1 Person",
        savings: "Save ₹70",
        protein: "24g",
        calories: "350-400",
        popularity: "⭐⭐⭐⭐"
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

    // Split items into pairs for two-page layout
    const pagePairs = [];
    // Add regular menu items
    for (let i = 0; i < items.length; i++) {
      pagePairs.push([items[i]]);
    }
    // Add combo menus
    for (let i = 0; i < comboMenus.length; i++) {
      pagePairs.push([comboMenus[i]]);
    }

    const Page = React.forwardRef((props, ref) => {
      return (
        <div className="page" ref={ref}>
          <div className="page-content h-full">
            {props.children}
          </div>
        </div>
      );
    });

    return (
      <section id="menu" className="p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 royal-black pattern-bg relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Decorative Pot Images */}
          <motion.img 
            src={pot1} 
            alt="decorative pot" 
            className="absolute top-1/4 -right-10 sm:-right-20 w-24 sm:w-40 md:w-50 lg:w-60 h-24 sm:h-40 md:h-50 lg:h-60 opacity-20 rotate-12"
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
            className="absolute bottom-1/4 -left-10 sm:-left-20 w-24 sm:w-40 md:w-50 lg:w-60 h-24 sm:h-40 md:h-50 lg:h-60 opacity-20 -rotate-12"
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:10px_10px] sm:bg-[length:15px_15px] md:bg-[length:20px_20px] opacity-5"></div>
        </div>

        <div className="max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-7xl mx-auto relative">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 border-2 border-[#D4AF37]/5 rounded-full"></div>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ethnic-gold font-serif mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-wide relative"
            >
              <span className="relative z-10">
                What's on the pot 
                <span className="block text-[#FDB931] mt-1 sm:mt-2 italic">today?</span>
              </span>
              <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-24 sm:w-32 md:w-40 lg:w-48 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[#FDB931] text-base sm:text-lg md:text-xl lg:text-2xl italic font-serif relative z-10"
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
            <div className="block md:hidden">
              <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 snap-x snap-mandatory px-2 -mx-2 scrollbar-hide">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex-none w-[260px] sm:w-[280px] snap-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-black/50 border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-300 h-full"
                    >
                      {/* Image Section */}
                      <div className="relative h-36 sm:h-40">
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

            {/* Desktop View - Booklet Layout */}
            <div className="hidden md:block">
              <div className="relative max-w-[90%] lg:max-w-6xl mx-auto">
                {/* Book Pages */}
                <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
                  {/* Book Title */}
                  <div className="text-center mb-8 sm:mb-10 md:mb-12 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 border-2 border-[#D4AF37]/5 rounded-full"></div>
                  </div>

                  {/* Flip Book */}
                  <div className="book-container w-full max-w-[90vw] mx-auto">
                    <HTMLFlipBook
                      width={window.innerWidth < 768 ? 300 : window.innerWidth < 1024 ? 400 : 500}
                      height={window.innerWidth < 768 ? 450 : window.innerWidth < 1024 ? 600 : 700}
                      size="stretch"
                      minWidth={280}
                      maxWidth={800}
                      minHeight={400}
                      maxHeight={900}
                      maxShadowOpacity={0.5}
                      showCover={true}
                      mobileScrollSupport={true}
                      className="book"
                      style={{
                        '--book-border-color': '#D4AF37',
                        '--book-border-width': '2px',
                        '--book-border-radius': '1rem',
                        '--book-shadow': '0 0 20px rgba(212, 175, 55, 0.2)',
                        '--book-background': 'rgba(0, 0, 0, 0.8)',
                      }}
                    >
                      {/* Cover Page */}
                      <Page>
                        <div className="h-full w-full bg-gradient-to-b from-black/40 via-black/30 to-black/40 border border-[#D4AF37]/20 rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
                          {/* Decorative Background Elements */}
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:20px_20px] opacity-5"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#FDB931]/5"></div>
                          
                          <div className="text-center relative z-10">
                            <motion.div
                              className="relative mb-8"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6 }}
                            >
                              <motion.img 
                                src={logo} 
                                alt="Raviyora Logo" 
                                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                              />
                              <div className="absolute -inset-4 bg-[#D4AF37]/5 rounded-full blur-xl"></div>
                            </motion.div>
                            
                            <motion.h3 
                              className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#D4AF37] mb-6"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 0.6 }}
                            >
                              Raviyora
                            </motion.h3>
                            
                            <motion.p 
                              className="text-[#FDB931]/80 text-xl mb-8 font-serif"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4, duration: 0.6 }}
                            >
                              Discover our authentic biryani recipes
                            </motion.p>
                            
                            <motion.div 
                              className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8"
                              initial={{ opacity: 0, scaleX: 0 }}
                              animate={{ opacity: 1, scaleX: 1 }}
                              transition={{ delay: 0.5, duration: 0.6 }}
                            ></motion.div>
                            
                            <motion.div 
                              className="relative group"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6, duration: 0.6 }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-[#FDB931]/10 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                              <div className="relative flex items-center justify-center gap-3 px-6 py-3 border border-[#D4AF37]/20 rounded-full bg-black/20 backdrop-blur-sm group-hover:border-[#D4AF37]/40 transition-all duration-300">
                                <FaArrowRight className="text-[#D4AF37] text-lg group-hover:translate-x-1 transition-transform duration-300" />
                                <span className="text-[#D4AF37] text-sm font-medium tracking-wider">Click or swipe to explore</span>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </Page>

                      {/* Menu Pages */}
                      {pagePairs.map((pair, index) => (
                        <Page key={index}>
                          <div className="h-full w-full bg-gradient-to-b from-black/40 via-black/30 to-black/40 border border-[#D4AF37]/20 rounded-xl p-3 sm:p-4 md:p-6 relative overflow-hidden">
                            {/* Decorative Background Elements */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:20px_20px] opacity-5"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#FDB931]/5"></div>
                            
                            <div className="relative z-10 h-full flex flex-col">
                              {pair.map((item, itemIndex) => (
                                <motion.div 
                                  key={itemIndex}
                                  variants={itemVariants}
                                  className="relative group h-full flex flex-col"
                                >
                                  {/* Image Section */}
                                  <div className="relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden mb-4 sm:mb-6">
                                    <img 
                                      src={item.image} 
                                      alt={item.name}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    {/* Badges */}
                                    <div className="absolute top-4 right-4 flex gap-2">
                                      {item.bestseller && (
                                        <span className="bg-[#D4AF37] text-black px-4 py-1.5 rounded-full text-sm font-medium">
                                          Best Seller
                                        </span>
                                      )}
                                      {item.special && (
                                        <span className="bg-[#FDB931] text-black px-4 py-1.5 rounded-full text-sm font-medium">
                                          {item.journey === "The Feast" ? "Special Offer" : "Chef's Special"}
                                        </span>
                                      )}
                                      {item.mustTry && (
                                        <span className="bg-[#D4AF37] text-black px-4 py-1.5 rounded-full text-sm font-medium">
                                          Must Try
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  {/* Content Section */}
                                  <div className="flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                                      <span className="text-[#D4AF37] text-sm font-medium tracking-wider relative inline-block">
                                        {item.journey}
                                        <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                                      </span>
                                      <div className="flex items-center gap-2">
                                        <span className={`text-lg ${item.type === 'veg' ? 'text-green-500' : 'text-red-500'}`}>
                                          {item.type === 'veg' ? '🌱' : '🍗'}
                                        </span>
                                        <span className="text-[#D4AF37]/80 text-sm">{item.serves}</span>
                                      </div>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-semibold ethnic-gold mb-2 sm:mb-4 font-serif transition-colors duration-300 group-hover:text-[#FDB931]">
                                      {item.name}
                                    </h3>
                                    <p className="text-base sm:text-lg text-[#FDB931]/80 mb-4 sm:mb-6 font-serif italic flex-1">
                                      {item.desc}
                                    </p>
                                    
                                    {/* Nutrition Info */}
                                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 bg-black/20 rounded-xl border border-[#D4AF37]/10">
                                      <div className="text-center">
                                        <span className="block text-[#D4AF37] text-sm mb-1">Protein</span>
                                        <span className="text-[#FDB931] text-lg font-medium">{item.protein}</span>
                                      </div>
                                      <div className="text-center">
                                        <span className="block text-[#D4AF37] text-sm mb-1">Calories</span>
                                        <span className="text-[#FDB931] text-lg font-medium">{item.calories}</span>
                                      </div>
                                      <div className="text-center">
                                        <span className="block text-[#D4AF37] text-sm mb-1">Popularity</span>
                                        <span className="text-[#FDB931] text-lg font-medium">{item.popularity}</span>
                                      </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-[#D4AF37]/20">
                                      <div className="flex items-center gap-3">
                                        <span className="text-[#D4AF37]/80 text-lg">{item.spice}</span>
                                      </div>
                                      <div className="flex flex-col items-end">
                                        <span className="text-[#FDB931] text-2xl font-semibold">{item.price}</span>
                                        {item.savings && (
                                          <span className="text-[#D4AF37] text-sm">{item.savings}</span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </Page>
                      ))}

                      {/* End Cover */}
                      <Page>
                        <div className="h-full w-full bg-gradient-to-b from-black/40 via-black/30 to-black/40 border border-[#D4AF37]/20 rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
                          {/* Decorative Background Elements */}
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:20px_20px] opacity-5"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#FDB931]/5"></div>
                          
                          <div className="text-center relative z-10">
                            <motion.div
                              className="relative mb-8"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6 }}
                            >
                              <motion.img 
                                src={logo} 
                                alt="Raviyora Logo" 
                                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                              />
                              <div className="absolute -inset-4 bg-[#D4AF37]/5 rounded-full blur-xl"></div>
                            </motion.div>
                            
                            <motion.h3 
                              className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#D4AF37] mb-6"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 0.6 }}
                            >
                              Thank You
                            </motion.h3>
                            
                            <motion.p 
                              className="text-[#FDB931]/80 text-xl mb-8 font-serif"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4, duration: 0.6 }}
                            >
                              We hope you enjoyed exploring our menu
                            </motion.p>
                            
                            <motion.div 
                              className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8"
                              initial={{ opacity: 0, scaleX: 0 }}
                              animate={{ opacity: 1, scaleX: 1 }}
                              transition={{ delay: 0.5, duration: 0.6 }}
                            ></motion.div>
                            
                            <motion.div 
                              className="relative group"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6, duration: 0.6 }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-[#FDB931]/10 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                              <div className="relative flex items-center justify-center gap-3 px-6 py-3 border border-[#D4AF37]/20 rounded-full bg-black/20 backdrop-blur-sm group-hover:border-[#D4AF37]/40 transition-all duration-300">
                                <FaArrowLeft className="text-[#D4AF37] text-lg group-hover:-translate-x-1 transition-transform duration-300" />
                                <span className="text-[#D4AF37] text-sm font-medium tracking-wider">Flip back to explore more</span>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </Page>
                    </HTMLFlipBook>
                  </div>
                </div>
              </div>
            </div>
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
