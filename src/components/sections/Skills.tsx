
export const Skills = () => {
  const skills = [
    { name: "Java", category: "Programming" },
    { name: "Python", category: "Programming" },
    { name: "PHP", category: "Programming" },
    { name: "JavaScript", category: "Programming" },
    { name: "C/C++", category: "Programming" },
    { name: "ReactJS", category: "Frontend" },
    { name: "HTML/CSS", category: "Frontend" },
    { name: "MySQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "SQL", category: "Database" },
    { name: "UI/UX Design", category: "Design" },
    { name: "Graphic Design", category: "Design" },
    { name: "Business Analysis", category: "Business" },
    { name: "Marketing", category: "Business" },
    { name: "Leadership", category: "Soft Skills" },
    { name: "Time Management", category: "Soft Skills" }
  ];

  const categories = ["Programming", "Frontend", "Database", "Design", "Business", "Soft Skills"];
  const categoryColors = {
    "Programming": "from-purple-400 to-purple-600",
    "Frontend": "from-pink-400 to-pink-600",
    "Database": "from-blue-400 to-blue-600",
    "Design": "from-green-400 to-green-600",
    "Business": "from-yellow-400 to-yellow-600",
    "Soft Skills": "from-indigo-400 to-indigo-600"
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="max-w-6xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.filter(skill => skill.category === category).map((skill) => (
                  <div
                    key={skill.name}
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} text-white font-medium hover:scale-105 transition-transform cursor-pointer`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
