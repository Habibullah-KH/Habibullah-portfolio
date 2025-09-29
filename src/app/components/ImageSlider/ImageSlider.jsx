"use client";

import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";

export default function ImageSlider({images}) {
const [img, setImg] = useState('');
  useEffect(()=>{
    if(images?.length > 0){
      setImg(images[0])
    }
  }, [])
  
  function handleImageClick(img){
   setImg(img)
  }
  return (
    <>
    <div className="py-4">
    <div className="rounded-lg h-72 mb-4">
      <img className="object-cover object-top rounded-lg w-full h-full" src={img}/>
    </div>

        <div
         className="flex gap-2 overflow-x-auto">
      {images?.map((image, idx) => (
        <div
        onClick={() => handleImageClick(image)}
        >
        <ImageCard img={image} idx={idx}/>
        </div>
      ))}
        </div>
    </div>

    </>
  );
}
