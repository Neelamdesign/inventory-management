import express from "express";
import { config } from "dotenv";
import cors from "cors"
import ConnectDB from "./config/db.js";
import ProductRoutes from "./routes/productsRoutes.js"

config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
ConnectDB();

app.use("/api/products", ProductRoutes)
app.get("/", (req,res)=>{return res.json("backend is running")})

const PORT = process.env.PORT;


app.listen(PORT, ()=>console.log("localhost is running on port:", PORT))