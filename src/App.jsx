import { motion, useScroll, useSpring } from "framer-motion";
import {
  About,
  Contact,
  Footer,
  Hero,
  LoaderHero,
  Navbar,
  Project,
} from "./components";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <LoaderHero />
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-3 origin-left bg-gradient-to-r via-violet-700 from-violet-600 to-violet-400"
        style={{ scaleX }}
      />
      <div className="absolute w-full min-h-screen bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
