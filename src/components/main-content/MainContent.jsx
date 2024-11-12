import "./MainContent.css";
import Items from "../items/Items";

const MainContent = () => {
  return (
    <>
      <div className="container">
        <div className="main-content">
          <div className="main-content__upper">
            <h2 className="main-content__upper-title">
              Showing our<span> Pizza Menu</span>
            </h2>
          </div>
          <Items />
        </div>
      </div>
    </>
  );
};

export default MainContent;
