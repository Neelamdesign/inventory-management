import Products from "../model/products.js";

export const getAllProducts = async (req, res) => {
  try {
    const Product = await Products.find();
    if (!Product) {
      return res.status(400).json({ message: "failed to get products" });
    }
    res
      .status(200)
      .json({ message: "Get Products Successfully", data: Product });
  } catch (err) {
    res.status(500).json(`Server Error, ${err.message}`);
  }
};

export const AddProducts = async (req, res) => {
  try {
    const { name, category, stock, price, lowStockLimit } = req.body;
    if (
      !name ||
      !category ||
      price < 1 ||
      !price ||
      lowStockLimit < 5 ||
      !lowStockLimit
    ) {
      return res.status(400).json("data invalid or missing");
    }
    const NewProducts = await Products.create({
      name,
      category,
      stock,
      price,
      lowStockLimit,
    });
    res.status(201).json({
      message: "product created successfully",
      data: NewProducts,
      status: "success",
    });
  } catch (err) {
     console.log("ADD PRODUCT ERROR:", err);
    res.status(500).json(`Server Error, ${err.message}`);
  }
};

export const UpdateProducts = async (req, res) => {
  try {
    const { name, category, stock, price, lowStockLimit } = req.body;
    const { id } = req.params;
    if (
      !name ||
      !category ||
      price < 1 ||
      !price ||
      lowStockLimit < 5 ||
      !lowStockLimit
    ) {
      return res.status(404).json("data invalid or missing");
    }
    const updatedProduct = await Products.findByIdAndUpdate(id, {
      name,
      category,
      stock,
      price,
      lowStockLimit,
    });
    await updatedProduct.save();

    res.status(200).json({
      message: "product updated successfully",
      data: updatedProduct,
      status: "success",
    });
  } catch (err) {
    res.status(500).json(`Server Error, ${err.message}`);
  }
};

export const updateQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;
    const { id } = req.params;
    if (!quantity) {
      return res.status(404).json("quantity not found");
    }
    const updateStock = await Products.findByIdAndUpdate(id, {
      stock: quantity,
    });

    res
      .status(200)
      .json({ message: "stock updated successfully", data: updateStock });
  } catch (err) {
    res.status(500).json(`Server Error, ${err.message}`);
  }
};

export const DeleteProducts = async (req, res) => {
  try {
    const {id} = req.params;
    const deleteProduct = await Products.findByIdAndDelete(id);
    res.status(200).json("Product deleted successfuly");
  } catch (err) {
    res.status(500).json(`Server Error, ${err.message}`);
  }
};
