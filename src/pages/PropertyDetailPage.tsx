import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bed,
  Bath,
  Square,
  MapPin,
  Calendar,
  Heart,
  Share2,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Home,
  Car,
  Wifi,
  Dumbbell,
  Minimize as Swimming,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { properties } from "@/data/properties";
import { toast } from "sonner";

const PropertyDetailPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Property Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The property you're looking for doesn't exist.
          </p>
          <Link to="/properties">
            <Button>Browse Properties</Button>
          </Link>
        </div>
      </div>
    );
  }

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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Property link copied to clipboard!");
  };

  const handleContact = (type: "phone" | "email") => {
    if (type === "phone") {
      window.open(`tel:${property.agent.phone}`, "_self");
    } else {
      window.open(
        `mailto:${property.agent.email}?subject=Inquiry about ${property.title}`,
        "_self"
      );
    }
  };

  const featureIcons: { [key: string]: any } = {
    "Swimming Pool": Swimming,
    "Home Theater": Home,
    "Wine Cellar": Home,
    "Smart Home": Wifi,
    Gym: Dumbbell,
    "Guest House": Home,
    "City Views": Home,
    Concierge: Home,
    "Rooftop Terrace": Home,
    "Valet Parking": Car,
    "Two-Car Garage": Car,
    "Marina Access": Home,
    "Beach Access": Home,
    "Hot Tub": Swimming,
    "Stone Fireplace": Home,
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Back Button & Actions */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <Link to="/properties">
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Properties</span>
            </Button>
          </Link>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsLiked(!isLiked)}
              className="flex items-center space-x-2"
            >
              <Heart
                className={`w-4 h-4 ${
                  isLiked ? "fill-red-500 text-red-500" : ""
                }`}
              />
              <span>{isLiked ? "Saved" : "Save"}</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="flex items-center space-x-2"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="relative">
              <div className="aspect-video relative overflow-hidden rounded-2xl">
                <motion.img
                  key={currentImageIndex}
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Navigation Buttons */}
                {property.images.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                  {currentImageIndex + 1} / {property.images.length}
                </div>

                {/* Status Badge */}
                <Badge
                  className={`absolute top-4 left-4 ${getStatusColor(
                    property.details.status
                  )}`}
                >
                  {property.details.status.replace("-", " ").toUpperCase()}
                </Badge>
              </div>

              {/* Thumbnail Gallery */}
              {property.images.length > 1 && (
                <div className="flex space-x-2 mt-4 overflow-x-auto">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex
                          ? "border-blue-500"
                          : "border-gray-200"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Property Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>
                      {property.location.address}, {property.location.city},{" "}
                      {property.location.state} {property.location.zipCode}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600">
                    ₹ {property.price}
                  </div>
                  {property.details.status === "for-rent" && (
                    <span className="text-gray-500">/month</span>
                  )}
                </div>
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Bed className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                  <div className="text-xl font-semibold text-gray-900">
                    {property.details.bedrooms}
                  </div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Bath className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                  <div className="text-xl font-semibold text-gray-900">
                    {property.details.bathrooms}
                  </div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Square className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                  <div className="text-xl font-semibold text-gray-900">
                    {property.details.sqft.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                  <div className="text-xl font-semibold text-gray-900">
                    {property.details.yearBuilt}
                  </div>
                  <div className="text-sm text-gray-600">Year Built</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Features & Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => {
                    const IconComponent = featureIcons[feature] || Home;
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg"
                      >
                        <IconComponent className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Your Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={property.agent.avatar}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {property.agent.name}
                    </h3>
                    <p className="text-sm text-gray-600">Real Estate Agent</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={() => handleContact("phone")}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    onClick={() => handleContact("email")}
                    variant="outline"
                    className="w-full"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Property Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Type</span>
                  <span className="font-medium capitalize">
                    {property.details.propertyType}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Year Built</span>
                  <span className="font-medium">
                    {property.details.yearBuilt}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Square Feet</span>
                  <span className="font-medium">
                    {property.details.sqft.toLocaleString()}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <Badge className={getStatusColor(property.details.status)}>
                    {property.details.status.replace("-", " ").toUpperCase()}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Tour */}
            <Card className="shadow-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Schedule a Tour</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  See this property in person. Book a tour today!
                </p>
                <Button
                  variant="secondary"
                  className="w-full bg-white text-blue-600 hover:bg-blue-50"
                >
                  Book Tour
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
