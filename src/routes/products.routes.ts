import { Request, Response, Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { isProductIdValid } from "../middleware/isProductIdValid.middleware";

export const productsRouters = Router();

const productsControllers = new ProductsControllers();


productsRouters.get("/", productsControllers.getProducts);

productsRouters.get("/:id", isProductIdValid.execute, productsControllers.getProducts);

productsRouters.post("/", productsControllers.createProduct);

productsRouters.delete("/:id", isProductIdValid.execute, productsControllers.deleteProducts);