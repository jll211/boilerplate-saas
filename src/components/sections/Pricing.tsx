
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Starter Template",
      price: "99",
      period: "one-time",
      description: "Perfect for indie hackers and solo builders",
      features: [
        "Complete SaaS boilerplate",
        "Auth & user management", 
        "Stripe integration",
        "Admin dashboard",
        "Database schema",
        "6 months updates",
        "Discord community"
      ],
      popular: false
    },
    {
      name: "Pro Template",
      price: "199",
      period: "one-time",
      description: "Best for serious builders and small teams",
      features: [
        "Everything in Starter",
        "Advanced components",
        "Multi-tenant support",
        "Email templates",
        "API documentation",
        "Lifetime updates",
        "Priority support",
        "1-on-1 setup call"
      ],
      popular: true
    },
    {
      name: "Agency License",
      price: "499",
      period: "one-time",
      description: "For agencies building client projects",
      features: [
        "Everything in Pro",
        "White-label rights",
        "Unlimited client projects",
        "Custom branding",
        "Advanced integrations",
        "Reseller license",
        "Dedicated support",
        "Custom development"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 relative">
      <motion.div
        className="absolute inset-0"
        style={{
          transform: "translateY(var(--scroll-y, 0) * 0.5)"
        }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sticky-header"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-[-2px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Skip Months of Development
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-mono tracking-wide">
            One-time payment. Lifetime access. Start building your SaaS today instead of spending months on boilerplate.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-white/70 backdrop-blur-sm p-8 rounded-3xl border-2 transition-all duration-300 shadow-[inset_-2px_-2px_8px_rgba(255,255,255,0.7),inset_2px_2px_8px_rgba(0,0,0,0.1),0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[inset_-3px_-3px_10px_rgba(255,255,255,0.8),inset_3px_3px_10px_rgba(0,0,0,0.1),0_12px_40px_rgba(0,0,0,0.15)] ${
                plan.popular
                  ? "border-blue-500 scale-105 relative"
                  : "border-gray-200/30 hover:border-blue-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold font-mono">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>{plan.name}</h3>
                <p className="text-gray-600 mb-4 font-mono text-sm">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>${plan.price}</span>
                  <span className="text-gray-600 ml-2 font-mono">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-mono text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full py-3 font-semibold transition-all duration-300 rounded-2xl ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                Get Template Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 font-mono">
            All templates include full source code and documentation. No recurring fees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
