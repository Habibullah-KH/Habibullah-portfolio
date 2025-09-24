"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import { useTheme } from "../Theme/useTheme";
import RandomText from "../RandomText/RandomText";

export default function Skills() {
  const [animationData, setAnimationData] = useState(null);
    const {darkMode} = useTheme();
  

  useEffect(() => {
    fetch("/ProgrammingComputer.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className={`mySkillsContainer ${darkMode === "enabled" ? "bg_circel_black" : "bg_circel_white"}`}>
        <RandomText text={'Habibullah'}/>

    <div className={`mx-auto flex flex-col md:flex-row items-center justify-center
    `}
    >

      {animationData && (
        <div >
          <Lottie animationData={animationData} loop={true} />
        </div>
      )}
<div className="max-w-[30rem]">
      <SkillCard />
</div>
    </div>
    </div>
  );
}
