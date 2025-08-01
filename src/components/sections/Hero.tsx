
import { ArrowRight, Play, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/Navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ["SaaS", "Prototype", "App", "Website"];
  
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 100 : 2000;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === "") {
        // Move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        // Type or delete character
        setDisplayText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentWord.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentWordIndex, displayText, isDeleting, words]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]"></div>
      </div>
      
      <Navigation />
      
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-2">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/80 rounded-full px-6 py-3 text-sm text-gray-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),0_1px_3px_0_rgba(0,0,0,0.1)]">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="font-mono text-xs tracking-wide">PRODUCTION-READY SAAS TEMPLATE</span>
            </div>
          </motion.div>
          
          {/* Main Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight tracking-[-2px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Build your {" "}
              <motion.span 
                className="relative inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                style={{
                  background: `linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 3s ease-in-out infinite'
                }}
              >
                {displayText}
                <span className="animate-pulse">|</span>
              </motion.span>
              <br />
              faster
            </h1>
          </motion.div>
          
          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-mono tracking-wide">
              Stop wasting months on boilerplate code. Launch your SaaS in days with our production-ready template. It has auth, payments, dashboard, and everything you need.
            </p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.9)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.9)] transition-all duration-300 border border-gray-200/50"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),0_1px_3px_0_rgba(0,0,0,0.1)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_2px_6px_0_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              View Demo
            </Button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-500 text-sm font-mono"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>PRODUCTION TESTED</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>SAVE 3+ MONTHS</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>INSTANT SETUP</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `
      }} />
    </section>
  );
};

export default Hero;
