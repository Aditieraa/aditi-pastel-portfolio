
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "FarmIQ Soil Guardian",
      description: "Industry-guided IoT project to analyze soil conditions using advanced sensors and data analytics.",
      company: "Vision InfoTech",
      tech: ["IoT", "Python", "Data Analytics"],
      type: "Industry Project"
    },
    {
      title: "PharmaFlow App",
      description: "Online medicine delivery application with user-friendly interface and secure payment integration.",
      tech: ["Java", "Android", "Firebase"],
      type: "Mobile App"
    },
    {
      title: "Developer Pairing App",
      description: "Full-stack matchmaking platform for coders featuring real-time chat, project boards, and filtering.",
      tech: ["React", "Node.js", "Socket.io"],
      type: "Web App"
    },
    {
      title: "Productivity Dashboard",
      description: "Streamlit-based task manager with Pomodoro timer, book/blog lists, and analytics.",
      tech: ["Python", "Streamlit", "SQLite"],
      type: "Web App"
    },
    {
      title: "Gesture-Controlled Drawing Canvas",
      description: "Draw using hand gestures with Python, OpenCV, and MediaPipe for real-time tracking.",
      tech: ["Python", "OpenCV", "MediaPipe"],
      type: "AI Project"
    },
    {
      title: "AI Fitness Trainer",
      description: "Real-time form correction using OpenCV and pose detection for proper exercise execution.",
      tech: ["Python", "OpenCV", "AI/ML"],
      type: "AI Project"
    }
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
                  <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
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
