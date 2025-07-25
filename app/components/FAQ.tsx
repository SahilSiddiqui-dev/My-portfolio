"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

const faqs = [
  {
    question: "Do you have experience?",
    answer:
      "I'm new, but I've built real, working projects and keep improving daily. Every project I take on gets my full dedication and attention to detail.",
  },
  {
    question: "Can I trust your work?",
    answer:
      "You can see my code and live links. I'm transparent and eager to deliver. All my projects are available on GitHub and you can test them yourself.",
  },
  {
    question: "How long will my project take?",
    answer:
      "Simple sites: 1–3 days. Larger projects depend on scope. I'll give you a clear timeline before we start and keep you updated throughout.",
  },
  {
    question: "What's your pricing like?",
    answer:
      "I offer competitive rates as I'm building my portfolio. Quality work at fair prices. Contact me for a custom quote based on your specific needs.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! I provide support after project completion. Minor fixes and updates are included, and I'm always available for future enhancements.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Common client doubts, answered with honesty</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-background border border-border/50 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ backgroundColor: "rgba(var(--accent), 0.5)" }}
              >
                <span className="text-lg font-semibold text-foreground pr-4">{faq.question}</span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
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
                    <div className="px-6 pb-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
