import { Button } from "@/components/ui/button";

export const Achievements = () => {
  const achievements = [
    {
      title: "1st Place – HackHive 2025",
      organization: "DMCE (Interdepartmental Hackathon)",
      year: "2025",
      type: "Competition",
      description:
        "Built a Developer Pairing Platform in an 8-hour interdepartmental hackathon. Won ₹3,000 cash prize.",
      icon: "🥇",
    },
    {
      title: "1st Place – Institute-Level Hackathon",
      organization: "Vidyalankar Polytechnic",
      year: "2023",
      type: "Competition",
      description:
        "Developed a dynamic college website and won first place. Awarded ₹6,000 cash prize.",
      icon: "🥇",
    },
    {
      title: "2nd Place – Code Crafters 3.0 (24-Hour Hackathon)",
      organization: "SCOE",
      year: "2025",
      type: "Competition",
      description:
        "Built Rootly, an AI-driven EdTech platform. Awarded ₹10,000 cash prize.",
      icon: "🥈",
    },
    {
      title: "2nd Place – Electrowiz 2026",
      organization: "DMCE Airoli (National Level Project Competition)",
      year: "2026",
      type: "Competition",
      description:
        "Built an observatory with integrated IoT. Awarded ₹700 cash prize.",
      icon: "🥈",
    },
    {
      title: "3rd Place – TechVanza Hackathon",
      organization: "SVKM's Usha Pravin Gandhi College",
      year: "2025",
      type: "Competition",
      description:
        "Developed RapidReach, an AI/ML last-mile navigation solution. Awarded ₹2,000 cash prize.",
      icon: "🥉",
    },
    {
      title: "Learn Generative AI",
      organization: "EduBridge (with Capgemini & SAP)",
      year: "2025",
      type: "Certificate",
      description: "Generative AI concepts, tools, and real-world applications.",
      icon: "📜",
    },
    {
      title: "AWS Academy: Cloud Security Foundations",
      organization: "AWS Academy",
      year: "2024",
      type: "Certificate",
      description: "IAM, data protection, encryption, and cloud monitoring fundamentals.",
      icon: "📜",
    },
    {
      title: "The Complete Python Developer Course",
      organization: "Udemy",
      year: "2024",
      type: "Certificate",
      description: "Comprehensive Python development and coding skills.",
      icon: "📜",
    },
    {
      title: "Advanced Python Projects: Build AI Applications",
      organization: "LinkedIn Learning",
      year: "2024",
      type: "Certificate",
      description: "Python programming and AI application development.",
      icon: "📜",
    },
  ];

  const typeColors = {
    Competition: "from-yellow-400 to-orange-400",
    Certificate: "from-blue-400 to-purple-400",
    Project: "from-green-400 to-teal-400",
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Achievements & Certifications
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-purple-100 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${typeColors[achievement.type as keyof typeof typeColors]}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded-full text-white bg-gradient-to-r ${typeColors[achievement.type as keyof typeof typeColors]}`}>
                        {achievement.type}
                      </span>
                      <div className="text-sm text-gray-500 mt-1">{achievement.year}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-purple-600 font-medium mb-3">{achievement.organization}</p>
                  <p className="text-gray-600 text-sm mb-4">{achievement.description}</p>
                  <Button variant="outline" size="sm" className="text-purple-600 border-purple-200 w-full">
                    {achievement.type === "Certificate" ? "View Certificate" : "View Details"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
