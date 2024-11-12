const ItemPopup = ({ popup, onClosePopup, selectedItem }) => {
  return (
    <>
      <div
        onClick={onClosePopup}
        className={`items__item-overlay ${
          popup ? "items__item-overlay--active" : ""
        }`}
      ></div>
      {/* Popup Container Start */}
      <div
        className={`items__item-popup ${
          popup ? "items__item-popup--active" : ""
        }`}
      >
        <div className="items__item-popup-img-cont">
          <img src={selectedItem?.strMealThumb} alt="" />
        </div>
        <div className="items__item-popup-main">
          <h3 className="items__item-popup-name">{selectedItem?.strMeal}</h3>
          <div className="items__item-popup-rating">
            <span className="items__item-popup-rating-icon-cont">
              <i className="bx bxs-star"></i>
            </span>
            <div className="">4.5</div>
          </div>
          <p>
            {selectedItem?.strMeal} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorem ab cupiditate amet, culpa tempore maxime
            exercitationem consectetur voluptatum hic.
          </p>
        </div>
      </div>
      {/* Popup Container End */}
    </>
  );
};

export default ItemPopup;
