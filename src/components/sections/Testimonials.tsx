
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      content: "LovableSaaS transformed our entire workflow. We've seen a 300% increase in productivity since implementing their platform.",
      author: "Sarah Chen",
      role: "CTO, TechFlow Inc.",
      avatar: "/placeholder.svg"
    },
    {
      content: "The best investment we've made for our startup. The time saved on development is incredible.",
      author: "Michael Rodriguez",
      role: "Founder, StartupLab",
      avatar: "/placeholder.svg"
    },
    {
      content: "Clean code, excellent documentation, and amazing support. Exactly what we needed.",
      author: "Emily Watson",
      role: "Lead Developer, CloudTech",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-[-2px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Loved by Developers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-mono tracking-wide">
            See what our customers are saying about their experience with LovableSaaS.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_16px_60px_rgb(0,0,0,0.12)] transition-all duration-500 border border-gray-100 h-full flex flex-col group-hover:border-gray-200">
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow font-mono text-sm tracking-wide">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-500 text-sm font-mono">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
