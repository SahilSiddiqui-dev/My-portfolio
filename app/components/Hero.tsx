import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Adjust if you're using a different button component

const Hero = () => {
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <motion.span
            className="text-glow-rainbow animate-text-glow block mb-2"
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            From Learning to Launch
          </motion.span>
          <span className="text-foreground">
            Front-End Developer Focused on Performance & Aesthetics.
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          I'm{" "}
          <motion.span
            className="text-primary font-semibold"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Sahil Siddiqui
          </motion.span>
          , a web developer blending modern design principles with powerful technologies like React, Next.js, 
          and Tailwind CSS to build responsive, animated, and conversion-focused websites.
        </p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button size="lg" className="px-8 py-4 text-lg">
            🚀 See What I’ve Been Building
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
