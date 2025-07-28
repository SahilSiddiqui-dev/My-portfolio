"use client"

import { motion } from "framer-motion"
import { ExternalLink, Star, Shield, Clock } from "lucide-react"

const platforms = [
  {
    name: "FreeLancer",
    url: "https://www.freelancer.in/u/sahilsiddiquidev?sb=t",
    logo: "🟢",
    description: "Professional web development services",
    rating: "New Freelancer",
    responseTime: "< 1 hour",
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com/s/Ldx83z0",
    logo: "🔵",
    description: "Freelance web developer available for projects",
    rating: "New Seller",
    responseTime: "< 2 hours",
  },
]

const trustFactors = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Transparent Work",
    description: "You can see my code and live project links",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Fast Response",
    description: "I respond to messages within hours, not days",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Quality Focus",
    description: "I may be new, but I deliver clean, working code",
  },
]

export default function FreelanceProfile() {
  return (
    <section id="freelance" className="section-padding bg-background/50">
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
              Want to Work With Me?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You can hire me via trusted freelance platforms or contact me directly. Let's build something together.
          </p>
        </motion.div>

        {/* Trust Factors */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={factor.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                {factor.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{factor.title}</h3>
              <p className="text-muted-foreground">{factor.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="project-card rounded-2xl p-8 text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-6">{platform.logo}</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{platform.name}</h3>
              <p className="text-muted-foreground mb-6">{platform.description}</p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <span className="text-sm font-medium text-primary">{platform.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Response Time:</span>
                  <span className="text-sm font-medium text-green-400">{platform.responseTime}</span>
                </div>
              </div>

              <motion.a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me on {platform.name}
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">This builds trust even before I have reviews</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Working through established platforms gives you protection and peace of mind. You can see my work, read
              platform policies, and have secure payment processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://www.freelancer.in/u/sahilsiddiquidev?sb=t", "_blank")}
              >
                🔗 Hire Me on Freelancer
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                📬 Contact Me Directly
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
