import "../public/projectStyles.css";
import spotify from "../assets/project images/spotify.png";
import calculator from "../assets/project images/calculator.png";
import petadoption from "../assets/project images/pets.png";
import currencyConverter from "../assets/project images/currency converter.png";
import { useState } from "react";
import Project from './projectCard';

function Projects() {
    const [cards]=useState([{
        image:currencyConverter,
        alternative:'currency converter-image',
        title:'Currency converter',
        desc:'A user-friendly web tool designed to facilitate quick and accurate currency conversions. Built with HTML, JavaScript, and CSS.',
        liveLink:"https://mycoinvert.netlify.app/",
        gitHubLink:"https://github.com/Prathamesh-Darekar/Currency-converter"
        },{
            image:spotify,
            alternative:'spotify-image',
            title:'Spotify clone',
            desc:"Welcome to my Spotify homepage clone! This project is a faithful recreation of the Spotify web application's main landing page using HTML and CSS.",
            liveLink:"https://my-spotify-lite.netlify.app/",
            gitHubLink:"https://github.com/Prathamesh-Darekar/Spotify-Clone"
        },{
            image:petadoption,
            alternative:'pet adoption-image',
            title:'Pet-adoption website',
            desc:'Explore my static pet adoption landing page crafteds using HTML and CSS, the page features a captivating images and concise descriptions of each adoptable pet.',
            liveLink:"https://my-pets-hub.netlify.app/",
            gitHubLink:"https://github.com/Prathamesh-Darekar/CODSOFT.LandingPage"
        },{
            image:calculator,
            alternative:'calculator-image',
            title:'Calculator',
            desc:"A dynamic web tool for performing arithmetic operations effortlessly. Crafted with React's components and state management",
            liveLink:"https://counton-react.netlify.app/",
            gitHubLink:"https://github.com/Prathamesh-Darekar/React-Calculator"
        }
    ]);
    return (
        <section className="wrapper">
            <div className="heading">
                <h1>Projects</h1>
                <p className="catchy-detail">What I built</p>
            </div>
            <div id="flex">
                {cards.map((card,index)=>{
                    return <Project card={card} key={index}/>
                })}
            </div>
            <div id="education" style={{position:'absolute',bottom:'70px'}}></div>  
        </section>
    )
}

export default Projects;