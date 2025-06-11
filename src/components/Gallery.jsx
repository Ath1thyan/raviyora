import { motion } from "framer-motion";
import { useRef, useState } from "react";
import b1 from "../assets/b7.png"; // Close-up
import b2 from "../assets/b2.jpg";  // Close-up
import q1 from "../assets/q1.jpg";  // Queue
import q3 from "../assets/q3.jpg";  // Queue
import c1 from "../assets/c1.jpg"; // Event setup
import b5 from "../assets/r4.jpg";  // Before eating
import b6 from "../assets/r2.webp";  // After empty
import queue from "../assets/q2.jpg";
import c2 from "../assets/c2.jpg";
import emptyBox from "../assets/r5.jpg";

export default function Gallery() {
  const ref = useRef(null);
  const [flippedCard, setFlippedCard] = useState(null);

  const gallerySections = [
    {
      title: "The Biryani Itself",
      description: "Where every grain speaks spice.",
      layout: "featured",
      images: [
        { src: b1, title: "Saffron Touch", description: "The golden touch of saffron that makes every grain special.", size: "large" },
        { src: b2, title: "Layered Richness", description: "Perfect layers of rice, meat, and spices.", size: "medium" }
      ]
    },
    {
      title: "The Queue",
      description: "Lines worth waiting for at our tech park stalls.",
      layout: "horizontal",
      images: [
        { src: q1, title: "Lunch Rush", description: "The daily ritual of tech park foodies.", size: "small" },
        { src: queue, title: "Crowd Favorite", description: "Where patience meets anticipation.", size: "small" },
        { src: q3, title: "Another Angle", description: "A different view of the hungry crowd.", size: "small" }
      ]
    },
    {
      title: "Event Moments",
      description: "Where biryani becomes the centerpiece.",
      layout: "grid",
      images: [
        { src: c1, title: "Corporate Catering", description: "Making corporate events memorable.", size: "medium" },
        { src: c2, title: "Festival Setup", description: "Festivals are incomplete without our biryani.", size: "medium" }
      ]
    },
    {
      title: "The Aftermath",
      description: "From full to fulfilled — the final shots.",
      layout: "masonry",
      images: [
        { src: b5, title: "Ready to Feast", description: "The moment before the feast begins.", size: "small" },
        { src: b6, title: "Completely Devoured", description: "When every grain has found its way home.", size: "small" },
        { src: emptyBox, title: "Mission Accomplished", description: "The sweet satisfaction of a perfect meal.", size: "small" }
      ]
    }
  ];

  const getLayoutClass = (layout) => {
    switch (layout) {
      case "featured":
        return "grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto";
      case "horizontal":
        return "flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory px-2 -mx-2";
      case "grid":
        return "grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto";
      case "masonry":
        return "columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-5xl mx-auto px-2";
      default:
        return "grid grid-cols-1 sm:grid-cols-2 gap-4";
    }
  };

  const getCardSize = (size) => {
    switch (size) {
      case "large":
        return "aspect-[4/3] sm:aspect-[16/9]";
      case "medium":
        return "aspect-square";
      case "small":
        return "aspect-[3/4] sm:aspect-[4/3]";
      default:
        return "aspect-square";
    }
  };

  return (
    <section className="p-6 md:p-10 royal-black pattern-bg relative overflow-hidden" id="gallery">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-24 h-24 border-2 border-[#D4AF37]/10 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-[#D4AF37]/10 rounded-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:20px_20px] opacity-5"></div>
      </div>

      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto relative"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold ethnic-gold font-serif mb-2">Gallery</h2>
          <div className="relative">
            <p className="text-[#FDB931]/90 text-lg italic font-serif max-w-2xl mx-auto relative z-10">
              "Because biriyani should be seen, smelled, and then devoured."
            </p>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>
        </div>

        {gallerySections.map((section, index) => (
          <div key={index} className="mb-16">
            <div className="mb-6 px-2">
              <div className="relative inline-block">
                <h3 className="text-2xl text-[#D4AF37] font-semibold mb-1 font-serif">{section.title}</h3>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0"></div>
              </div>
              <p className="text-[#FDB931]/70 text-sm italic font-serif mt-2">{section.description}</p>
            </div>

            <div className={getLayoutClass(section.layout)}>
              {section.images.map((image, i) => {
                const cardId = `${index}-${i}`;
                const isFlipped = flippedCard === cardId;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.6 }}
                    className={`group relative ${section.layout === 'horizontal' ? 'snap-center flex-shrink-0 w-[250px]' : ''}`}
                    onMouseEnter={() => setFlippedCard(cardId)}
                    onMouseLeave={() => setFlippedCard(null)}
                  >
                    <div className={`${getCardSize(image.size)} bg-black/30 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl overflow-hidden transition-transform duration-500 transform-gpu hover:border-[#D4AF37]/40 hover:shadow-gold ${isFlipped ? 'rotate-y-180' : ''}`}>
                      {/* Front */}
                      <div className={`absolute inset-0 transition-opacity duration-500 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
                        <img 
                          src={image.src} 
                          alt={image.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="h-0.5 w-12 bg-[#D4AF37] mb-2"></div>
                            <p className="text-white text-sm font-medium font-serif">{image.title}</p>
                          </div>
                        </div>
                      </div>

                      {/* Back */}
                      <div className={`absolute inset-0 bg-black/95 p-4 flex flex-col justify-center items-center text-center transition-opacity duration-500 rotate-y-180 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}>
                        <h4 className="text-[#D4AF37] text-lg font-semibold mb-2 font-serif">{image.title}</h4>
                        <p className="text-[#FDB931]/80 text-sm leading-relaxed italic font-serif">{image.description}</p>
                        <div className="mt-3 w-10 h-0.5 bg-[#D4AF37]"></div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <div className="relative inline-block">
            <p className="text-[#D4AF37]/80 text-base italic font-serif">
              "From the first look to the last bite — biryani is an emotion."
            </p>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
