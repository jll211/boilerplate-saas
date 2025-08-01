
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Import images as modules (removed Microsoft and WeTransfer)
import stripeLogo from "/Stripe_Logo,_revised_2016.jpeg";
import vercelLogo from "/Vercel_logo_black.svg.png";
import supabaseLogo from "/supabase.png";
import netlifyLogo from "/Netlify_logo.svg.png";
import gitlabLogo from "/GitLab_logo.svg.png";
import productHuntLogo from "/Product_Hunt_Logo.svg.png";
import resendLogo from "/resend-logo-footer.jpeg";

const CompanySlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const companies = [
    { name: "Stripe", logo: stripeLogo },
    { name: "Vercel", logo: vercelLogo },
    { name: "Supabase", logo: supabaseLogo },
    { name: "Netlify", logo: netlifyLogo },
    { name: "GitLab", logo: gitlabLogo },
    { name: "Product Hunt", logo: productHuntLogo },
    { name: "Resend", logo: resendLogo }
  ];

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const slideWidth = slider.scrollWidth / 2;
      
      gsap.set(slider, { x: 0 });
      gsap.to(slider, {
        x: -slideWidth,
        duration: 40,
        ease: "none",
        repeat: -1
      });
    }
  }, []);

  return (
    <section className="pt-4 pb-8 bg-gradient-to-b from-gray-100 to-white border-b border-gray-200/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-gray-500 mb-4 font-mono text-xs tracking-widest uppercase">
            Trusted by 50,000+ companies worldwide
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="flex overflow-hidden mask-gradient">
            <div 
              ref={sliderRef}
              className="flex gap-20 items-center whitespace-nowrap"
              style={{ width: 'fit-content' }}
            >
              {/* First set */}
              {companies.map((company, index) => (
                <div
                  key={`first-${company.name}-${index}`}
                  className="flex items-center justify-center hover:scale-110 transition-transform duration-300 px-4 min-w-[120px]"
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-12 w-auto max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                    onError={(e) => {
                      console.error(`Failed to load image for ${company.name}`);
                      // Show fallback text if image fails
                      const target = e.currentTarget;
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-gray-400 font-semibold text-lg">${company.name}</span>`;
                      }
                    }}
                    onLoad={() => {
                      console.log(`Successfully loaded: ${company.name}`);
                    }}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => (
                <div
                  key={`second-${company.name}-${index}`}
                  className="flex items-center justify-center hover:scale-110 transition-transform duration-300 px-4 min-w-[120px]"
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-12 w-auto max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                    onError={(e) => {
                      console.error(`Failed to load image for ${company.name}`);
                      // Show fallback text if image fails
                      const target = e.currentTarget;
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-gray-400 font-semibold text-lg">${company.name}</span>`;
                      }
                    }}
                  />
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
