import "./Header.css";

const Header = ({ ProductArr, ViewFilter, setViewFilter }) => {
  let selectedCategory = "";

  const categories = ProductArr.map((p) => p.category).filter(
    (value, index, array) => array.indexOf(value) === index
  );
  return (
    <nav className="product-filter">
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>

          <select
            onChange={(e) => {
              selectedCategory = e.target.value;
              ViewFilter(selectedCategory);
            }}
          >
            <option>--Choose an option--</option>
            {categories.map((Category, index) => (
              <option key={index}>{Category}</option>

            ))}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav>
  );

};
export default Header;
