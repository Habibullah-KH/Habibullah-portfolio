import React, { useState, useEffect, useRef } from 'react'

export default function RandomText({text}) {
  const chars = "!@#$%^&*()_+{}[]<>?/|";

  const [displayText, setDisplayText] = useState("");
  const [frame, setFrame] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries) => {
        if(entries[0].isIntersecting){
          setStart(true);
        }
      },
      {threshold: 0.5}
    );

    if(ref.current) observer.observe(ref.current);

    return() => observer.disconnect();
  },[])

  useEffect(()=>{
    if (!start) return;
    let frameCount = 0;

    const interval = setInterval(()=>{
      frameCount++;
      let newText = "";

      for (let i = 0; i < text.length; i++){
        if(i < frameCount / 2){
          newText += text[i];
        }
        else{
          newText += chars[Math.floor(Math.random() * chars.length)]
        }
      }

      setDisplayText(newText);
      setFrame(frameCount);

      if (frameCount > text.length * 2) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 50);
    return ()=>clearInterval(interval);
  }, [start, text])

  return (
    <>
      <div ref={ref}>
      <h1 className='text-3xl'>
        {displayText}
      </h1>
    </div>
    </>
  )
}
