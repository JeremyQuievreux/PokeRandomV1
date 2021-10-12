import './Card.scss';

function Card({card}) {
    
    return(
        <div className="card">
            <h1>{card.name}</h1>
            <img src={card.picURL} alt="" />
        </div>
    )
}

export default Card;