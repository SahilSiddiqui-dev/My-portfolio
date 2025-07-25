"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { EyeIcon } from "@heroicons/react/24/outline"

const projects = [
  {
    id: 1,
    title: "Community Notice Board",
    description: "College/community web app for posting and managing announcements",
    tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
    image: "/images/project.png?height=300&width=400&text=Notice+Board",
    liveUrl: "https://sahilsiddiqui-dev.github.io/Community-Notice-board-Website/",
  },
  // Add new projects here following the same structure:
  // {
  //   id: 2,
  //   title: "Your Project Name",
  //   description: "Brief description of your project",
  //   tech: ["Tech1", "Tech2", "Tech3"],
  //   image: "/placeholder.svg?height=300&width=400&text=Your+Project",
  //   liveUrl: "https://your-project-url.com",
  // },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
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
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-text-glow"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Projects That Show My Growth
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each project represents a step in my learning journey, from basic concepts to advanced implementations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/50 glow-rainbow hover-glow-intense"
              whileHover={{
                y: -5,
                scale: 1.01,
              }}
            >
              <div className="relative overflow-hidden">
                <motion.div whileHover={{ scale: 1.2, rotate: 2 }} transition={{ duration: 0.5 }}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>

                {/* Enhanced Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Animated Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-colors glow-purple animate-pulse-glow"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <EyeIcon className="w-4 h-4 animate-wiggle" />🌐 Live Demo
                  </motion.a>
                </div>

                {/* Floating Particles */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <motion.div
                className="p-6"
                whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.05)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                {/* Enhanced Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                      whileHover={{
                        scale: 1.1,
                        y: -2,
                        boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)",
                      }}
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        y: {
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: techIndex * 0.1,
                        },
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Card Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-6 bg-gradient-to-r from-purple-500/10 to-teal-500/10 rounded-2xl border border-primary/20 glow-rainbow animate-pulse-glow"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
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
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              🚧
            </motion.span>
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">More Projects Coming Soon!</h3>
              <p className="text-muted-foreground">
                I'm constantly building and learning. Check back soon for more exciting projects!
              </p>
            </div>
            <motion.span
              className="text-3xl"
              animate={{
                rotate: [0, -10, 10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              ⚡
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
