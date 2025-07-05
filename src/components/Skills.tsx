import React from 'react';
import { Code, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "Flutter", level: 80 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      skills: [
        { name: "Python", level: 85 },
        { name: "Flask", level: 80 },
        { name: "SQL", level: 75 },
        { name: "API Development", level: 80 }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Frameworks & Tools",
      skills: [
        { name: "Flutter", level: 85 },
        { name: "Python Flask", level: 80 },
        { name: "Git", level: 90 },
        { name: "Payment Gateways", level: 75 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Specialized Skills",
      skills: [
        { name: "Web Security", level: 80 },
        { name: "Game Development", level: 75 },
        { name: "Mobile Development", level: 85 },
        { name: "Full Stack Development", level: 85 }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const SkillBar = ({ skill, color }: { skill: { name: string; level: number }, color: string }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise, built through hands-on experience and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: <Smartphone />, title: "Mobile First", desc: "Flutter & responsive design" },
            { icon: <Zap />, title: "Performance", desc: "Optimized & fast applications" },
            { icon: <Code />, title: "Clean Code", desc: "Maintainable & scalable solutions" },
            { icon: <Globe />, title: "Full Stack", desc: "End-to-end development" }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-6 rounded-xl hover:from-slate-600 hover:to-slate-500 transition-all duration-300 transform hover:scale-105 border border-slate-500">
                <div className="text-blue-400 mb-4 flex justify-center group-hover:text-purple-400 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-xl backdrop-blur-sm border border-slate-600">
              <div className="flex items-center mb-6">
                <div className={`text-white mr-4 p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} color={category.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;