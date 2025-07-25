import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Services from "./components/Services"
import FreelanceProfile from "./components/FreelanceProfile"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import ConversionFooter from "./components/ConversionFooter"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <FreelanceProfile />
      <FAQ />
      <Contact />
      <ConversionFooter />
    </>
  )
}
