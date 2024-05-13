import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Adidas"
          title="Adidas"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Nike"
          title="Nike"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Puma"
          title="Puma"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Vans"
          title="Vans"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
