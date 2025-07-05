import React from 'react';
import { ExternalLink, Github, Eye, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Task Tracker",
      description: "A comprehensive task management application built with HTML, CSS, Flutter, and Firebase. Features real-time data synchronization, user authentication, and intuitive task organization for enhanced productivity.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "Flutter", "Firebase"],
      github: "https://github.com/yaswanthkumargiduthuri/long-stride-tracker",
      live: "https://daily-tracks.lovable.app/",
      featured: true
    },
    {
      id: 2,
      title: "Group Matching Game",
      description: "An interactive group matching game built with Flutter, HTML, CSS, and JavaScript. Features engaging gameplay mechanics and responsive design for seamless user experience across devices.",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/yaswanthkumargiduthuri",
      live: "https://karthik143.vercel.app/",
      featured: true
    },
    {
      id: 3,
      title: "Web Security Testing Academy",
      description: "An interactive web security laboratory for learning and practicing cybersecurity concepts. Built with HTML, CSS, JavaScript, and SQL to provide hands-on security testing experience.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "SQL"],
      github: "https://github.com/yaswanthkumargiduthuri",
      live: "https://yg-36.lovable.app/",
      featured: true
    },
    {
      id: 4,
      title: "PhonePe Payment Link Generator",
      description: "A mobile-first payment link generator using PhonePe gateway integration. Built with HTML, CSS, and Flutter for seamless mobile payment experiences.",
      image: "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "Flutter", "PhonePe Gateway"],
      github: "https://github.com/yaswanthkumargiduthuri",
      live: "https://preview--flutter-paylink-creator.lovable.app/",
      featured: false,
      mobileOnly: true
    }
  ];

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <div className={`group relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 ${
      project.featured ? 'md:col-span-2' : ''
    }`}>
      <div className="aspect-video overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/90 text-white p-2 rounded-full hover:bg-slate-700 transition-colors duration-200"
            >
              <Github size={16} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600/90 text-white p-2 rounded-full hover:bg-blue-500 transition-colors duration-200"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
        {project.mobileOnly && (
          <div className="absolute top-4 left-4 bg-orange-600/90 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
            <Smartphone size={14} />
            <span>Mobile Only</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
            {project.title}
          </h3>
          {project.featured && (
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        {project.mobileOnly && (
          <div className="mb-3">
            <span className="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium border border-orange-600/30">
              📱 Only Available on Mobile
            </span>
          </div>
        )}
        
        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="bg-slate-700 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Github size={16} className="mr-2" />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <Eye size={16} className="mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work demonstrating expertise in full-stack development, mobile applications, and innovative digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/yaswanthkumargiduthuri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <Github className="mr-2" size={20} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;