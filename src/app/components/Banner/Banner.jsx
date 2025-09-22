"use client";
import Link from "next/link";
import ButtonFill from "../Buttons/Button_fill/ButtonFill";
import InfiniteScroll from "../Infinite_scroll/InfiniteScroll";
// import InfiniteScroll from "../Infinite_scroll/InfiniteScroll";
import "./banner.css";

const Banner = () => {

  return (
    <div className="mt-[1rem] h-[25rem] mx-w-[1000px] flex items-center justify-start">

    <div className="flex flex-col items-center">
      <p className="font-bold text-xl md:text-4xl text-center mb-3">
        Turning ideas into interactive digital experiences.
      </p>

        {/* <InfiniteScroll/> */}
        <InfiniteScroll/>

      <div className="w-[10rem]">
     <Link href={"#footer"}>
     <ButtonFill>
        Contact
      </ButtonFill>
     </Link> 
      
      </div>
    </div>

    </div>
  );
};

export default Banner;
