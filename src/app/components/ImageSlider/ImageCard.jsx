import React from 'react'

export default function ImageCard({img, idx}) {
  return (
    <>
        <div className="
        w-24 h-36 rounded-md
        border-2
         
         ">
          <img className="object-cover w-full h-full" key={idx} src={img} />
        </div>
    </>
  )
}
