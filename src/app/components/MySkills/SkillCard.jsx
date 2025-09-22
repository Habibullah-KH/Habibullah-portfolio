import React from 'react'
import "./mySkills.css";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFirebase, SiMongodb, SiExpress, SiNextdotjs } from "react-icons/si";
export default function SkillCard() {
  return (
    <>
    <div>
      <div className="skills-grid">

        <div className="skill-card">
          <FaHtml5 className="skill-icon html" />
          <p>HTML5</p>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="skill-icon css" />
          <p>CSS3</p>
        </div>

        <div className="skill-card">
          <SiJavascript className="skill-icon js" />
          <p>JavaScript</p>
        </div>

        <div className="skill-card">
          <SiTailwindcss className="skill-icon tailwind" />
          <p>Tailwind CSS</p>
        </div>

        <div className="skill-card">
          <FaReact className="skill-icon react" />
          <p>React.js</p>
        </div>

        <div className="skill-card">
          <SiNextdotjs className="skill-icon next" />
          <p>Next.js</p>
        </div>

        <div className="skill-card">
          <FaNodeJs className="skill-icon node" />
          <p>Node.js</p>
        </div>

        <div className="skill-card">
          <SiExpress className="skill-icon express" />
          <p>Express.js</p>
        </div>

        <div className="skill-card ">
          <SiMongodb className="skill-icon mongo" />
          <p>MongoDB</p>
        </div>

        <div className="skill-card">
          <FaGitAlt className="skill-icon git" />
          <p>Git & GitHub</p>
        </div>

        <div className="skill-card">
          <SiFirebase className="skill-icon firebase" />
          <p>Firebase</p>
        </div>

      </div>
    </div>
    </>
  )
}
