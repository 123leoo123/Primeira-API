import express, { json } from "express";
import { productsRouters } from "./routes/products.routes";

const app = express();

app.use(json());

app.use("/products", productsRouters)

const port = 3000;

app.listen(3000, () => {
    console.log(`API started with sucessfully at port ${port}`)
})