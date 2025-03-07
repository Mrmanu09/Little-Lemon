import '../Css/ItemCard.css';

function ItemCard(props) {
    return (
        <div className="item-card">
            <img src={props.item.img} alt={props.item.alt}></img>
            <div className="item-details">
                <span>
                    <h3 className="card-title">{props.item.name}</h3>
                    <h3 className="card-title">{props.item.price}</h3>
                </span>
                <p className="card-text">{props.item.description}</p>
                <span>
                    <h3 className="card-title">Order for Delivery</h3>
                    <i class="fa-solid fa-chevron-right"></i>
                </span>
            </div>
        </div>
    )
}

export default ItemCard;