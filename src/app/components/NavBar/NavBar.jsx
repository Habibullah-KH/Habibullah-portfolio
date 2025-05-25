"use client"
import Link from 'next/link'
import Logo from '../Logo/Logo'
import './navbar.css'
import ButtonBorder from '../../components/Buttons/ButtonBorder'
import { MdOutlineDarkMode } from "react-icons/md";

import { useState } from 'react';
import SwapButton from '../../components/Swap_button/SwapButton'

export default function NavBar(){
    const [navDrop, setNavDrop] = useState(false);
    const handleDropdown = () => {
        setNavDrop(!navDrop);
    };
return(
    <>
    <div className='p-3 sticky top-0 backdrop-blur-3xl'>
    <div 
    className='flex justify-center md:justify-around items-center max-w-[95%] mx-auto'>
     {/*Name container*/}
     <div className='mb-3'>
     <Link href={"/"}>
        <Logo/>
     </Link>
     </div>
     {/*Name container end*/}

<div className='flex items-center'>{/*button + theme container*/}

     {/*button container*/}
     <div className='hidden md:block'>
     <div className='nav_btn_big_screen'>
        <ul>
            <li><ButtonBorder>About</ButtonBorder></li>
            <li><ButtonBorder>Projects</ButtonBorder></li>
            <li><ButtonBorder>Contact</ButtonBorder></li>
        </ul>        
     </div>

     </div>
     {/*button container end*/}

<div className='flex items-center absolute right-5 md:static'>
     {/*theme section start*/}
     <div className='ml-7 text-xl'>
     <MdOutlineDarkMode />
     </div>
     {/*theme section end*/}

     {/*dropdown section start*/}
     <div>
    <div className='flex ml-5 md:hidden'><SwapButton/></div>
 {/*dropdown button end*/}
     </div>
</div>

</div>{/*button + theme container end*/}

    </div>
    </div> {/*parent container end*/}

    </>
)
};