import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../features/products";
import { useNavigate } from "react-router-dom";
import { UpdatesQuantity } from "../features/products";

const Table = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, loading, error, search, filterCategory, filterStatus } =
    useSelector((state) => state.products);

  // stock for filtering
  const StockStatus = (stock, stockLimit) => {
    if (stock >= stockLimit) {
      return "In Stock";
    }
    if (stock <= 0) {
      return "Out of Stock";
    } else {
      return "Low Stock";
    }
  };
  // filter and search function
  const FilterProducts = products?.data?.filter((items) => {
    const matchSearch = items.name
      .toLowerCase()
      .trim()
      .includes(search.toLowerCase().trim());
    const matchCatergory =
      filterCategory === "All" || items.category.includes(filterCategory);
    const Status = StockStatus(items.stock, items.lowStockLimit);
    const matchStatus = filterStatus === "All" || Status === filterStatus;
    return matchSearch && matchCatergory && matchStatus;
  });

  //  delete function handeling
  const HandleDelete = (deletedId) => {
    dispatch(deleteProduct(deletedId));
  };

  // quantity funtions
  const increaseQuantity = (id) => {
    products?.data?.find((item) => {
      if (item._id === id) {
        dispatch(
          UpdatesQuantity({ Newquantity: item.stock + 1, updatedId: id }),
        );
      }
    });
  };
  const decreaseQuantity = (id) => {
    products?.data?.find((item) => {
      if (item._id === id) {
        dispatch(
          UpdatesQuantity({ Newquantity: item.stock - 1, updatedId: id }),
        );
      }
    });
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const GoToEdit = (id) => {
    navigate(`update/${id}`);
  };

  const StockCSS = (status) => {
    if (status === "Low Stock") {
      return {
        backgroundColor: "rgba(128, 100, 0, 0.258)",
        color: "rgb(183, 162, 4)",
      };
    } else if (status === "Out of Stock") {
      return {
        backgroundColor: "rgba(128, 0, 0, 0.258)",
        color: "rgb(128, 0, 4)",
      };
    } else {
      return {
        backgroundColor: "rgba(0, 128, 38, 0.255)",
        color: "rgb(2, 128, 0)",
      };
    }
  };

  return (
    <div className="table-responsive w-100">
      <table className="w-100">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price (₹)</th>
            <th>Low Stock Limit</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {/* Loading */}
          {loading && (
            <tr>
              <td colSpan="9" className="text-center">
                Loading products...
              </td>
            </tr>
          )}
          {/* Error */}
          {!loading && error && (
            <tr>
              <td colSpan="9" className="text-center">
                
                {error}
              </td>
            </tr>
          )}
          {/* No Products */}
          {!loading && !error && FilterProducts?.length === 0 && (
            <tr>
              <td colSpan="9" className="text-center">
                No products found
              </td>
            </tr>
          )}

          {/* products */}
          {!loading &&
            !error &&
            FilterProducts?.map((item) => {
              let status = "In Stock";
              if (item.stock <= 1) {
                status = "Out of Stock";
              } else if (item.stock < item.lowStockLimit) {
                status = "Low Stock";
              }
              return (
                <tr key={item._id}>
                  <td className="id">{item._id.slice(0, 10)}.......</td>

                  <td className="item-name">{item.name}</td>

                  <td>
                    <span className="category">{item.category}</span>
                  </td>

                  <td>
                    <div className="quantity-control">
                      <button onClick={() => decreaseQuantity(item._id)}>
                        −
                      </button>
                      <span>{item.stock}</span>
                      <button onClick={() => increaseQuantity(item._id)}>
                        +
                      </button>
                    </div>
                  </td>

                  <td>₹{item.price}</td>

                  <td>{item.lowStockLimit}</td>

                  <td>
                    <span style={StockCSS(status)}>
                      {StockStatus(item.stock, item.lowStockLimit)}
                    </span>
                  </td>

                  <td>{item.createdAt.slice(0, 10)}</td>

                  <td>
                    <div className="actions">
                      <button
                        className="edit"
                        onClick={() => GoToEdit(item._id)}
                      >
                        ✎
                      </button>
                      <button
                        className="delete"
                        onClick={() => HandleDelete(item._id)}
                      >
                        🗑
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
