import ButtonFill from "../Buttons/Button_fill/ButtonFill"
import "./projects.css"
import "../../globals.css"
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({project}){
    return(
        <>
        <div className="card_container  p-2 md:p-10 relative">
        {/* image section start */}
            <div className="image_container">
                <img className="image_container" src={project?.banner}/>
            </div>
        {/* image section end */}

        {/* text container start */}
            <div className="text_container">
            <h2 className="font-bold text-2xl">{project?.title}</h2>

            <p>{project?.description}</p>

            <div className="flex gap-3 mt-2 absolute bottom-3">
            <button className="w-32">
            <a href={project?.liveLink} target="blank"><ButtonFill>Live</ButtonFill></a>
            </button>
            <button className="w-32">
            <a href={project?.githubLink} target="blank"><ButtonFill><div className="flex items-center justify-center gap-2"><FaGithub /> Github</div></ButtonFill></a>
            </button>
            </div>

            </div>
        {/* text container end */}
        </div>
        </>
    )
}