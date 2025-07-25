"use client"

import { motion } from "framer-motion"
import { ArrowRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 dark:from-purple-900/40 dark:via-blue-900/40 dark:to-teal-900/40"></div>

        {/* Reduced Animated Blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl rounded-full"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-teal-500/30 blur-3xl rounded-full"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full blur-2xl"
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 20, -20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="animate-bounce-in"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <motion.span
              className="text-glow-rainbow animate-text-glow block mb-2"
              animate={{
                scale: [1, 1.005, 1],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              From Learning to Launch
            </motion.span>
            <span className="text-foreground">I Build Modern Web Pages Using AI Tools</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm{" "}
          <motion.span className="text-primary font-semibold animate-pulse-glow" whileHover={{ scale: 1.1 }}>
            Sahil Siddiqui
          </motion.span>
          , a developer who blends AI technology with web expertise to create responsive, animated, and conversion-ready
          websites using platforms like <span className="text-primary font-medium">Framer</span>,{" "}
          <span className="text-primary font-medium">V0</span>, and more.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="#projects"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl glow-purple"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            🚀 View My AI-Powered Work
            <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#contact"
            className="group inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-rainbow-border hover-wiggle"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <EnvelopeIcon className="mr-2 h-5 w-5 animate-float" />🤖 Let's Build Together
          </motion.a>
        </motion.div>

        {/* Reduced Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60"
          animate={{
            y: [0, -8, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full opacity-60"
          animate={{
            y: [0, 12, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-70"
          animate={{
            y: [0, -12, 12, 0],
            x: [0, 12, -12, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  )
}
