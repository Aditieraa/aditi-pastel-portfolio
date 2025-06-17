
export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Full-stack responsive websites with modern technologies",
      icon: "🌐"
    },
    {
      title: "Mobile App Development",
      description: "Android applications using Java and modern frameworks",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "Creative and user-centric interfaces that delight users",
      icon: "🎨"
    },
    {
      title: "Business Analysis",
      description: "Insightful market research and strategic solutions",
      icon: "📊"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-white/80 to-purple-50/50 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-purple-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
