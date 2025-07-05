import React from 'react';
import { User, Heart, Coffee, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know me better - my journey, passions, and what drives me to create exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-xl backdrop-blur-sm border border-slate-600">
              <div className="flex items-center mb-4">
                <User className="text-blue-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm Yaswanth Kumar Giduthuri, a passionate full-stack developer with 1+ years of experience in creating 
                innovative web and mobile applications. I specialize in modern technologies and have successfully completed 5+ projects 
                ranging from interactive games to security testing platforms.
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-xl backdrop-blur-sm border border-slate-600">
              <div className="flex items-center mb-4">
                <Heart className="text-purple-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-white">What I Love</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm fascinated by the intersection of technology and user experience. Whether it's building interactive games, 
                developing secure web applications, or creating seamless payment solutions, I find joy in solving complex problems 
                through elegant code.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-xl backdrop-blur-sm border border-slate-600">
              <div className="flex items-center mb-4">
                <Code className="text-green-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-white">My Approach</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and creating user-centered applications. My experience spans 
                across web technologies, mobile development with Flutter, and backend systems with Python Flask. 
                Every project is an opportunity to learn and innovate.
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-xl backdrop-blur-sm border border-slate-600">
              <div className="flex items-center mb-4">
                <Coffee className="text-amber-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-white">Beyond Code</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, working on personal projects, 
                or brainstorming innovative solutions. I'm always eager to take on new challenges and contribute 
                to meaningful projects that make a difference.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl backdrop-blur-sm border border-slate-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">1+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">5+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">100%</div>
              <div className="text-gray-400">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;