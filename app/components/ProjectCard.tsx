"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Lazy load animation only after intersection
  const [shouldAnimate, setShouldAnimate] = useState(false);
  useEffect(() => {
    if (isInView) setShouldAnimate(true);
  }, [isInView]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      {/* Lightweight Background Effects */}
      <div
        className="floating-shape w-64 h-64 top-20 left-10 opacity-30"
        style={{ animationDelay: "0s" }}
        aria-hidden="true"
      />
      <div
        className="floating-shape w-48 h-48 top-40 right-20 opacity-20"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      />
      <div
        className="floating-shape w-32 h-32 bottom-40 left-1/4 opacity-25"
        style={{ animationDelay: "4s" }}
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl text-center relative z-10 px-4">
        {shouldAnimate && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient bg-gradient-to-r from-primary via-blue-500 to-green-400 bg-clip-text text-transparent">
                From Learning to Launch
              </span>
              <br />
              <span className="text-foreground">I Build Real Web Experiences</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm <span className="text-primary font-semibold">Sahil Siddiqui</span>, a passionate web developer
              building websites that are{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-semibold">
                fast, animated, and user-friendly
              </span>
              .
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg flex items-center gap-2 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                🚀 View My Work <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="px-8 py-4 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white flex items-center gap-2 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                📬 Contact Me <Mail className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
