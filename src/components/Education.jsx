import "../public/educationStyles.css";

function Education() {
  return (
    <section className="wrapper">
      <div className="heading">
        <h1>Education</h1>
        <p className="catchy-detail">What I studied</p>
      </div>
      <div id="edu-wrapper">
        <div id="degree" className="details">
          <h3>Bachelor of Computer Applications</h3>
          <h4>
            Bhandarkars Arts and Science College Kundapura{" "}
            <span style={{ color: "#009688", fontWeight: "600" }}>
              - 9.6/10
            </span>
          </h4>
          <p style={{ color: "#009688" }}>2022-present</p>
          <p>
            Studying BCA at Bhandarkars' Arts and Science College in Kundapura
            has been an enriching experience, particularly in exploring diverse
            programming languages. From mastering the basic concepts of
            languages like C, Java, Python, and JavaScript to delving into
            essential Data Structure concepts.
          </p>
        </div>
        <div id="degree" className="details">
          <h3>Commerce with Computer science</h3>
          <h4>
            Government College Kundapura{" "}
            <span style={{ color: "#009688", fontWeight: "600" }}>- 96%</span>
          </h4>
          <p style={{ color: "#009688" }}>2020-2022</p>
          <p>
            I completed my 12th standard education at Government College
            Kundapura, where I pursued Commerce with Computer Science. This
            academic journey not only equipped me with a comprehensive
            understanding of commerce principles but also enhanced my
            proficiency in computer science applications.
          </p>
        </div>
        <div id="degree" className="details">
          <h3>10th</h3>
          <h4>
            Sri Siddhivinayaka School Hattiangadi{" "}
            <span style={{ color: "#009688", fontWeight: "600" }}>- 84%</span>
          </h4>
          <p style={{ color: "#009688" }}>2019-2020</p>
          <p>
            I completed my 10th standard education at Sri Siddhivinaya School in
            Hattiangadi. This institution provided a strong academic foundation
            coupled with a nurturing environment, fostering my early interest in
            learning and personal growth.
          </p>
        </div>
      </div>
      <div
        id="certification"
        style={{ position: "absolute", bottom: "70px" }}
      ></div>
    </section>
  );
}

export default Education;
