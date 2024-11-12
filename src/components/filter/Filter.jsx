import FilterDropdown from "../filter-dropdown/FilterDropdown";
import "./Filter.css";

const Filter = ({
  onCategoryApply,
  onCategorySelect,
  onFilterDropdownOpen,
  onFilterDropdownClose,
  dropdownShow,
  selectedCategory,
}) => {
  return (
    <div className="filter">
      <span onClick={onFilterDropdownOpen} className="filter__button">
        <i className="bx bx-filter"></i>
        <span className="filter__button-text">Filter By Area</span>
      </span>
      {dropdownShow ? (
        <FilterDropdown
          selectedCategory={selectedCategory}
          onCategoryApply={onCategoryApply}
          onCategorySelect={onCategorySelect}
          onFilterDropdownClose={onFilterDropdownClose}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Filter;
