import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="zara" title="Zara" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="denim" title="Denim" />
          {/* <Button onClickHandler={handleClick} value="Vans" title="Vans" /> */}
        </div>
      </div>
    </>
  );
};

export default Recommended;
