import { Messaging } from "./messaging";
import { Order } from "./order";
import { Products } from "./products";
import { SaveOrder } from "./saveOrder";
import { ShoppingCart } from "./shoppingCart";


const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const saveOrder = new SaveOrder();
const order = new Order(shoppingCart, messaging, saveOrder);

shoppingCart.addProduct(new Products('Pen', 1.2))
shoppingCart.addProduct(new Products('Book', 5.8))
shoppingCart.addProduct(new Products('Mouse', 10.6))
shoppingCart.addProduct(new Products('Monitor', 980.2))
shoppingCart.addProduct(new Products('Keyboard', 120.8))



console.log(order.checkout())
