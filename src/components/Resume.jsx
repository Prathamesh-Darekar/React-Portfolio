import '../public/ResumeStyles.css';
import ResumePDF from '../assets/resume image/Resume.pdf';

function Resume(){
    return(
        <section className="wrapper">
            <div className="heading">
                <h1>Resume</h1>
                <p className="catchy-detail">My CV</p>
            </div>
            <div id="resume-wrapper">
                <iframe src={ResumePDF}></iframe>
            </div>
        </section>
    )
}

export default Resume;