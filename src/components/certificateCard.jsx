import '../public/CertificationStyles.css'

function certificateCard(props) {
    return (
        <div className="certificate" >
            <div className="certificate-image-wrapper">
                <img src={props.card.image} alt={props.card.alternative}></img>
                <div>
                    <button><a target="_blank" href={props.card.link}>View</a></button>
                </div>
            </div>
            <p >{props.card.title}</p>
        </div>
    )
}

export default certificateCard;