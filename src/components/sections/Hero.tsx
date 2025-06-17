
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "IT Engineer | Creative Technologist | Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-pink-100/50 to-blue-100/50"></div>
      <div className="text-center z-10 animate-fade-in">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center text-6xl font-bold text-purple-600">
            AT
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Hi, I'm Aditi Haresh Talekar
        </h1>
        <div className="text-xl md:text-2xl text-gray-600 mb-8 h-8">
          {text}<span className="animate-pulse">|</span>
        </div>
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="p-3 rounded-full bg-white/50 hover:bg-white/80 transition-all hover:scale-110">
            <Github className="w-6 h-6 text-gray-700" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="p-3 rounded-full bg-white/50 hover:bg-white/80 transition-all hover:scale-110">
            <Linkedin className="w-6 h-6 text-gray-700" />
          </a>
          <a href="mailto:adititalekar2005@gmail.com"
             className="p-3 rounded-full bg-white/50 hover:bg-white/80 transition-all hover:scale-110">
            <Mail className="w-6 h-6 text-gray-700" />
          </a>
        </div>
        <Button 
          onClick={() => window.open("/resume.pdf", "_blank")}
          className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 text-lg"
        >
          Download Resume
        </Button>
      </div>
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-purple-400" />
      </button>
    </section>
  );
};
