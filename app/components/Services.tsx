"use client"

import { motion } from "framer-motion"
import { UserIcon, AcademicCapIcon, CodeBracketIcon } from "@heroicons/react/24/outline"

const services = [
  {
    icon: <UserIcon className="w-8 h-8" />,
    title: "Personal Portfolio Sites",
    description: "Custom portfolio websites that showcase your skills and personality with modern design.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Contact Forms"],
  },
  {
    icon: <AcademicCapIcon className="w-8 h-8" />,
    title: "College/Local Projects",
    description: "Web solutions for educational institutions and local communities.",
    features: ["Notice Boards", "Event Management", "Student Portals", "Local Business Sites"],
  },
  {
    icon: <CodeBracketIcon className="w-8 h-8" />,
    title: "Frontend Development",
    description: "Clean, interactive user interfaces built with modern web technologies.",
    features: ["HTML/CSS/JS", "Responsive Design", "Animations", "Cross-browser Compatible"],
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What I Offer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I help individuals and small teams launch quick, beautiful websites.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <motion.div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-2xl text-primary mb-4 group-hover:scale-105 transition-transform duration-300">
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-4">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
