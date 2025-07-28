"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: "✅", color: "from-orange-500 to-red-500" },
  { name: "CSS3", icon: "🎨", color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", icon: "⚙️", color: "from-yellow-500 to-orange-500" },
  { name: "TailwindCSS", icon: "🌪️", color: "from-teal-500 to-blue-500" },
  { name: "GitHub", icon: "🐱", color: "from-gray-500 to-gray-700" },
  { name: "React", icon: "📚", color: "from-blue-400 to-blue-600", learning: true },
  { name: "Solidity", icon: "📚", color: "from-purple-500 to-pink-500", learning: true },
  { name: "Blockchain", icon: "📚", color: "from-green-500 to-teal-500", learning: true },
];

const learningTech = ["Next.js", "TypeScript", "Web3.js", "Smart Contracts", "DeFi"];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Skills & Tech Stack
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I use and currently learning more
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 border border-border/50 rounded-2xl p-6 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-center space-y-3">
                <div className="text-4xl">{skill.icon}</div>
                <h3 className="text-xl font-bold text-foreground">{skill.name}</h3>
                {skill.learning && (
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">
                    Learning
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-3 text-foreground">Always Learning</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              I'm constantly learning and exploring new Web3 technologies. Here's what I'm diving into now:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {learningTech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
