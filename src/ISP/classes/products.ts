import { CartProduct } from "./interfaces/cartProducts";

export class Products implements CartProduct{
    constructor(public name: string, public price: number) {}



}