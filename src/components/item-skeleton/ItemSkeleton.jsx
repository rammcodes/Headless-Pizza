const ItemSkeleton = ({ image, name }) => {
  return (
    <div className="item-skeleton">
      <div className="item-skeleton__img-cont"></div>
      <h3 className="item-skeleton__name-cont-full"></h3>
      <h3 className="item-skeleton__name-cont-half"></h3>
      <div className="item-skeleton__rating"></div>
    </div>
  );
};

export default ItemSkeleton;
