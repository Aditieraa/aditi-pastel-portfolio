
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Aditi
          </div>
          <div className="hidden md:flex space-x-8">
            {["home", "about", "skills", "services", "projects", "experience", "achievements", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-purple-400 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>
          <a href={resumeAsset.url} download="Aditi_Talekar_Resume.pdf">
            <Button
              className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white hover:scale-105 transition-transform"
            >
              Resume
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};
