import './themeSwap.css'
import { useState } from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";

export default function ThemeSwap(){
    const[click, SetClick] = useState(false)
    return(
        <>
        <button
         className={`ThemeSwap-button ${click ? 'active' : ''}`}
         onClick={()=>SetClick(!click)}
            >
        <span className="icon moon-icon">
        <MdOutlineDarkMode size={25} />
        </span>
         <span className="icon sun-icon">
        <FiSun  size={25} />
        </span>
       </button>  
        </>
    );
}