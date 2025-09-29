"use client";

import ImageCard from "./ImageCard";

export default function ImageSlider({images}) {
  return (
    <>
    <div className="py-4">
    <div className="border-2 border-red-500 rounded-lg h-56  mb-4">
      <img src=""/>
    </div>

        <div className="flex gap-2 overflow-x-scroll">
      {images?.map((image, idx) => (
        <ImageCard img={image} idx={idx}/>
      ))}
        </div>
    </div>

    </>
  );
}
