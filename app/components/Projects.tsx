"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Filter } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Touring Booking Website",
    description: "Build this website for tour booking and testimonials for a local guide",
    problem: "Needed a professional online presence to showcase about they provide and attract customers",
    tech: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    category: "Basic",
    image: "/images/project2.webp",
    liveDemo: "https://sahilsiddiqui-dev.github.io/demo-touring-page/",
    github: "#",
  },
  {
    id: 2,
    title: "Community Notice Board",
    description: "College/community web app for sharing announcements and events",
    problem: "This is the Project of a students who needed a centralized place to view colony announcements, Buy/Sell/Rent and events",
    tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
    category: "College",
    image: "/images/project1.webp",
    liveDemo: "https://sahilsiddiqui-dev.github.io/Community-Notice-board-Website/",
    github: "#",
  },
  // {
  //   id: 3,
  //   title: "To-Do App",
  //   description: "Task management app with JS and localStorage for persistent data",
  //   problem: "People need a simple way to organize and track their daily tasks",
  //   tech: ["JavaScript", "Local Storage", "CSS3", "HTML5"],
  //   category: "Basic",
  //   image: "/placeholder.svg?height=300&width=500",
  //   liveDemo: "#",
  //   github: "#",
  // },
  // {
  //   id: 4,
  //   title: "Web3 UI Concept Page",
  //   description: "Clean landing page for Web3/crypto idea with modern animations",
  //   problem: "Web3 projects need user-friendly interfaces to attract mainstream adoption",
  //   tech: ["React", "TailwindCSS", "Framer Motion", "Web3 UI"],
  //   category: "Web3",
  //   image: "/placeholder.svg?height=300&width=500",
  //   liveDemo: "#",
  //   github: "#",
  // },
]

const categories = ["All", "Basic", "College"]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleFilter = (category: string) => {
    setActiveFilter(category)
    if (category === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === category))
    }
  }

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Projects That Show My Growth
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each project represents a milestone in my learning journey. From basic HTML/CSS to modern React
            applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-primary to-blue-500 text-white"
                  : "bg-card/50 text-muted-foreground hover:text-foreground border border-border/50"
              }`}
              onClick={() => handleFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4" />
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 gap-8" layout>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card rounded-2xl p-6 group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="bg-card/30 rounded-lg p-4 border border-border/30">
                    <p className="text-sm text-muted-foreground mb-2">Problem Solved:</p>
                    <p className="text-sm text-foreground">{project.problem}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={project.liveDemo}
                      className="flex-1 bg-gradient-to-r from-primary to-blue-500 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />🌐 Live Demo
                    </motion.a>
                    {/* <motion.a
                      href={project.github}
                      className="flex-1 border border-border bg-card/50 text-foreground py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-card transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />💻 GitHub
                    </motion.a> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
