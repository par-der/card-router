
export function Card(props) {
  return (
    <div className="productList">
      <div key={props.id} className="productCard">
        <img src={props.image} alt="product-img" className="productImage"></img>

        <div className="productCard__content">
            <h3 className="productName">{props.name}</h3>
            <p>{props.information}</p>
            <div className="displayStack">
                <div className="productType">{props.type}</div>
            </div>
        </div>
      </div>
    </div>
  );
};
