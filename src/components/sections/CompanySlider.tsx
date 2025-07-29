
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CompanySlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const companies = [
    "Microsoft", "Google", "Apple", "Meta", "Netflix", "Spotify", 
    "Stripe", "Shopify", "Notion", "Figma", "Slack", "Discord",
    "OpenAI", "GitHub", "Vercel", "Supabase"
  ];

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const slideWidth = slider.scrollWidth / 2;
      
      gsap.set(slider, { x: 0 });
      gsap.to(slider, {
        x: -slideWidth,
        duration: 30,
        ease: "none",
        repeat: -1
      });
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white border-b border-gray-200/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-500 mb-4 font-mono text-xs tracking-widest uppercase">
            Trusted by 50,000+ companies worldwide
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="flex overflow-hidden mask-gradient">
            <div 
              ref={sliderRef}
              className="flex gap-16 items-center whitespace-nowrap"
              style={{ width: 'fit-content' }}
            >
              {/* First set */}
              {companies.map((company, index) => (
                <div
                  key={`first-${company}-${index}`}
                  className="text-gray-400 font-semibold text-xl hover:text-gray-600 transition-colors duration-300 px-4"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {company}
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => (
                <div
                  key={`second-${company}-${index}`}
                  className="text-gray-400 font-semibold text-xl hover:text-gray-600 transition-colors duration-300 px-4"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .mask-gradient {
            -webkit-mask: linear-gradient(90deg, transparent, black 20%, black 80%, transparent);
            mask: linear-gradient(90deg, transparent, black 20%, black 80%, transparent);
          }
        `
      }} />
    </section>
  );
};

export default CompanySlider;
