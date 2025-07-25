"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function ConversionFooter() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Show when user has scrolled 50% of the page
      if (scrollPosition > (documentHeight - windowHeight) * 0.5) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-purple-600 to-teal-600 text-white shadow-2xl"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-bold text-lg">🚀 Ready to launch your idea?</p>
          <p className="text-sm opacity-90">Let's work together and build something amazing</p>
        </div>

        <div className="flex gap-3">
          <motion.a
            href="#contact"
            className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start A Project
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
