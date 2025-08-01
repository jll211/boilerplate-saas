
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-white/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <div className="w-12 h-12 mr-3 flex items-center justify-center">
              <img 
                src="/lovable-logo-icon.svg" 
                alt="LovableSaaS" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-[-1px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              LovableSaaS
            </span>
          </motion.div>
          
          {/* Desktop Menu */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Testimonials</a>
            <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">FAQ</a>
          </motion.div>
          
          {/* Desktop CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex items-center"
          >
            <Button className="bg-white text-gray-900 hover:bg-gray-50 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300">
              Start Free Trial
            </Button>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2 rounded-xl bg-white/50 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.1)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-white/30 rounded-b-2xl"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2">Features</a>
              <a href="#pricing" className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2">Pricing</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2">Testimonials</a>
              <a href="#faq" className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2">FAQ</a>
              <div className="pt-4">
                <Button className="w-full bg-white text-gray-900 hover:bg-gray-50 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
