import { generateId, productsDataBase } from "../database/database";
import { IProduct } from "../interfaces/products.interfaces";

export class productServices{

getProducts(){

    return productsDataBase;
}

getOneProduct(id: string){
    const findProduct = productsDataBase.find(product => product.id === Number(id))

    return findProduct;
}

createProduct(name: string, price: number){
    const newProduct: IProduct = {id: generateId(), name, price}

    return newProduct;
}
deleteProducts(id: string){
    const index = productsDataBase.findIndex(product => product.id === Number(id));

    productsDataBase.splice(index, 1);
}
}
