import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name:{type:String, required:true},
    category:{type:String,required:true},
    stock:{type:Number, required:true, },
    price:{type:Number,required:true},
    lowStockLimit:{type:Number, required:true, default:5},
},
{timestamps:true}
)

const Products = mongoose.model("product", ProductSchema);

export default Products;