"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (item: { name: string; href: string }) => {
    setActiveTab(item.name)

    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
      try {
        const element = document.getElementById(item.href.replace("#", ""))
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      } catch (error) {
        console.error("Navigation error:", error)
      }
    }, 100)
  }

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <motion.div className="flex lg:flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button
            onClick={() => handleNavClick({ name: "Home", href: "#home" })}
            className="text-2xl font-bold text-gradient bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
          >
            Sahil Siddiqui
          </button>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-2">
          {navItems.map((item) => (
            <motion.div key={item.name} className="relative">
              <button
                onClick={() => handleNavClick(item)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors relative z-10 ${
                  activeTab === item.name ? "text-white" : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </button>
              {activeTab === item.name && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-foreground hover:text-primary">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-background/95 backdrop-blur-md border-t border-border/50 px-6 py-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => {
                      handleNavClick(item)
                      setIsOpen(false)
                    }}
                    className="block py-3 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
