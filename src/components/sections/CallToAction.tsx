
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-[-2px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Ready to Launch Your SaaS?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-mono tracking-wide">
            Join 500+ builders who've already shipped their SaaS using our battle-tested template.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Get Your Template Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-white/5 hover:text-white transition-all duration-300">
              View Live Demo
            </Button>
          </div>
          
          <p className="text-white/70 text-sm font-mono">
            ✓ Instant access ✓ Full source code ✓ Lifetime updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
