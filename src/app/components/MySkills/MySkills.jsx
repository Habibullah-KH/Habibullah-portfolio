"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";

export default function Skills() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/ProgrammingComputer.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className="mx-auto">
      {animationData && (
        <div style={{ width: 300, height: 300 }}>
          <Lottie animationData={animationData} loop={true} />
        </div>
      )}
      <SkillCard />
    </div>
  );
}
