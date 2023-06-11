import { Messaging } from "./classes/services/messaging";
import { Order } from "./classes/order";
import { Products } from "./classes/products";
import { SaveOrder } from "./classes/services/saveOrder";
import { ShoppingCart } from "./classes/shoppingCart";
import { FiftyPercentDiscount } from "./classes/discount";

const fiftyPercentDiscount = new FiftyPercentDiscount()
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const saveOrder = new SaveOrder();
const order = new Order(shoppingCart, messaging, saveOrder);

shoppingCart.addProduct(new Products('Pen', 1.2))
shoppingCart.addProduct(new Products('Book', 5.8))
shoppingCart.addProduct(new Products('Mouse', 10.6))
shoppingCart.addProduct(new Products('Monitor', 980.2))
shoppingCart.addProduct(new Products('Keyboard', 120.8))



console.log(order.checkout())
