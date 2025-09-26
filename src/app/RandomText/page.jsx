"use client"
import { useEffect, useState } from "react";

export default function RandomText(){
    const text = 'habibullah';
      const chars = "!@#$%^&*()_+{}[]<>?/|";

    const [displayText, setNewText] = useState('');
    const [frameCount, setFrameCount] = useState(0);
    useEffect(()=>{
        let frameCount = 0;

        const interval = setInterval(()=>{
            frameCount++;
            let newtext = "";

            for(let i = 0; i < text.length; i++){

                if(i < frameCount / 2){
                    newtext += text[i];
                }
                else{
                    newtext += chars[Math.floor(Math.random()*chars.length)]
                }
            }

setNewText(newtext);
setFrameCount(frameCount);
        }, 80)

        if(frameCount > text.length * 2){
            clearInterval(interval);
            setNewText(newtext);
        }

        return () => clearInterval(interval);
    }, [])

    return(
    <>
        <div>
            {displayText}
        </div>
    </>
    );
}