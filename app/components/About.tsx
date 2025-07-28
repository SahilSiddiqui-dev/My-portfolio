"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Code, Heart, Zap, Target, Globe, BookOpen } from "lucide-react"

const highlights = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Clean Code",
    description: "I write readable, maintainable code that follows best practices",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Learner",
    description: "I quickly adapt to new technologies and frameworks",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Passionate",
    description: "Every project is built with genuine care and attention to detail",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" ref={ref} className="section-padding bg-background/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="floating-shape w-96 h-96 top-10 -right-20 opacity-20" style={{ animationDelay: "1s" }} />
      <div className="floating-shape w-64 h-64 bottom-20 -left-10 opacity-15" style={{ animationDelay: "3s" }} />

      <div className="mx-auto max-w-7xl relative z-10">
        {isInView && (
          <>
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 relative inline-block group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-gradient bg-gradient-to-r from-primary via-blue-500 to-green-400 bg-clip-text text-transparent">
                  About Me
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/20 to-green-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ zIndex: -1 }}
                />
              </motion.h2>
              <motion.p
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Get to know the person behind the code
              </motion.p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Profile Image */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative">
                    <div className="glow-border">
                      <Image
                        src="/images/Profile.webp"
                        alt="Sahil Siddiqui - Web Developer"
                        width={200}
                        height={200}
                        className="rounded-2xl object-cover"
                        priority
                      />
                    </div>
                    <motion.div
                      className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      🇮🇳 From India
                    </motion.div>
                  </div>
                </div>

                {/* Bio */}
                <motion.div
                  className="project-card rounded-2xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Globe className="w-6 h-6 text-primary" />
                    Hi, I'm Sahil! 👋
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a{" "}
                      <span className="text-primary font-semibold">college student and freelance web developer</span> from
                      India with a genuine passion for creating beautiful, functional websites. What started as curiosity
                      in 2024 has quickly become my obsession!
                    </p>
                    <p>
                      I believe in{" "}
                      <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-semibold">
                        honest work, continuous learning, and delivering quality
                      </span>{" "}
                      - even as a beginner.
                    </p>
                    <p>
                      When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                      projects, or helping fellow students with their web development questions.
                    </p>
                  </div>
                </motion.div>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.title}
                      className="bg-card/30 backdrop-blur-sm rounded-xl p-4 border border-border/30 hover:border-primary/50 transition-all duration-300 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-primary mb-2 flex justify-center">{highlight.icon}</div>
                      <h4 className="font-semibold text-foreground mb-1">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Learning Journey */}
                <motion.div
                  className="project-card rounded-2xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-primary" />
                    My Learning Journey
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        year: "2024 - The Beginning",
                        desc: "Started with HTML & CSS, fell in love with creating beautiful layouts",
                        color: "bg-primary",
                      },
                      {
                        year: "Mid 2024 - JavaScript Magic",
                        desc: "Discovered the power of JavaScript and started building interactive experiences",
                        color: "bg-blue-500",
                      },
                      {
                        year: "Now - Real Projects",
                        desc: "Building actual websites for real people and loving every challenge",
                        color: "bg-green-500",
                      },
                    ].map((item) => (
                      <div key={item.year} className="flex items-start gap-4">
                        <div className={`w-3 h-3 ${item.color} rounded-full mt-2 flex-shrink-0`} />
                        <div>
                          <h4 className="font-semibold text-foreground">{item.year}</h4>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Current Goals */}
                <motion.div
                  className="project-card rounded-2xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    Current Goals
                  </h3>
                  <div className="space-y-4">
                    {[
                      ["bg-primary", "Gain real client experience through freelance projects"],
                      ["bg-blue-500", "Master React and modern frontend frameworks"],
                      ["bg-green-500", "Dive deep into Web3, Solidity, and blockchain development"],
                      ["bg-purple-500", "Build a strong portfolio of diverse projects"],
                    ].map(([bg, text]) => (
                      <div key={text} className="flex items-center gap-3">
                        <div className={`w-2 h-2 ${bg} rounded-full`} />
                        <span className="text-muted-foreground">{text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* What I Build */}
                <motion.div
                  className="project-card rounded-2xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-foreground">What I Build</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      ["💼", "Portfolio Sites", "bg-primary/10"],
                      ["🚀", "Landing Pages", "bg-blue-500/10"],
                      ["🏫", "Community Pages", "bg-green-500/10"],
                      ["⛓️", "Business Pages", "bg-purple-500/10"],
                    ].map(([emoji, label, bg]) => (
                      <div key={label} className={`${bg} rounded-lg p-4 text-center`}>
                        <div className="text-2xl mb-2">{emoji}</div>
                        <p className="text-sm font-medium text-foreground">{label}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to work together?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I may be new to the professional world, but I bring fresh perspectives, dedication, and a genuine desire
                  to help your project succeed. Let's create something amazing!
                </p>
                <motion.button
                  className="cta-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Let's Connect! 🚀
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}
