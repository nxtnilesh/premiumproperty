"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Amit Verma",
    title: "Home Buyer",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    feedback:
      "PremiumHomes helped me find my dream home with zero hassle. The team was very supportive throughout.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    title: "Real Estate Investor",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "The insights and detailed listings made investing easier and more informed. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    title: "First-Time Buyer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "From search to purchase, everything was seamless. I especially loved the virtual tour feature.",
    rating: 4,
  },
  {
    name: "Neha Kapoor",
    title: "Seller",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    feedback:
      "The property listing process was quick, and I got multiple offers within days. Superb platform!",
    rating: 5,
  },
  {
    name: "Rakesh Singh",
    title: "Commercial Buyer",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    feedback:
      "Great for finding commercial spaces! Smooth communication and clear documentation.",
    rating: 4,
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsCarouselInfinite() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          What Our Clients Say
        </h2>

        <div className="relative w-full overflow-hidden py-2">
          <motion.div
            className="flex gap-6 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {duplicatedTestimonials.map((t, index) => (
              <div
                key={index}
                className="min-w-[280px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback>{t.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {t.name}
                    </p>
                    <p className="text-sm text-gray-500">{t.title}</p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 italic">
                  “{t.feedback}”
                </p>

                <div className="flex text-yellow-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
