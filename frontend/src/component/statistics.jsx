import { useSelector } from "react-redux";

const Statictics = () => {
  const products = useSelector((state) => state.products.products.data);

  const stockData = {
    inStock: [],
    lowStock: [],
    outofstock: [],
  };
  const stocks = products?.map((item) => {
    if (item.stock > item.lowStockLimit) {
      stockData.inStock.push(item);
    } else if (item.stock > 1) {
      stockData.lowStock.push(item);
    } else {
      stockData.outofstock.push(item);
    }
  });

  return (
    <ul className="statictics">
      <li>
        Total Items <span>{products?.length}</span>
      </li>
      <li>
        In Stocks <span>{stockData.inStock.length}</span>
      </li>
      <li>
        Low Stocks <span>{stockData.lowStock.length}</span>
      </li>
      <li>
        Out of Stocks<span>{stockData.outofstock.length}</span>
      </li>
    </ul>
  );
};

export default Statictics;
