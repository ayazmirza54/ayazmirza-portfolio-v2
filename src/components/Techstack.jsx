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
      <div className="text-4xl font-extrabold capitalize mb-8">Tech Stack</div>
      
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
            <h3 className="text-2xl font-bold text-gray-300">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techs.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-700 rounded-lg p-4 hover:border-gray-500 transition-all bg-black/50 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="font-medium text-gray-300">{tech.name}</span>
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
