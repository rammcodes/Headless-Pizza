import OutsideClickHandler from "react-outside-click-handler";

const Sort = ({
  onSortDropdownOpen,
  sortDropdownShow,
  onSortDropdownClose,
  onSortValueClick,
  sort,
}) => {
  return (
    <div className="main-content__sort">
      <div onClick={onSortDropdownOpen} className="main-content__sort-main">
        <i className="bx bx-sort"></i>
        <span>Sort By</span>
      </div>
      {sortDropdownShow ? (
        <OutsideClickHandler onOutsideClick={onSortDropdownClose}>
          <ul className="main-content__sort-dropdown">
            <li
              className={`main-content__sort-dropdown-el ${
                sort === "asc" ? "main-content__sort-dropdown-el--active" : ""
              }`}
              onClick={() => onSortValueClick("asc")}
            >
              a-z
            </li>
            <li
              className={`main-content__sort-dropdown-el ${
                sort === "desc" ? "main-content__sort-dropdown-el--active" : ""
              }`}
              onClick={() => onSortValueClick("desc")}
            >
              z-a
            </li>
          </ul>
        </OutsideClickHandler>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sort;
