
import { OrderStatus } from './interfaces/orderStatus';
import { Messaging } from './services/messaging';
import { SaveOrder } from './services/saveOrder';
import { ShoppingCart } from './shoppingCart';


export class Order {
    private _orderStatus: OrderStatus = 'open';
    constructor(
            private readonly cart: ShoppingCart,
            private readonly messaging: Messaging,
            private readonly saveOrder: SaveOrder
        ){}


    get orderStatus(): OrderStatus{
        return this._orderStatus;

    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log('Your cart is empty');
            return;   
        }

        this._orderStatus = 'closed';
        this.messaging.sendMessage('Your order has been recevied');
        this.saveOrder.saveOrder();
        this.cart.clearCart();

    }

}








