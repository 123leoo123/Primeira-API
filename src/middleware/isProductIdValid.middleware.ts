import { NextFunction, Request, Response } from "express";
import { productsDataBase } from "../database/database";

export class isProductIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
        if(!productsDataBase.some(product => product.id === Number(req.params.id))){
            return res.status(404).json({message: "Product not found"})
        }
    }
}