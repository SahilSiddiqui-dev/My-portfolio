"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const timeline = [
  {
    year: "2024",
    title: "Started with Traditional Web Dev",
    description: "Began with HTML, CSS, and JavaScript fundamentals",
  },
  {
    year: "2025",
    title: "Expanded My Frontend Skills",
    description: "Mastered advanced React and Next.js concepts while building fast, responsive, and dynamic user interfaces.",
  },
  {
    year: "Future",
    title: "Web3 & Blockchain Innovation",
    description: "Expanding into decentralized technologies by learning smart contracts, blockchain architecture, and full-stack dApp development.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
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
              scale: [1, 1.01, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            About Me
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Single animated ring instead of multiple */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full blur-2xl opacity-30 glow-rainbow"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 12,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Profile Image Container */}
              <motion.div
                className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30 glow-purple"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)",
                }}
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  y: {
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              >
                <Image src="/images/sahil-profile-new.webp" alt="Sahil Siddiqui" fill className="object-cover" />

                {/* Reduce floating particles to just one */}
                <motion.div
                  className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 className="text-2xl font-bold text-foreground mb-6" whileHover={{ scale: 1.05, x: 10 }}>
              My Front-End Development Journey
            </motion.h3>

            {/* Enhanced Timeline */}
            <div className="space-y-6 mb-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg glow-purple"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)",
                    }}
                  >
                    {item.year}
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Quote Box */}
            <motion.div
              className="p-6 bg-gradient-to-r from-purple-500/10 to-teal-500/10 rounded-lg border border-primary/20 glow-rainbow animate-pulse-glow"
              initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateX: 2,
                boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)",
              }}
              animate={{
                boxShadow: [
                  "0 0 15px rgba(139, 92, 246, 0.25)",
                  "0 0 25px rgba(59, 130, 246, 0.3)",
                  "0 0 15px rgba(16, 185, 129, 0.25)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.p
                className="text-lg text-foreground font-medium text-center"
                animate={{
                  scale: [1, 1.01, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                "I blend creativity with technical precision to deliver fast, responsive, and conversion-ready websites.."
              </motion.p>

              {/* Quote decoration */}
              <motion.div
                className="absolute -top-2 -left-2 text-4xl text-primary/50"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                "
              </motion.div>
            </motion.div>

            {/* AI Tools Section */}
{/*             <motion.div
              className="mt-8 p-4 bg-muted/30 rounded-lg border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🤖</span> AI Tools I Use
              </h4>
              <div className="flex flex-wrap gap-2">
                {["V0", "Framer", "ChatGPT", "Claude", "GitHub Copilot"].map((tool, index) => (
                  <motion.span
                    key={tool}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {tool}
                  </motion.span> */}
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
