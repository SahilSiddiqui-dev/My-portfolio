"use client"

import { motion } from "framer-motion"

export default function FreelanceProfile() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Want to Work With Me?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            You can hire me via trusted freelance platforms or contact me directly. Let's build something together.
          </p>
        </motion.div>

        <motion.div transition-colors="true"
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Fiverr */}
          <motion.a
            href="https://www.fiverr.com/s/AyzYRk4"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl hover:border-purple-500/50 transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-purple-500 transition-colors">
              Fiverr Profile
            </h3>
            <p className="text-muted-foreground text-sm">
              Hire me for quick projects and get quality work delivered fast
            </p>
          </motion.a>

          {/*freelancer*/}
          <motion.a
            href="https://www.freelancer.in/u/sahilsiddiquidev?sb=t"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg"
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-purple-500 transition-colors">
              Freelancer Profile
            </h3>
            <p className="text-muted-foreground text-sm">
              Hire me for quick projects and get quality work delivered fast
            </p>
          </motion.a>
        

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/mohd-sahil-siddiqui-337483376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg"
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-purple-500 transition-colors">
              LinkedIn
            </h3>
            <p className="text-muted-foreground text-sm">Connect with me professionally and see my network</p>
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://www.fiverr.com/s/AyzYRk4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me on Fiverr
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me Directly
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-8 p-4 bg-muted/50 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">🧠 This builds trust even before you have reviews.</p>
        </motion.div>
      </div>
    </section>
  )
}
