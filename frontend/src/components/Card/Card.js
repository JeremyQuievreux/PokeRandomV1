import './Card.scss';

function Card({card}) {


    function handleClick() {
        alert('Work In Progress \n TODO');
    }
            
    return(
            <div className="card-container">
                <div className="card">
                    <div className={"card-header "+ card.types[0]}>
                        <p className="id">N° {card.dex_number}</p>
                        <p className="name">{card.name}</p>
                    </div>
                    <div className="card-body">
                        <img src={card.picURL} alt="" />
                    </div>
                    <div className="card-type">
                        {card.types.map((type, id) => {
                            return <p key={id} className={"type-square "+ type}>{type}</p>
                        })}
                    </div>
                    <div className={"card-footer "+ card.types[0]}>
                        <p>Taille : {card.height / 100} m </p>
                        <p><img alt="" srcSet="" /> Poids : {card.weigth / 10} Kg</p>
                    </div>
                </div>
                <div className="buy-line">
                    <p>{card.price} $</p>
                    <button onClick={()=>handleClick()} >Acheter</button>
                </div>

            </div>
            
    )
}

export default Card;