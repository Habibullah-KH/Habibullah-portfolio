import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Skills from "./components/MySkills/MySkills";
import Project from "./components/Projects/Projects";

export default function Home() {
  return (
  <div>
    <div className="mb-20"><Banner/></div>
    <div id="about" className="mb-20"><About/></div>
    <div id="skill" className="mb-20"><Skills/></div>
    <div id="project" className="mb-20"><Project/></div>
  </div>
  );
}
