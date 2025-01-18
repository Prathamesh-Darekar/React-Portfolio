import "../public/CertificationStyles.css";
import meta from "../assets/certificate images/meta.png";
import hackerRank from "../assets/certificate images/hacker rank.png";
import tcs from "../assets/certificate images/TCS.webp";
import soloLearn from "../assets/certificate images/solo learn.png";
import wildLearner from "../assets/certificate images/wild learner.png";
import google from "../assets/certificate images/google.png";
import fullstack from "../assets/certificate images/fullstack.png";
import internship from "../assets/certificate images/internship.jpeg";
import { useState } from "react";
import Certificate from "./certificateCard";

function Certification() {
  const [certificates] = useState([
    {
      title: "React JS",
      image: meta,
      alternative: "meta-image",
      link: "https://drive.google.com/file/d/1YdpTWlsEvL33HyD9tmS0G5ntZjknv99i/view?usp=drive_link",
    },
    {
      title: "Full-Stack Web Development",
      image: fullstack,
      alternative: "apnacollege-image",
      link: "https://drive.google.com/file/d/1YdpTWlsEvL33HyD9tmS0G5ntZjknv99i/view?usp=drive_link",
    },
    {
      title: "Problem Solving",
      image: hackerRank,
      alternative: "hackerRank-image",
      link: "https://drive.google.com/file/d/1BQ96rE6m5dV7VAWXR-276Er5bod6vNzn/view?usp=drive_link",
    },
    {
      title: "TCS-ION Career Edge",
      image: tcs,
      alternative: "tcs-image",
      link: "https://drive.google.com/file/d/1cetZ55BydI3P5chqFBJcV4uTs3OkbKLP/view?usp=drive_link",
    },
    {
      title: "INTERNSHIP",
      image: internship,
      alternative: "SumanaEmbeddedTechnologies-image",
      link: "https://drive.google.com/file/d/1KOt34EBmDpk8t5litMg3wgjviCBjw7iH/view?usp=drive_link",
    },
    {
      title: "JavaScript",
      image: soloLearn,
      alternative: "soloLearn-image",
      link: "https://drive.google.com/file/d/1FCjeMGdEKIf511fhclCVjVd2rKwDzz2A/view?usp=drive_link",
    },
    {
      title: "HTML",
      image: wildLearner,
      alternative: "wildLearner-image",
      link: "https://drive.google.com/file/d/1ArLZHJuXeECEU-Ix4eJIU70aCj3rKdgT/view?usp=drive_link",
    },
    {
      title: "Node JS and Express JS",
      image: google,
      alternative: "google-image",
      link: "https://drive.google.com/file/d/1HitNG99mMpn7snq63cAqTw0yTeBIN_FP/view?usp=drive_link",
    },
  ]);
  return (
    <section className="wrapper">
      <div className="heading">
        <h1>Certificates</h1>
        <p className="catchy-detail">Certificates I earned</p>
      </div>
      <div id="certificates">
        {certificates.map((certificate, index) => {
          return <Certificate card={certificate} key={index} />;
        })}
      </div>
      <div id="resume" style={{ position: "absolute", bottom: "70px" }}></div>
      <div id="contact" style={{ position: "relative", bottom: "110px" }}></div>
    </section>
  );
}

export default Certification;
