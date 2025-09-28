import './infiniteScroll.css'
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export default function InfiniteScroll (){
    return(
        <>
<ul className="wrapper">
  <li className="item item1"><IoLogoHtml5 /> HTML</li>
  <li className="item item2"><FaCss3Alt /> CSS</li>
  <li className="item item3"><SiJavascript /> JavaScript</li>
  <li className="item item4"><span className='font-xl'><RiTailwindCssFill /></span> TailwindCSS</li>
  <li className="item item5"><IoLogoFirebase /> Firebase</li>
  <li className="item item6"><FaReact /> React.js</li>
  <li className="item item7"><SiNextdotjs /> Next.js</li>
  <li className="item item8"><SiExpress /> Express.js</li>
</ul>
        </>
    );
}