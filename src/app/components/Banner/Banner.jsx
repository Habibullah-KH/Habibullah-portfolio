"use client";
import ButtonFill from "../Buttons/Button_fill/ButtonFill";
import InfiniteScroll from "../Infinite_scroll/InfiniteScroll";
// import InfiniteScroll from "../Infinite_scroll/InfiniteScroll";
import "./banner.css";

const Banner = () => {

  return (
    <div className="banner">

    <div className="flex flex-col items-center">
      <p className="font-bold text-xl md:text-3xl text-center mb-3">
        Turning ideas into interactive digital experiences.
      </p>

        {/* <InfiniteScroll/> */}
        <InfiniteScroll/>

      <div className="w-[10rem]">
      <ButtonFill>
        Contact
      </ButtonFill>
      </div>
    </div>

    </div>
  );
};

export default Banner;
