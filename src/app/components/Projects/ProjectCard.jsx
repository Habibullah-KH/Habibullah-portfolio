import "./projects.css"
import "../../globals.css"
import { FaGithub } from "react-icons/fa";
import ButtonFill from "../Buttons/Button_fill/ButtonFill";
import ImageSlider from "../ImageSlider/ImageSlider";

export default function ProjectCard({project}){
    return(
        <>
        <div className="card_container mt-5">
        {/* text container start */}
            <div className="text_container">
            <h2 className="font-bold text-2xl">{project?.title}</h2>
            <div className="opacity-85">
            <p>Date</p>
            <p>{project?.description}</p>
            </div>

            <div className="mt-2">
            <button className="w-32">
            <a href={project?.liveLink} target="blank"><ButtonFill>Live</ButtonFill></a>
            </button>
            </div>

            </div>
        {/* text container end */}

        {/* image section start */}
            <div className="image_container">
               <ImageSlider image={project?.images}/>
            </div>
        {/* image section end */}

        </div>
        </>
    )
}