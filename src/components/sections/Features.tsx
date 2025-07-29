
import { Zap, Shield, BarChart3, Users, Workflow, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Performance",
      description: "Experience blazing fast load times with our optimized infrastructure and CDN network."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, SOC 2 compliance, and regular audits."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Get deep insights with real-time analytics and customizable reporting dashboards."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Seamless team workflows with real-time collaboration and permission management."
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Automation Tools",
      description: "Automate repetitive tasks and streamline your workflow with smart automation."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Scale",
      description: "Scale globally with multi-region deployment and 24/7 worldwide support."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-[-2px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Everything You Need to Scale
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-mono tracking-wide">
            Powerful features designed to help your business grow faster and more efficiently than ever before.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-[inset_-2px_-2px_8px_rgba(255,255,255,0.7),inset_2px_2px_8px_rgba(0,0,0,0.1),0_8px_32px_rgba(0,0,0,0.1)] border border-white/50 hover:shadow-[inset_-3px_-3px_10px_rgba(255,255,255,0.8),inset_3px_3px_10px_rgba(0,0,0,0.1),0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 group"
            >
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-mono text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
