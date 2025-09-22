import "./about.css";
import { FaCode, FaRocket, FaLightbulb, FaTools } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Me</h1>

      <section className="about-section">
        <p>
          Hi, I’m <strong>Habibullah Khondoker</strong>, a passionate web developer with a  foundation in JavaScript and skilled in the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js). My journey started with a deep curiosity about the web, which grew into a commitment to building efficient, scalable, and user-friendly applications.
        </p>

        <p>
          I kickstarted my programming journey with <strong>Programming Hero</strong>, where I developed a solid grasp of full-stack development through real-world, hands-on projects.
        </p>

        <p>
          Currently, I’m pursuing a <strong>BSc in CSE at IUBAT</strong>. While studying, I actively work on both personal and collaborative projects to continuously improve my skills.
        </p>

        <p>
          Beyond traditional web dev, I’m also intrigued by <strong>AI-powered tools</strong>, automation, and smart solutions that elevate both everyday life and business operations.
        </p>
      </section>

      <section>
        <h2 className="section-title"><FaCode className="icon" /> Projects</h2>
        <ul className="section-list">
          <li>Developed full-stack applications solving real-world problems</li>
          <li>Designed responsive and user-centric front-end interfaces</li>
          <li>Implemented authentication, real-time features, and dynamic interactions</li>
        </ul>
      </section>

      <section>
        <h2 className="section-title"><FaRocket className="icon" /> Future Vision</h2>
        <p>
          My goal is to become a full-stack developer who not only writes clean, efficient code but also delivers meaningful impact through technology. I’m eager to explore opportunities in <strong>AI</strong>, <strong>cloud computing</strong>, and <strong>open-source collaboration</strong>.
        </p>
      </section>

      <section className="connect-section">
        <h3>Let’s connect and grow together! 🚀</h3>
      </section>
    </div>
  );
}
