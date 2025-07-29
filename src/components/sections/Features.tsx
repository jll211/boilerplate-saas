
import { Database, Shield, Zap, Users, CreditCard, BarChart, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Authentication Ready",
      description: "Complete auth system with login, signup, password reset, and social providers. No setup needed."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Integration",
      description: "Stripe integration with subscription management, webhooks, and billing portal built-in."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Schema",
      description: "Pre-built database schema for users, subscriptions, and common SaaS patterns using Supabase."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Admin Dashboard",
      description: "Beautiful admin panel with analytics, user management, and all the tools you need."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Management",
      description: "Complete user system with roles, permissions, team management, and invitation flows."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description: "Built with security best practices, rate limiting, and enterprise-grade protection."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Codebase",
      description: "Well-structured, documented code that's easy to understand and customize for your needs."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deploy Anywhere",
      description: "One-click deploy to Vercel, Netlify, or your preferred platform. Production-ready from day one."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent)] animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sticky-header"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-[-2px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Everything You Need to Ship
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-mono tracking-wide">
            Stop building the same features over and over. Focus on your unique value proposition while we handle the foundation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 5
              }}
              className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/30 shadow-[inset_-4px_-4px_12px_rgba(255,255,255,0.8),inset_4px_4px_12px_rgba(0,0,0,0.05),0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[inset_-6px_-6px_16px_rgba(255,255,255,0.9),inset_6px_6px_16px_rgba(0,0,0,0.08),0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-500 transform-gpu"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.1)] text-blue-600 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-mono text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
