"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Do you have experience?",
    answer:
      "I'm new to professional web development, but I've built real, working projects and keep improving daily. Every project I take on is an opportunity to deliver quality work while expanding my skills. You can see my code and live project links to judge the quality yourself.",
  },
  {
    question: "Can I trust your work?",
    answer:
      "I believe in transparency - you can see my code on GitHub and visit live links to my projects. I'm eager to deliver quality work and build long-term relationships. Plus, working through platforms like Fiverr gives you additional protection and dispute resolution.",
  },
  {
    question: "How long will my project take?",
    answer:
      "Simple sites typically take 1-3 days, while larger projects depend on scope and complexity. I always provide realistic timelines upfront and keep you updated throughout the process. I'd rather under-promise and over-deliver than the other way around.",
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer:
      "Your satisfaction is my priority. I offer revisions and will work with you until you're happy with the result. If working through Fiverr or Upwork, you also have platform protection and can request refunds if needed.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! I provide basic support for bugs and minor issues after project completion. For ongoing maintenance or major updates, we can discuss a separate arrangement. I want your website to succeed long-term.",
  },
  {
    question: "What's your pricing like?",
    answer:
      "My rates are competitive because I'm building my portfolio and reputation. I focus on delivering great value rather than charging premium prices. Each project is quoted based on complexity, timeline, and specific requirements.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-background/50">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Common client doubts, answered with honesty</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-card/30 transition-colors"
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">Still have questions? I'm here to help!</p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
