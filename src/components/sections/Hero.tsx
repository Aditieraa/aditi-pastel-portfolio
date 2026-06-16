import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "IT Engineer | AI/ML Developer | Full-Stack Builder";
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/60 via-pink-100/60 to-blue-100/60" />
      {/* Floating blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="text-center z-10 animate-fade-in px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-scale-in">
          Hi, I'm Aditi Talekar
        </h1>
        <div className="text-xl md:text-2xl text-gray-600 mb-8 h-8">
          {text}<span className="animate-pulse">|</span>
        </div>
        <div className="flex justify-center space-x-6 mb-12">
          {[
            { href: "https://github.com/Aditieraa", Icon: Github },
            { href: "https://www.linkedin.com/in/aditi-talekar-27a142262/", Icon: Linkedin },
            { href: "mailto:adititalekar2005@gmail.com", Icon: Mail },
          ].map(({ href, Icon }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/60 backdrop-blur hover:bg-white shadow-md hover:shadow-xl transition-all hover:scale-125 hover:-translate-y-1 duration-300"
            >
              <Icon className="w-6 h-6 text-gray-700" />
            </a>
          ))}
        </div>
        <a href={resumeAsset.url} download="Aditi_Talekar_Resume.pdf">
          <Button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Download Resume
          </Button>
        </a>
      </div>
      <button onClick={scrollToAbout} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-purple-400" />
      </button>
    </section>
  );
};
