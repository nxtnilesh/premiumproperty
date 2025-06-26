import FeaturedProperties from "@/components/home/FeaturedProperties";
import HeroSection from "@/components/home/HeroSection";
import FaqSection from "@/components/property/PropertyFaq";
import PropertyTestimonialsSection from "@/components/property/PropertyTestimonial";
import { properties } from "@/data/properties";
import { Property } from "@/types/property";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(properties);
  const { pathname } = useLocation();
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <HeroSection />
      <PropertyTestimonialsSection/>
      <FeaturedProperties properties={filteredProperties} />
      <FaqSection/>
    </motion.div>
  );
};

export default HomePage;
