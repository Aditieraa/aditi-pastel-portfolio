export const Skills = () => {
  const skills = [
    { name: "JavaScript (ES6+)", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "C++", category: "Languages" },

    { name: "React.js", category: "Frameworks & Libraries" },
    { name: "Next.js (SSR/SSG)", category: "Frameworks & Libraries" },
    { name: "Three.js", category: "Frameworks & Libraries" },
    { name: "D3.js", category: "Frameworks & Libraries" },
    { name: "Flutter", category: "Frameworks & Libraries" },
    { name: "HTML5", category: "Frameworks & Libraries" },

    { name: "Tailwind CSS", category: "UI / Styling" },
    { name: "CSS Modules", category: "UI / Styling" },
    { name: "Styled Components", category: "UI / Styling" },
    { name: "Bootstrap", category: "UI / Styling" },

    { name: "Machine Learning", category: "AI / Machine Learning" },
    { name: "Deep Learning", category: "AI / Machine Learning" },
    { name: "NLP", category: "AI / Machine Learning" },
    { name: "LLM Integration", category: "AI / Machine Learning" },
    { name: "Prompt Engineering", category: "AI / Machine Learning" },
    { name: "AI-Powered Web & Mobile Apps", category: "AI / Machine Learning" },

    { name: "MySQL", category: "Databases" },
    { name: "MongoDB", category: "Databases" },
    { name: "Supabase", category: "Databases" },
    { name: "SQL", category: "Databases" },

    { name: "Git", category: "Tools & Platforms" },
    { name: "GitHub", category: "Tools & Platforms" },
    { name: "GitLab", category: "Tools & Platforms" },
    { name: "Docker", category: "Tools & Platforms" },
    { name: "Firebase", category: "Tools & Platforms" },
    { name: "Postman", category: "Tools & Platforms" },
    { name: "Vercel", category: "Tools & Platforms" },
    { name: "Render", category: "Tools & Platforms" },
    { name: "Linux", category: "Tools & Platforms" },
    { name: "Arduino (IoT)", category: "Tools & Platforms" },
    { name: "Power BI", category: "Tools & Platforms" },
    { name: "Tableau", category: "Tools & Platforms" },
    { name: "Jupyter Notebook", category: "Tools & Platforms" },
  ];

  const categories = [
    "Languages",
    "Frameworks & Libraries",
    "UI / Styling",
    "AI / Machine Learning",
    "Databases",
    "Tools & Platforms",
  ];
  const categoryColors: Record<string, string> = {
    "Languages": "from-purple-400 to-purple-600",
    "Frameworks & Libraries": "from-pink-400 to-pink-600",
    "UI / Styling": "from-rose-400 to-rose-600",
    "AI / Machine Learning": "from-indigo-400 to-indigo-600",
    "Databases": "from-blue-400 to-blue-600",
    "Tools & Platforms": "from-teal-400 to-teal-600",
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
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${categoryColors[category]} text-white font-medium hover:scale-105 transition-transform cursor-pointer`}
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
