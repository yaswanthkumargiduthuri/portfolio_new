import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-400">Yaswanth</span> Kumar
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full-stack developer passionate about creating innovative digital solutions. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yaswanthkumargiduthuri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/hari-giduthuri-6a1848332/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:harigiduthuri032@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>harigiduthuri032@gmail.com</p>
              <p>+91 7396923432</p>
              <p>Visakhapatnam, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>&copy; {currentYear} Yaswanth Kumar Giduthuri. Made with</span>
            <Heart className="text-red-400" size={16} />
            <span>and passion for code</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;