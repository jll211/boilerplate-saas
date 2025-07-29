
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      content: "SaasBoost transformed our entire workflow. We've seen a 300% increase in productivity since implementing their platform.",
      author: "Sarah Chen",
      role: "CEO, TechStart",
      rating: 5
    },
    {
      content: "The automation features saved us countless hours. Our team can now focus on what really matters - growing our business.",
      author: "Michael Rodriguez",
      role: "Operations Director, ScaleUp",
      rating: 5
    },
    {
      content: "Best investment we've made this year. The ROI was evident within the first month of usage.",
      author: "Emily Johnson",
      role: "Founder, InnovateNow",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-[-2px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Loved by Thousands
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-mono tracking-wide">
            See what our customers are saying about their experience with SaasBoost.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50/70 backdrop-blur-sm p-8 rounded-3xl shadow-[inset_-4px_-4px_12px_rgba(255,255,255,0.8),inset_4px_4px_12px_rgba(0,0,0,0.1),0_8px_32px_rgba(0,0,0,0.1)] border border-gray-200/30 hover:shadow-[inset_-5px_-5px_15px_rgba(255,255,255,0.9),inset_5px_5px_15px_rgba(0,0,0,0.1),0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-8 text-base leading-relaxed font-mono">
                "{testimonial.content}"
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {testimonial.author}
                </div>
                <div className="text-gray-500 text-sm font-mono tracking-wide">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
