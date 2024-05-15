import { IProduct } from "../interfaces/products.interfaces";

export const productsDataBase: IProduct[] = [];

let id = 0;

export const generateId = () => {
    id++
    return id;
}