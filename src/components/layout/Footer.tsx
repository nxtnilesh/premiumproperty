import { CompanyAddress, ContactNumber } from '@/constants/company';
import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { Home, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: 'Properties',
      links: [
        { name: 'Buy', href: '/properties' },
        { name: 'Rent', href: '/properties' },
        { name: 'Luxury Homes', href: '/properties' },
        { name: 'Commercial', href: '/properties?type=commercial' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about' },
        { name: 'Careers', href: '/contact' },
        { name: 'Insight', href: '/news' },
      ],
    },
   
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'FAQ', href: '/' },
        { name: 'Privacy Policy', href: '/' },
        { name: 'Terms of Service', href: '/' },
      ],
    },
  ];

  const socialLinks = [
    { icon: TwitterLogoIcon, href: '#', label: 'Twitter' },
    { icon: InstagramLogoIcon, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-blue-600 rounded-lg"
              >
                <Home className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold">PremiumHomes</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner in finding the perfect home. We specialize in luxury properties 
              and exceptional service that exceeds expectations.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">{CompanyAddress}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">{ContactNumber}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">info@premiumhomes.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 PremiumHomes. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed with ❤️ for exceptional real estate experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;