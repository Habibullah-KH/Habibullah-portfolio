import "./about.css";
import { FaCode, FaRocket, FaLightbulb, FaTools } from "react-icons/fa";
import AboutText from "./AboutText";
import Profilebanner from "../Profilebanner";

export default function About() {
  return (
    <div className="about-container rounded-none lg:rounded-[1rem] lg:m-3">
    <h1 className="about-heading text-center">About Me</h1>

    <div className="grid lg:grid-cols-2 items-center">
      <div className="lg:justify-self-end mb-5 lg:mb-0 lg:mr-36 mx-auto"><Profilebanner/></div>
      <div className="lg:justify-self-start mx-auto"><AboutText/></div>
    </div>

      <section className="connect-section">
        <h3>Let’s connect and grow together! 🚀</h3>
      </section>
    </div>
  );
}
