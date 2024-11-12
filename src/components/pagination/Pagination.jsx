const Pagination = ({ currPage, setCurrPage, numOfPages }) => {
  return (
    <div className="main-content__pag">
      {currPage > 0 ? (
        <div
          onClick={() => {
            window.scrollTo(0, 0);
            setCurrPage(currPage - 1);
          }}
          className="main-content__pag-left"
        >
          <i className="bx bx-chevron-left"></i>
        </div>
      ) : (
        ""
      )}

      {currPage < numOfPages ? (
        <div
          onClick={() => {
            window.scrollTo(0, 0);
            setCurrPage(currPage + 1);
          }}
          className="main-content__pag-right"
        >
          <i className="bx bx-chevron-right"></i>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
