import { Button } from "@/components/ui/button";

export const Experience = () => {
  const experiences = [
    {
      company: "Ross Warner HR Solutions",
      position: "AI/ML and Business Development Executive Intern",
      duration: "Dec 2025 – Jan 2026",
      type: "AI/ML & Business Development",
      description:
        "Built an AI-powered recruitment platform with CV screening, JD generation, and AI pre-screening interviews. Deployed a full-stack web app to streamline hiring workflows, designed an internal dashboard for real-time team tracking, and managed multiple client leads to drive business growth.",
      skills: ["AI/ML", "Full-Stack Development", "Dashboard Design", "Lead Generation"],
    },
    {
      company: "Vision InfoTech",
      position: "IoT & Smart Agriculture Project Intern",
      duration: "Mar 2024 – Apr 2024",
      type: "IoT & Smart Agriculture",
      description:
        "Completed an industry-guided project titled FarmIQ Soil Guardian — an IoT-based system to monitor and analyze soil health for optimized farming.",
      skills: ["IoT", "Arduino", "Data Analytics", "Smart Agriculture"],
    },
    {
      company: "Vision InfoTech",
      position: "SDE Intern",
      duration: "Jun 2023 – Jul 2023",
      type: "Software Development",
      description:
        "Built a Java desktop app for an ISP to manage customer registration, billing, and service plans. Designed user-friendly UIs using Java Swing and optimized MySQL databases for efficient data handling.",
      skills: ["Java", "Java Swing", "MySQL", "Desktop App Development"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12">
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <div className="ml-16 bg-gradient-to-br from-white/80 to-purple-50/50 p-6 rounded-xl shadow-lg border border-purple-100 w-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                      <p className="text-purple-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.type}</p>
                    </div>
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="text-purple-600 border-purple-200">
                    View Certificate
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
