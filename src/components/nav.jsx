
import '../public/navstyles.css';

function Navbar(){
    return(
        <section >
            <nav>
                <input type='checkbox' id='toggle'></input>
                <h2 id="logo">Prathamesh Darekar</h2>
                <label htmlFor="toggle"><svg id="burger" width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H20" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> <path d="M5 17H20" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> <path d="M5 7H20" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> </g></svg></label>
                <ul id="navigation">
                    <li><a href="#hero-section">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#certification">Certfication</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar;

