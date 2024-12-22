import React from 'react';
import { motion } from 'framer-motion';

const Techstack = () => {
  const technologies = {
    "Languages": [
      { name: "JavaScript", icon: "⚡" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "Markdown", icon: "📝" },
      { name: "Shell Script", icon: "💻" },
      { name: "C++", icon: "⚙️" },
      { name: "C", icon: "🔧" },
    ],
    "Frameworks & Libraries": [
      { name: "React", icon: "⚛️" },
      { name: "React Router", icon: "🛣️" },
      { name: "Express.js", icon: "🚂" },
      { name: "Node.js", icon: "📦" },
      { name: "Bootstrap", icon: "🎯" },
      { name: "TailwindCSS", icon: "💨" },
      { name: "Bootstrap", icon: "🅱️" },
    ],
    "Databases": [
      { name: "MySQL", icon: "🗄️" },
      { name: "PostgreSQL", icon: "🐘" },
    ],
    "Tools & Platforms": [
      { name: "Canva", icon: "🎨" },
      { name: "Figma", icon: "🎯" },
      { name: "Ansible", icon: "🔄" },
      { name: "Notion", icon: "📓" },
      { name: "Git", icon: "🔄" },
      { name: "Ab Initio ETL tool", icon: "🏭" },
      { name: "Power BI", icon: "📊" },
      { name: "Grafana", icon: "📈" },
      { name: "Control Center", icon: "🔄" },
      { name: "Gemini AI", icon: "🤖" },
      { name: "Claude AI", icon: "🤖" },
      { name: "OpenAI ChatGPT", icon: "🤖" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div id="tech-stack" className="portfolio-container">
      <div className="text-2xl md:text-4xl font-extrabold capitalize mb-8"><h1>Tech Stack</h1></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-8"
      >
        {Object.entries(technologies).map(([category, techs]) => (
          <motion.div
            key={category}
            variants={itemVariants}
            className="space-y-4"
          >
            <h1 className="text-xl font-bold">{category}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techs.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300 overflow-hidden"
                >
                  <div className="bg-black rounded-lg p-4 h-full">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-medium text-gray-300">{tech.name}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Techstack;
