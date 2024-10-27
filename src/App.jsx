import "./App.css";
import Contents from "./components/Contents";
import HeaderText from "./components/HeaderText";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Techstack from "./components/Techstack";
import WorkExp from "./components/WorkExp";
import Blogs from "./components/Blogs";
import CVdownload from "./components/CVdownload";
function App() {
  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <HeaderText />
        <Contents />
        <Intro />
        <WorkExp />
        <Projects />
        <Blogs />
        <Techstack />
      </div>
    </div>
  );
}

export default App;
