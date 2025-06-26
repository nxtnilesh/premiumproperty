import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import { properties } from "@/data/properties";
import { SearchFilters, Property } from "@/types/property";
import { useLocation } from "react-router-dom";
import FaqSection from "@/components/property/PropertyFaq";
import PropertyTestimonialsSection from "@/components/property/PropertyTestimonial";

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
