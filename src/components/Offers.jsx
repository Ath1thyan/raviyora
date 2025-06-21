import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaGift, FaBuilding, FaUsers, FaStore, FaRibbon, FaTimes } from 'react-icons/fa';

const Offers = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);

  const secretOffers = [
    {
      id: "SECRET-1",
      title: "SECRET - 1",
      minAmount: "299",
      discount: "5%",
      description: "Get 5% OFF on your total bill when you order ₹299 or more valid on Veg & Non-Veg delights! Perfect for solo cravings or duo indulgence!",
      icon: FaGift,
      color: "from-[#D4AF37] to-[#FDB931]",
      ribbon: "New"
    },
    {
      id: "SECRET-2",
      title: "SECRET - 2",
      minAmount: "699",
      discount: "10%",
      description: "Get 10% OFF when you order ₹699 or more – mix & match your favorites from Veg and Non-Veg menus! Ideal for family feasts or foodie friends!",
      icon: FaStore,
      color: "from-[#FDB931] to-[#D4AF37]",
      ribbon: "Popular"
    }
  ];

  const corporateOffers = [
    {
      id: "CORP-SPICE-1",
      title: "CORP - SPICE 1",
      minAmount: "9,999",
      discount: "10%",
      description: "10% OFF on all orders above ₹9,999. Fuel your team lunches and office events with flavorful savings!",
      icon: FaBuilding,
      color: "from-[#D4AF37] to-[#FDB931]",
      ribbon: "Premium"
    },
    {
      id: "CORP-SPICE-2",
      title: "CORP - SPICE 2",
      minAmount: "19,999",
      discount: "20%",
      description: "20% OFF on all orders above ₹19,999 Perfect for large-scale events, celebrations, or bulk catering!",
      icon: FaUsers,
      color: "from-[#FDB931] to-[#D4AF37]",
      ribbon: "Elite"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const GiftCard = ({ offer, isCorporate }) => (
    <motion.div
      variants={cardVariants}
      className="relative group cursor-pointer"
      onClick={() => setSelectedOffer(offer)}
    >
      {/* Gift Box */}
      <div className="w-[280px] h-[280px] bg-gradient-to-br from-black to-[#1a1a1a] border-2 border-[#D4AF37]/30 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-300">
        {/* Ribbon */}
        <div className="absolute -right-12 top-6 rotate-45 bg-gradient-to-r from-[#D4AF37] to-[#FDB931] text-black px-12 py-1 font-bold text-sm z-10">
          {offer.ribbon}
        </div>
        
        {/* Gift Box Content */}
        <div className="p-6 relative h-full flex flex-col items-center justify-center">
          {/* Decorative Corner */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]/30"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]/30"></div>
          
          {/* Gift Icon */}
          <div className={`bg-gradient-to-r ${offer.color} p-6 rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <offer.icon className="text-black text-4xl" />
          </div>

          {/* Title */}
          <h4 className="text-xl font-serif text-[#D4AF37] mb-2 text-center">{offer.title}</h4>
          
          {/* Click to Open */}
          <p className="text-[#FDB931]/60 text-sm mt-2 group-hover:text-[#FDB931] transition-colors duration-300">
            Click to unwrap
          </p>
        </div>
      </div>
    </motion.div>
  );

  const OfferDetails = ({ offer, onClose }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-gradient-to-br from-black to-[#1a1a1a] border-2 border-[#D4AF37]/30 rounded-xl p-8 max-w-md w-full relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#D4AF37] hover:text-[#FDB931] transition-colors duration-300"
        >
          <FaTimes size={24} />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className={`bg-gradient-to-r ${offer.color} p-4 rounded-full shadow-lg inline-block mb-6`}>
            <offer.icon className="text-black text-3xl" />
          </div>
          
          <h3 className="text-2xl font-serif text-[#D4AF37] mb-4">{offer.title}</h3>
          
          <div className="text-5xl font-bold text-[#FDB931] mb-6">
            {offer.discount} OFF
          </div>
          
          <p className="text-[#FDB931]/80 text-lg mb-6">{offer.description}</p>
          
          <div className="text-[#D4AF37] text-xl mb-8">
            Min. Order: ₹{offer.minAmount}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FDB931] text-black rounded-full font-medium hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300"
          >
            {offer.id.startsWith("CORP") ? "Contact Us" : "Order Now"}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );

  // Add custom styles for hiding scrollbar
  const scrollbarStyles = `
    .hide-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    .hide-scrollbar::-webkit-scrollbar {
      display: none;  /* Chrome, Safari and Opera */
    }
  `;

  return (
    <>
      <style>{scrollbarStyles}</style>
      <section id="offers" className="p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 royal-black pattern-bg relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:20px_20px] opacity-5"></div>
        
        <div className="max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-7xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 border-2 border-[#D4AF37]/5 rounded-full"></div>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ethnic-gold font-serif mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-wide relative"
            >
              <span className="relative z-10">
                Special Gift Cards
                <span className="block text-[#FDB931] mt-1 sm:mt-2 italic">for every occasion</span>
              </span>
              <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-24 sm:w-32 md:w-40 lg:w-48 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            </motion.h2>
          </div>

          {/* All Offers in Single Row */}
          <motion.div 
            className="mb-16 sm:mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-nowrap overflow-x-auto gap-6 sm:gap-8 pb-4 px-2 -mx-2 hide-scrollbar">
              {/* Secret Offers */}
              {secretOffers.map((offer) => (
                <div key={offer.id} className="flex-none">
                  <GiftCard offer={offer} isCorporate={false} />
                </div>
              ))}
              
              {/* Corporate Offers */}
              {corporateOffers.map((offer) => (
                <div key={offer.id} className="flex-none">
                  <GiftCard offer={offer} isCorporate={true} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-[#D4AF37]/60 text-sm italic">
              *Packing & delivery charges apply as per location and order volume.
            </p>
          </motion.div>

          {/* Modal */}
          <AnimatePresence>
            {selectedOffer && (
              <OfferDetails
                offer={selectedOffer}
                onClose={() => setSelectedOffer(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Offers;
