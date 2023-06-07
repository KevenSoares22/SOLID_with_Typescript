type CartProduct = { name: string; price: number };
type OrderStatus = 'open' | 'closed';
export class ShoppingCart {
    private readonly _products: CartProduct[] =  [];
    private _orderStatus: OrderStatus = 'open';


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

    sendMessage(msg: string): void {
        console.log(`Message Sent: ${msg}`);   
    }

    saveOrder(): void {
        console.log('Your order has been saved!');   
    }

    clearCart(): void {
        this._products.length = 0;   
    }
    
    get orderStatus(): OrderStatus{
        return this._orderStatus;



    }



    checkout(): void {
        if (this.isEmpty()) {
            console.log('Your cart is empty');
            return;   
        }

        this._orderStatus = 'closed';
        this.sendMessage('Your order has been recevied');
        this.saveOrder();
        this.clearCart();


    }



}

const shoppingCart = new ShoppingCart();
shoppingCart.addProduct({ name: 'Pen', price: 1.2 })
shoppingCart.addProduct({ name: 'Book', price: 5.8 })
shoppingCart.addProduct({ name: 'Mouse', price: 10.6 })
shoppingCart.addProduct({ name: 'Monitor', price: 980.2 })
shoppingCart.addProduct({ name: 'Keyboard', price: 120.8 })

console.log(shoppingCart.checkout())
