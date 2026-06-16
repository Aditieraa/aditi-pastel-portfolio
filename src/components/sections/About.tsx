
export const About = () => {
  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hi! I'm Aditi Haresh Talekar, an IT Engineer passionate about building elegant, AI-powered digital experiences.
                I work across full-stack web, mobile, and machine learning — blending strong technical foundations with creative UI/UX
                to ship products that feel intuitive and intelligent.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-purple-600">Education</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Bachelor of Engineering in Information Technology</h4>
                    <p className="text-gray-600">Datta Meghe College of Engineering, Airoli</p>
                    <p className="text-sm text-gray-500">Aug 2024 – Present • CGPA: 8.56</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Diploma in Information Technology</h4>
                    <p className="text-gray-600">Vidyalankar Polytechnic, Wadala</p>
                    <p className="text-sm text-gray-500">Jun 2021 – Jun 2024 • 89.19%</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">SSC (10th)</h4>
                    <p className="text-gray-600">Sahakar Vidya Prasarak Mandal English Medium Secondary School, Kalwa</p>
                    <p className="text-sm text-gray-500">May 2021 • 88.60%</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/df48652d-a721-4551-aa5b-b936d6619136.png" 
                  alt="Aditi Haresh Talekar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
