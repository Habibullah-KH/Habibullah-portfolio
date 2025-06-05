"use client"
import "./projects.css"
import "../../globals.css"
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Project(){
    const [project, setProject] = useState([]);

    useEffect(()=>{
        fetch('/project.json')
        .then(res => res.json())
        .then(data => setProject(data))

        .catch(error => alert(error))
    },[])
    return(
        <>
        <section className="project_container glowing_border md:p-8">
            <h2 className="font-bold text-xl md:text-3xl text-left mb-7">My project</h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
                {
                project.map(data => (
                    <ProjectCard key={data?.id} project={data}/>
                ))
                }
            </div>
        </section>
        </>
    );
}