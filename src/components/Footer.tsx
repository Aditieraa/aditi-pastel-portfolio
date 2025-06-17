
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Aditi Haresh Talekar</h3>
          <p className="text-purple-200 mb-6">IT Engineer | Creative Technologist | Developer</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:adititalekar2005@gmail.com"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="border-t border-white/20 pt-6">
            <p className="text-purple-200">
              © 2024 Aditi Haresh Talekar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
