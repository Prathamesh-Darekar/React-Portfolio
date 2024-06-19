
function Project(props) {
    return (     
        <div className="project">
            <div className="project-img">
                <img src={props.card.image} alt={props.card.alternative} />
            </div>
            <div className="content">
                <h3>{props.card.title}</h3>
                <p>{props.card.desc}</p>
            </div>
            <div className="hover">
                <button><a target="_blank" href={props.card.liveLink}>Live</a></button>
                <button><a target="_blank" href={props.card.gitHubLink}>Git-Hub</a></button>
            </div>
        </div>
    )
}

export default Project