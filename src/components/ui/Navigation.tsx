
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg mr-3"></div>
            <span className="text-xl font-bold text-white">SaasFlow</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
            <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Sign In
            </Button>
            <Button className="bg-white text-gray-900 hover:bg-white/90">
              Start Free Trial
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="block text-white/80 hover:text-white transition-colors">Pricing</a>
              <a href="#testimonials" className="block text-white/80 hover:text-white transition-colors">Testimonials</a>
              <a href="#faq" className="block text-white/80 hover:text-white transition-colors">FAQ</a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full text-white hover:bg-white/10">
                  Sign In
                </Button>
                <Button className="w-full bg-white text-gray-900 hover:bg-white/90">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
