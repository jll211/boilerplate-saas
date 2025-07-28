
const Social = () => {
  const companies = [
    "TechCorp", "InnovateCo", "FutureBuilders", "NextGen", "ScaleTech", "CloudFirst"
  ];

  return (
    <section className="py-16 bg-white border-b">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 mb-8 text-sm font-medium">
          Trusted by 50,000+ companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <div
              key={company}
              className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
