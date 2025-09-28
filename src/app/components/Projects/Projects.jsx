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
        <section className="project_container md:p-8">
            <h2 className="font-bold text-xl md:text-3xl text-left">Recent Projects.</h2>
            <p>Explore some of my recent projects below. For more, visit my GitHub profile.</p>
            <div className="flex flex-wrap items-center justify-center">
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