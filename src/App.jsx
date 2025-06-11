import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import PreOrder from "./components/PreOrderSection";
import Menu from "./components/Menu";
import Event from "./components/EventStallBooking";
import Testimonials from "./components/Testimonials";
import Spots from "./components/WhereWeServe";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Faq from "./components/FAQSection";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Intro from "./components/Intro";
import WhyUs from "./components/WhyUs";
import JoinUs from "./components/JoinUs";
import Form from "./components/Form";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // List of all image paths used in the application
    const imagePaths = [
      // Logo and Social Media
      "/src/assets/logo.png",
      "/src/assets/instagram.png",
      "/src/assets/facebook.png",
      "/src/assets/zomato.webp",
      "/src/assets/swiggy.png",
      
      // Background Images
      "/src/assets/b0.jpg",
      "/src/assets/b1.avif",
      "/src/assets/b2.jpg",
      "/src/assets/b3.jpg",
      "/src/assets/b4.jpeg",
      "/src/assets/b5.jpg",
      "/src/assets/b6.webp",
      "/src/assets/b7.png",
      "/src/assets/b8.jpg",
      "/src/assets/b9.jpg",
      "/src/assets/b10.jpg",
      "/src/assets/b11.jpg",
      "/src/assets/b12.jpg",
      
      // Background Patterns
      "/src/assets/bgb1.png",
      "/src/assets/bgb2.webp",
      "/src/assets/bgb3.png",
      "/src/assets/bgb4.png",
      
      // Restaurant Images
      "/src/assets/r1.jpeg",
      "/src/assets/r2.webp",
      "/src/assets/r3.avif",
      "/src/assets/r4.jpg",
      "/src/assets/r5.jpg",
      
      // Customer Images
      "/src/assets/c1.jpg",
      "/src/assets/c2.jpg",
      
      // Quote Images
      "/src/assets/q1.jpg",
      "/src/assets/q2.jpg",
      "/src/assets/q3.jpg"
    ];

    // Function to preload images
    const preloadImages = async () => {
      const imagePromises = imagePaths.map((path) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = path;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
        // Still set imagesLoaded to true to prevent infinite loading
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    // Add a minimum loading time of 2 seconds for better UX
    const timer = setTimeout(() => {
      if (imagesLoaded) {
        setIsLoading(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [imagesLoaded]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Intro />
        <Menu />
        <PreOrder />
        <Spots />
        <Event />
        <Testimonials />
        <WhyUs />
        <Gallery />
        <JoinUs />
        <Contact />
        <Form />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
