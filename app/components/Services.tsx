"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, Palette, Globe, Search } from "lucide-react";

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Personal Portfolio Sites",
    description: "Custom portfolio websites that showcase your skills and projects professionally",
    features: ["Responsive Design", "Modern Animations", "SEO Optimized"],
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "College/Local Projects",
    description: "Web applications for college assignments, local businesses, and community projects",
    features: ["Custom Functionality", "Database Integration", "User-Friendly Interface"],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Frontend Development",
    description: "Modern, responsive frontend development using latest technologies",
    features: ["React/JavaScript", "TailwindCSS", "Mobile-First Design"],
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Site Hosting & SEO Fixes",
    description: "Deploy your website and optimize it for search engines",
    features: ["Fast Hosting", "SEO Optimization", "Performance Tuning"],
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-7xl">
        {isVisible && (
          <>
            {/* Heading */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  What I Offer
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I help individuals and small teams launch quick, beautiful websites
              </p>
            </motion.div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="project-card rounded-2xl p-8 group h-full"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col h-full">
                    <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-1">{service.description}</p>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-border/50">
                        <div className="flex items-center justify-between">
                          <motion.button
                            className="px-4 py-2 bg-primary/20 text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                          >
                            Get Quote
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Footer */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Custom Projects Welcome!</h3>
                <p className="text-muted-foreground mb-6">
                  Have a unique project in mind? I love taking on new challenges and learning through building. Let's
                  discuss your ideas and create something amazing together.
                </p>
                <motion.button
                  className="cta-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Discuss Your Project
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
