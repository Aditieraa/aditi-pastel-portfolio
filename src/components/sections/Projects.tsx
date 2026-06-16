import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Rootly",
      description:
        "AI-powered personalized EdTech platform with structured roadmaps, AI tutoring, quizzes, progress tracking, and tailored learning recommendations.",
      tech: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Supabase", "Gemini", "Groq"],
      type: "AI / EdTech",
    },
    {
      title: "AI Interview Bot",
      description:
        "AI-powered candidate assessment and mock interview platform that conducts voice-based interviews, evaluates responses against job requirements, and generates automated feedback reports.",
      tech: ["React", "Flask", "Supabase", "Groq Llama-3.3", "Web Speech API"],
      type: "AI Platform",
    },
    {
      title: "RapidReach",
      description:
        "AI-powered last-mile navigation platform that converts vague addresses into precise coordinates using NLP, multilingual voice support, visual intelligence, and a 7-step fallback system.",
      tech: ["React", "Flask", "Llama 3.3", "NLTK", "OpenStreetMap"],
      type: "AI / NLP",
    },
    {
      title: "Real-Time AI Fitness Trainer",
      description:
        "AI-powered desktop app that tracks workout posture, counts reps, and gives real-time form feedback for squats, planks, and push-ups.",
      tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
      type: "AI Project",
    },
    {
      title: "FarmIQ Soil Guardian",
      description:
        "Industry-guided IoT project to monitor and analyze soil health using sensors for optimized farming.",
      company: "Vision InfoTech",
      tech: ["IoT", "Arduino", "Python", "Data Analytics"],
      type: "Industry Project",
    },
    {
      title: "Developer Pairing Platform",
      description:
        "Hackathon-winning full-stack platform that matches developers for collaboration with real-time chat, project boards, and smart filtering.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      type: "Web App",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-purple-100 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                <div className="text-6xl opacity-50">💻</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                    {project.type}
                  </span>
                </div>
                {project.company && (
                  <p className="text-sm text-purple-600 mb-2">@ {project.company}</p>
                )}
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-purple-600 border-purple-200">
                    View Code
                  </Button>
                  {project.type !== "Industry Project" && (
                    <Button size="sm" className="bg-gradient-to-r from-purple-400 to-pink-400 text-white">
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
