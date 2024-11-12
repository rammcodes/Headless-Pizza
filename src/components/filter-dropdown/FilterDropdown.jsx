import { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const FilterDropdown = ({
  onCategoryApply,
  onCategorySelect,
  onFilterDropdownClose,
  selectedCategory,
}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://themealdb.com/api/json/v1/1/list.php?a=list`)
      .then((res) => res.json())
      .then((res) => {
        setCategories(res.meals);
      });
  }, []);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        onFilterDropdownClose();
      }}
    >
      <div className="filter__dropdown">
        <form action="#">
          {categories.length
            ? categories.map((cat, i) => {
                return (
                  <fieldset key={i} className="filter__dropdown-item">
                    <input
                      type="radio"
                      name="category"
                      value={cat.strArea}
                      onChange={onCategorySelect}
                      checked={selectedCategory === cat.strArea ? true : false}
                    />
                    <label>{cat.strArea}</label>
                  </fieldset>
                );
              })
            : Array.from(Array(29).keys()).map((item, i) => (
                <fieldset
                  key={i}
                  className="filter__dropdown-item filter__dropdown-item--skeleton"
                >
                  <label>Dummy</label>
                </fieldset>
              ))}
        </form>
        <div className="filter__dropdown-bottom">
          <button onClick={onCategoryApply}>Apply</button>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default FilterDropdown;
