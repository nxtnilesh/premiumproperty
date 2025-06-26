import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/sonner";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import PropertiesPage from "@/pages/PropertiesPage";
import PropertyDetailPage from "@/pages/PropertyDetailPage";
import { AnimatePresence } from "framer-motion";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import InsightsPage from "./pages/InsightsPage";
function App() {
  return (
    <Router>
      <div className="min-h-screen w-screen">
        <Header />

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/property/:id" element={<PropertyDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/insight" element={<InsightsPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
