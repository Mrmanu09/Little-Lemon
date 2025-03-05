import '../Css/ItemCard.css';

function ItemCard(props) {
    return (
        <div className="Item-Card">
            <img src={props.img}></img>
            <div className="Item-Details">
                <span>
                    <h3 className="Card-Title">{props.name}</h3>
                    <h3 className="Card-Title">{props.price}</h3>
                </span>
                <p className="Card-Text">{props.description}</p>
                <span>
                    <h3 className="Card-Title">Order for Delivery</h3>
                    <a><i class="fa-solid fa-chevron-right"></i></a>
                </span>
            </div>
        </div>
    )
}

export default ItemCard;