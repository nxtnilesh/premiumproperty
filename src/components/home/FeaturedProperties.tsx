import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PropertyCard from '@/components/property/PropertyCard';
import { Property } from '@/types/property';

interface FeaturedPropertiesProps {
  properties: Property[];
}

const FeaturedProperties = ({ properties }: FeaturedPropertiesProps) => {
  const featuredProperties = properties.slice(0, 6);

  return (
    <section id="properties-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold">Featured Properties</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Exceptional Homes for 
              <span className="text-blue-600"> Exceptional Lives</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handpicked selection of premium properties, each offering 
              unique charm and luxury in the most desirable locations.
            </p>
          </motion.div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/properties">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
              View All Properties
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Properties Sold', value: '2,500+', icon: '🏠' },
            { label: 'Happy Clients', value: '5,000+', icon: '😊' },
            { label: 'Years Experience', value: '15+', icon: '📅' },
            { label: 'Expert Agents', value: '50+', icon: '👥' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;