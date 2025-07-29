
import { ArrowRight, Play, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/Navigation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]"></div>
      </div>
      
      <Navigation />
      
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
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
              <span className="font-mono text-xs tracking-wide">NEW: ADVANCED ANALYTICS DASHBOARD</span>
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
              Scale Your Business with{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              SaaS Platform
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
              Transform your workflow with our cutting-edge platform. Boost productivity by 10x, reduce costs by 60%, and scale effortlessly with enterprise-grade security.
            </p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.9)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.9)] transition-all duration-300 border border-gray-200/50"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),0_1px_3px_0_rgba(0,0,0,0.1)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_2px_6px_0_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
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
              <span>SOC 2 TYPE II CERTIFIED</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>99.9% UPTIME SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>NO SETUP FEES</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating neomorphic elements */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-24 h-24 bg-white/40 rounded-3xl shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.1)] backdrop-blur-sm"
      ></motion.div>
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 right-20 w-32 h-32 bg-white/30 rounded-3xl shadow-[inset_-3px_-3px_8px_rgba(255,255,255,0.6),inset_3px_3px_8px_rgba(0,0,0,0.1)] backdrop-blur-sm"
      ></motion.div>
    </section>
  );
};

export default Hero;
