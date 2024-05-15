import { Request, Response } from "express";
import { productServices } from "../services/products.services";

export class ProductsControllers {
    getProducts(req: Request, res: Response): Response{
     
        const ProductServices = new productServices();
        
        const response = ProductServices.getProducts(); 

        return res.status(200).json(response)
     }
    
    getOneProduct(req: Request, res: Response): Response{
        
        const ProductServices = new productServices();

        const response = ProductServices.getOneProduct(req.params.id);

        return res.status(200).json(response)
    }
    
    createProduct(req: Request, res: Response): Response {
        
        const ProductServices = new productServices();

        const response = ProductServices.createProduct(req.body.name, req.body.price);

        return res.status(201).json(response);
    }
    deleteProducts(req: Request, res: Response): Response{
        
        const ProductServices = new productServices();

        ProductServices.deleteProducts(req.params.id);

        return res.status(204).json();
    }
}
