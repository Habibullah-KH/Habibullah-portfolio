"use client"
import Link from 'next/link'
import Logo from '../Logo/Logo'
import './navbar.css'
import ButtonBorder from '../Buttons/Button_border/ButtonBorder'
import { useState } from 'react';
import SwapButton from '../Buttons/Swap_button/SwapButton'
import ButtonFill from '../../components/Buttons/Button_fill/ButtonFill'
import ThemeSwap from '../Buttons/Theme_swap/ThemeSwap'
import { useTheme } from '../Theme/useTheme'

export default function NavBar(){

    const {swapTheme} = useTheme();

    const [navDrop, setNavDrop] = useState(false);
    const handleDropdown = () => {
        setNavDrop(!navDrop);
    };
return(
    <>
    <div className='p-3 sticky top-0 backdrop-blur-xl z-50 '>
    <div 
    className='flex justify-center  md:justify-around items-center max-w-[95%] mx-auto'>
     {/*Name container*/}
     <div className='mb-3'>
     <Link href={"/"}>
        <Logo/>
     </Link>
     </div>
     {/*Name container end*/}

<div className='flex items-center'>{/*button + theme container*/}

     {/*Large screen button container*/}
     <div className='hidden md:block '>
     <div className='nav_btn_big_screen'>
        <ul>
            <li><ButtonBorder>About</ButtonBorder></li>
            <li><ButtonBorder>Projects</ButtonBorder></li>
            <li><ButtonBorder>Contact</ButtonBorder></li>
        </ul>        
     </div>

     </div>
     {/*Large screen button container end*/}

<div className='flex items-center absolute right-5 md:static'>
     {/*theme section start*/}
     <div 
     className='ml-7 text-xl flex'
     onClick={swapTheme}
     >
     <ThemeSwap/>
     </div>
     {/*theme section end*/}

{/*dropdown section start*/}
<div className='relative'>
    <div 
    className='flex ml-5 md:hidden'
    onClick={handleDropdown}
    ><SwapButton/></div>
 {/*dropdown swapwe end*/}

 <div className=
{`dropdown_container md:hidden backdrop-blur-2xl bg-white/40
${navDrop ? 'top-[50px]':'-top-[190px]'}
`}>
   <ul>
    <li><ButtonFill>About</ButtonFill></li>
    <li><ButtonFill>Projects</ButtonFill></li>
    <li><ButtonFill>Contact</ButtonFill></li>
    </ul>        
</div>
</div>
</div>

</div>{/*button + theme container end*/}

    </div>
    </div> {/*parent container end*/}

    </>
)
};