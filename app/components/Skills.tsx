"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "HTML5", icon: "✅", color: "from-orange-500 to-red-500" },
  { name: "CSS3", icon: "🎨", color: "from-blue-500 to-purple-500" },
  { name: "JavaScript", icon: "⚙️", color: "from-yellow-500 to-orange-500" },
  { name: "TailwindCSS", icon: "🌪️", color: "from-teal-500 to-blue-500" },
  { name: "GitHub", icon: "🐱", color: "from-gray-500 to-gray-700" },
  { name: "React", icon: "📚", color: "from-blue-400 to-cyan-400", learning: true },
  { name: "Solidity", icon: "📚", color: "from-purple-500 to-pink-500", learning: true },
  { name: "Blockchain", icon: "📚", color: "from-green-500 to-teal-500", learning: true },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-text-glow">Skills & Tech Stack</h2>
          <p className="text-lg text-muted-foreground">Technologies I work with and currently learning</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative p-6 bg-background border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg glow-rainbow hover-glow-intense"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.02 }}
            >
              {/* Reduced Floating Animation for Icons */}
              <motion.div
                className="text-4xl mb-4 inline-block"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                }}
              >
                {skill.icon}
              </motion.div>

              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <span>{skill.name}</span>
                {skill.learning && (
                  <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">Learning</span>
                )}
              </h3>

              {/* Simplified Hover Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
              />
            </motion.div>
          ))}
        </div>

        {/* Enhanced Learning Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500/10 to-teal-500/10 rounded-full border border-primary/20 glow-rainbow animate-pulse-glow"
            whileHover={{
              scale: 1.05,
              rotate: [0, 1, -1, 0],
            }}
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          >
            <motion.span
              className="text-3xl"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              🚀
            </motion.span>
            <span className="text-foreground font-medium text-lg animate-text-glow">
              Always learning, always growing!
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
