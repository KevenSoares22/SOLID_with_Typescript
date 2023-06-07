
import { OrderStatus } from './interfaces/orderStatus';
import { ShoppingCart } from './shoppingCart';


export class Order {
private _orderStatus: OrderStatus = 'open';
constructor(private readonly cart: ShoppingCart){}


    
get orderStatus(): OrderStatus{
    return this._orderStatus;

}


sendMessage(msg: string): void {
    console.log(`Message Sent: ${msg}`);   
}

saveOrder(): void {
    console.log('Your order has been saved!');   
}   

checkout(): void {
    if (this.cart.isEmpty()) {
        console.log('Your cart is empty');
        return;   
    }

    this._orderStatus = 'closed';
    this.sendMessage('Your order has been recevied');
    this.saveOrder();
    this.cart.clearCart();


}

}








