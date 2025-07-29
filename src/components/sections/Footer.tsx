
import { Zap } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "API", "Security"],
    Company: ["About", "Blog", "Careers", "Partners"],
    Resources: ["Help Center", "Community", "Status"],
    Legal: ["Privacy", "Terms", "Licenses", "Contact"]
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand - matching header */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.1),inset_2px_2px_6px_rgba(0,0,0,0.3)] mr-3 flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl font-bold bg-gradient-to-br from-blue-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  SB
                </span>
              </div>
              <span className="text-2xl font-bold text-white tracking-[-1px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                SaasBoost
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md font-mono text-sm tracking-wide">
              The all-in-one AI-powered platform that helps businesses scale efficiently with automation and enterprise-grade security.
            </p>
          </div>
          
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors font-mono text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 font-mono">
              © 2025 SaasBoost. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-mono">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-mono">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
