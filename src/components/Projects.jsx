import "../public/projectStyles.css";
import spotify from "../assets/project images/spotify.png";
import calculator from "../assets/project images/calculator.png";
import petadoption from "../assets/project images/pets.png";
import currencyConverter from "../assets/project images/currency converter.png";
import { useState } from "react";
import Project from "./projectCard";
import wanderlust from "../assets/project images/wanderlust.png";
import cloudview from "../assets/project images/cloudview.png";
import designHub from "../assets/project images/designHub.png";

function Projects() {
  const [cards] = useState([
    {
      image: wanderlust,
      alternative: "wanderlust-image",
      title: "Wanderlust",
      desc: "Built a dynamic rental listing platform using Node.js, Express.js, and MongoDB,following the MVC architecture.This project includes features like user authentication and authorization.",
      liveLink: "https://wanderlust-delta-64oi.onrender.com/listings",
      gitHubLink: "https://github.com/Prathamesh-Darekar/Wanderlust-Delta.git",
    },
    {
      image: cloudview,
      alternative: "cloudview-app-image",
      title: "Cloudview",
      desc: "A React.js weather app using the OpenWeatherMap API to display current conditions and forecasts. Features a responsive design for seamless user experience.",
      liveLink: "https://cloudview.netlify.app/",
      gitHubLink: "https://github.com/Prathamesh-Darekar/Weather-app.git",
    },
    {
      image: designHub,
      alternative: "DesignHub-image",
      title: "Design Hub",
      desc: "Developed backend for a website using Express.js and SQL. Added user authentication & authorization for secure access.Worked closely with the frontend developer to ensure a seamless user experience.",
      liveLink: "https://design-hub.onrender.com",
      gitHubLink: "https://github.com/ruthvij17/interior-design_app.git",
    },
    {
      image: currencyConverter,
      alternative: "currency converter-image",
      title: "Currency converter",
      desc: "A user-friendly web tool designed to facilitate quick and accurate currency conversions. Built with HTML, JavaScript, and CSS.",
      liveLink: "https://mycoinvert.netlify.app/",
      gitHubLink: "https://github.com/Prathamesh-Darekar/Currency-converter",
    },
    {
      image: spotify,
      alternative: "spotify-image",
      title: "Spotify clone",
      desc: "Welcome to my Spotify homepage clone! This project is a faithful recreation of the Spotify web application's main landing page using HTML and CSS.",
      liveLink: "https://my-spotify-lite.netlify.app/",
      gitHubLink: "https://github.com/Prathamesh-Darekar/Spotify-Clone",
    },
    {
      image: petadoption,
      alternative: "pet adoption-image",
      title: "Pet-adoption website",
      desc: "Explore my static pet adoption landing page crafteds using HTML and CSS, the page features a captivating images and concise descriptions of each adoptable pet.",
      liveLink: "https://my-pets-hub.netlify.app/",
      gitHubLink: "https://github.com/Prathamesh-Darekar/CODSOFT.LandingPage",
    },
    {
      image: calculator,
      alternative: "calculator-image",
      title: "Calculator",
      desc: "A dynamic web tool for performing arithmetic operations effortlessly. Crafted with React's components and state management",
      liveLink: "https://counton-react.netlify.app/",
      gitHubLink: "https://github.com/Prathamesh-Darekar/React-Calculator",
    },
  ]);
  return (
    <section className="wrapper">
      <div className="heading">
        <h1>Projects</h1>
        <p className="catchy-detail">What I built</p>
      </div>
      <div id="flex">
        {cards.map((card, index) => {
          return <Project card={card} key={index} />;
        })}
      </div>
      <div
        id="education"
        style={{ position: "absolute", bottom: "70px" }}
      ></div>
    </section>
  );
}

export default Projects;
