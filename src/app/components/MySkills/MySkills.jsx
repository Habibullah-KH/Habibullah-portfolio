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

    <div className={`mx-auto flex flex-col md:flex-row items-center justify-center
    `}
    >

      {animationData && (
        <div className="hidden md:block">
          <Lottie animationData={animationData} loop={true} />
        </div>
      )}

<div>

<div className="py-5">
<RandomText text={'Technologies I use.'}/>
<p className="text-xs">I have worked with a variety of technologies.
<br></br>
 Here are the technologies I have experience with:</p>
</div>
<div className="max-w-[30rem]">
      <SkillCard />
</div>


      </div>
    </div>
    </div>
  );
}
