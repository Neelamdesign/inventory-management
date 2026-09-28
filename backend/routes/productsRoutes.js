import { Router } from "express";
import { getAllProducts, AddProducts, UpdateProducts, updateQuantity, DeleteProducts } from "../controller/productController.js";

const router = Router();

router.get("/", getAllProducts);
router.post("/add", AddProducts);
router.put("/update/:id", UpdateProducts);
router.patch("/update/:id/quantity", updateQuantity);
router.delete("/delete/:id", DeleteProducts)

export default router;