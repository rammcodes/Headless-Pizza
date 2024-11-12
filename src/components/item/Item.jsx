const Item = ({ image, name, onItemClick, idMeal, rating, price }) => {
  return (
    <div onClick={() => onItemClick(idMeal)} className="item">
      <div className="item__img-cont">
        <img src={image} alt="Dish" />
      </div>
      <h3 className="item__name">{name}</h3>
      <div className="item__highlights">
        <div className="item__rating">
          <div className="item__rating-icon-cont">
            <i className="bx bxs-star"></i>
          </div>
          <div>{rating}</div>
        </div>
        <div className="item__price">${price}</div>
      </div>
    </div>
  );
};

export default Item;
