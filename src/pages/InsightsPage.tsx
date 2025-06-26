import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Insights } from "@/data/insights";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // or next/link for Next.js

export default function InsightsListPage() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Insights & Trends
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Stay updated with the latest developments in real estate,
            technology, and investment.
          </p>
        </motion.div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-shadow duration-300 h-full cursor-pointer">
                <div className="w-full h-48 overflow-hidden rounded-t-md">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <Badge variant="outline" className="mb-2">
                    {insight.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {insight.excerpt}
                  </p>
                  <span className="text-xs text-gray-400">{insight.date}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
