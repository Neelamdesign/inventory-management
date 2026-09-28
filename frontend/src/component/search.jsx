import { FaSearch, FaFilter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setFilterCategory, setFilterStatus } from "../features/products";
const Search = () => {
  const dispatch = useDispatch();
  const {search, filterCategory, filterStatus} = useSelector((state)=>state.products)
  return (
    <div className="search">
      <form>
        <div className="form-group">
          <FaSearch />
          <input
            type="text"
            placeholder="search product by name.."
            className="form-control"
            value={search}
            name="proname"
            onChange={(e)=>dispatch(setSearch(e.target.value))}
          />
        </div>
        <div className="form-group">
          <FaFilter />
          <select className="form-control" value={filterCategory} name="category" onChange={(e)=>dispatch(setFilterCategory(e.target.value))}>
            <option value="All">Filter by Category</option>
            <option>Stationary</option>
            <option>Kitchen</option>
            <option>Electronic</option>
            <option>Others</option>
          </select>
        </div>

        <div className="form-group">
          <FaFilter />
          <select className="form-control" value={filterStatus} name="status" onChange={(e)=>dispatch(setFilterStatus(e.target.value))}>
            <option value="All">Filter by Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Search;
