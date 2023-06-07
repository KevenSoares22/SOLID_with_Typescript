import { CartProduct } from './interfaces/cartProducts';

export class ShoppingCart {
    private readonly _products: CartProduct[] =  [];


    addProduct(product: CartProduct): void {
        this._products.push(product);   
    }

    removeProduct(index: number): void {
        this._products.splice(index, 1);   
    }

    get products(): Readonly<CartProduct[]> {
        return this._products;   
    }

    isEmpty(): boolean {
        return this._products.length === 0;
    }

    total(): number {
        return Number(this._products.reduce((total, next)=> total + next.price, 0).toFixed(2));
    }
    clearCart(): void {
        this._products.length = 0;   
    }
    
        


}
