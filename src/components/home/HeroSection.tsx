import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PropertySearch from '@/components/property/PropertySearch';
import { SearchFilters } from '@/types/property';



const HeroSection = () => {
  const scrollToProperties = () => {
    const element = document.getElementById('properties-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury home background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find Your
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Dream Home
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover exceptional properties with stunning views, luxury amenities, 
            and prime locations. Your perfect home awaits.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={scrollToProperties}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Explore Properties
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-black hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Video Tour
            </Button>
          </motion.div>
        </motion.div>

        {/* Search Component */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <PropertySearch  />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute -bottom-28 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToProperties}
            className="text-black bg-white hover:text-blue-200"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </motion.div>
      </div>

      {/* Shuttle Animation */}
      <motion.div
        className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-full h-1 bg-gradient-to-l from-transparent via-emerald-400 to-transparent opacity-30"
        animate={{ x: ['100%', '-100%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 2 }}
      />
    </div>
  );
};

export default HeroSection;