import { CartProduct } from "./cartProducts";

export class Products implements CartProduct{
    constructor(public name: string, public price: number) {}



}