import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bed, Bath, Square, MapPin, Heart, Camera } from "lucide-react";
import { Property } from "@/types/property";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface PropertyCardProps {
  property: Property;
  index: number;
}

const PropertyCard = ({ property, index }: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const getStatusColor = (status: string) => {
    switch (status) {
      case "for-sale":
        return "bg-green-100 text-green-800";
      case "for-rent":
        return "bg-blue-100 text-blue-800";
      case "sold":
        return "bg-gray-100 text-gray-800";
      case "rented":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <motion.img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.05 }}
        />

        {/* Image Navigation */}
        {property.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {property.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Status Badge */}
        <Badge
          className={`absolute top-4 left-4 ${getStatusColor(
            property.details.status
          )}`}
        >
          {property.details.status.replace("-", " ").toUpperCase()}
        </Badge>

        {/* Image Count */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-lg text-xs flex items-center space-x-1">
          <Camera className="w-3 h-3" />
          <span>{property.images.length}</span>
        </div>

        {/* Like Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
          className="absolute bottom-4 right-4 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </motion.button>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Price */}
        <div className="mb-3">
          <span className="text-2xl font-bold text-blue-600">
            ₹{property.price}
          </span>
          {property.details.status === "for-rent" && (
            <span className="text-gray-500 text-sm">/month</span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">
            {property.location.address}, {property.location.city},{" "}
            {property.location.state}
          </span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{property.details.bedrooms} beds</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{property.details.bathrooms} baths</span>
          </div>
          <div className="flex items-center space-x-1">
            <Square className="w-4 h-4" />
            <span className="text-sm">
              {property.details.sqft.toLocaleString()} sqft
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {property.features.slice(0, 3).map((feature, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
            {property.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{property.features.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Agent Info & CTA */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center space-x-3">
            <img
              src={property.agent.avatar}
              alt={property.agent.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">
                {property.agent.name}
              </p>
              <p className="text-xs text-gray-500">Real Estate Agent</p>
            </div>
          </div>
          <Link to={`/property/${property.id}`}>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
