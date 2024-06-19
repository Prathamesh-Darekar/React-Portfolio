import '../public/HeroStyles.css';
import img from '../assets/me.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'

function heroSection() {
    return (
        <section className="wrapper" id="hero-section" >
            <div id="left">
                <div id="my-intro">
                    <div className="car">
                        <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 7L4 12L9 17" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15 7L20 12L15 17" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </div>
                    <div id="me">
                        <h2 id='my-name'>My name is <span>Prathamesh Darekar</span></h2>
                        <h3>I am an aspiring web developer</h3>
                    </div>
                    <p>
                        Welcome to my portfolio! I'm Prathamesh Darekar, a passionate web developer
                        dedicated to built attractive and scalable websites. I strive to create responsive and interactive website. Explore my work and
                        let's connect to discuss how we can create something exceptional together.
                    </p>
                </div><br></br>
                <div id="button-social">
                    <button id="explore-btn"><a href='#projects'>Explore!!</a></button>
                    <div id="social">
                        <a href="https://www.linkedin.com/in/prathamesh-darekar-b04023254/" target='_blank'><FontAwesomeIcon icon={faLinkedin} style={{ color: "#005eff" }} size='2xl' /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/Prathamesh-Darekar" target='_blank'><FontAwesomeIcon icon={faSquareGithub} size="2xl" style={{ color: "#000000", }} /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>    
            </div>
            <div id="main-img">
                <img src={img} alt="me"></img>
            </div>
            <div id="projects" style={{ position: 'absolute', bottom: '70px' }}></div>
        </section>
    )
}

export default heroSection;