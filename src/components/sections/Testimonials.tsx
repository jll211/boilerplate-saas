
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      content: "SaasFlow transformed our entire workflow. We've seen a 300% increase in productivity since implementing their platform.",
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

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers are saying about their experience with SaasFlow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
