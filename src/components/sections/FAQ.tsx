
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "The free trial includes full access to all features for 14 days. No credit card required, no hidden fees. You can invite your team and start using all our tools immediately."
    },
    {
      question: "Can I change plans at any time?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer email support for all plans, with priority support for Professional plans and 24/7 phone support for Enterprise customers. Our support team typically responds within 2-4 hours."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-grade encryption, are SOC 2 Type II compliant, and undergo regular security audits. Your data is stored in secure, redundant data centers with 99.9% uptime."
    },
    {
      question: "Do you offer integrations?",
      answer: "Yes, we integrate with 100+ popular tools including Slack, Google Workspace, Microsoft 365, Salesforce, and more. Enterprise plans include custom integration support."
    },
    {
      question: "What if I need to cancel?",
      answer: "You can cancel anytime with no penalties. Your data will remain accessible for 30 days after cancellation, and we provide easy export options."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about SaasFlow and how it can help your business.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg mb-4 overflow-hidden hover:border-blue-200 transition-colors duration-300"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
