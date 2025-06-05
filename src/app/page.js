import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Skills from "./components/MySkills/MySkills";
import Project from "./components/Projects/Projects";

export default function Home() {
  return (
  <div>
    <div className="mb-20"><Banner/></div>
    <div className="mb-20"><About/></div>
    <div className="mb-20"><Skills/></div>
    <div className="mb-20"><Project/></div>
  </div>
  );
}
