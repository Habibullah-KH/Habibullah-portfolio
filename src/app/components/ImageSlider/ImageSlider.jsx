"use client";

export default function ImageSlider({images}) {
  return (
    <div>
      {images?.map((image, idx) => (
        <img key={idx} src={image} />
      ))}
    </div>
  );
}
