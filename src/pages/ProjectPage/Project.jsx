import React from "react";
import ProjectCard from "../../components/Card/ProjectCard";
import img1 from "../../assets/NotesWala.png";
import img2 from '../../assets/project_bucket.png'
import img3 from "../../assets/portfolio2.png"
import img4 from "../../assets/usefulWeb.png"

const projects = [

    {
        image: img1,
        title: "NotesWala",
        subtitle: "College Notes Platform",
        description: "Responsive React app for college notes, PDFs, question papers, member uploads.",
        tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
        liveLink: "https://live-link2.com",
        codeLink: "https://github.com/you/noteswala",
    },
    {
        image: img4,
        title: "Drivefinder",
        subtitle: "Car Search Website",
        description: "A complete MERN stack car rental/search web application with admin dashboard.",
        tech: ["React", "MongoDB", "Node", "Express", "Tailwind"],
        liveLink: "https://live-link2.com",
        codeLink: "https://github.com/you/noteswala",
    },
    {
        image: img2,
        title: "ProjectBucket",
        subtitle: "Collection of JS Projects",
        description: "This is simple Project or Website which can be a collection of lots of small project.",
        tech: ["html", "css", "bootstarp", "javascript"],
        liveLink: "https://live-link2.com",
        codeLink: "https://github.com/you/noteswala",
    },
    {
        image: img3,
        title: "PortFolio",
        subtitle: "Representation of me & mySelf",
        description: "This is simple Project or A Representation Of All That I've Learned.",
        tech: ["React+vite", "Tailwind", "Javascript"],
        liveLink: "https://live-link2.com",
        codeLink: "https://github.com/you/noteswala",
    }
];

export default function Project() {
    return (
        <section id="projects" className="bg-black py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-8"
                style={{textDecoration:"overline underline #fcba03"}}>My Projects</h2>
                <h4 className="text-center text-2xl">Here you will find some of my personal projects that I created <br /> with each
                    project containing its project stack</h4>
                <div className="grid mt-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
