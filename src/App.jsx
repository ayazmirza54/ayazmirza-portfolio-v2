import "./App.css";
import { useSpring, animated } from "@react-spring/web";
import Contents from "./components/Contents";
import HeaderText from "./components/HeaderText";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Techstack from "./components/Techstack";
import WorkExp from "./components/WorkExp";
import Blogs from "./components/Blogs";
import React from "react";

function App() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const contentProps = useSpring({
    from: { opacity: 0, transform: "translateY(25px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 800 },
    delay: 300,
  });

  return (
  <>  <div class="bg-grid">
    <div class="bg-grid-lines"></div>
  </div>
  <div class="bg-grid-mask"></div>
    <animated.div
      style={fadeIn}
      className="bg-black text-white min-h-screen p-4 md:p-8"
    >
      <animated.div style={contentProps} className="max-w-7xl mx-auto">
       
        <HeaderText />
        <Contents />
        <Intro />
        <WorkExp />
        <Projects />
        <Blogs />
        <Techstack />
      </animated.div>
    </animated.div>
    </>
  );
}

export default App;
