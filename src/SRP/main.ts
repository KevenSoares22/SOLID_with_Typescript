import { Order } from "./order";
import { ShoppingCart } from "./shoppingCart";


const shoppingCart = new ShoppingCart();
const order = new Order(shoppingCart);



shoppingCart.addProduct({ name: 'Pen', price: 1.2 })
shoppingCart.addProduct({ name: 'Book', price: 5.8 })
shoppingCart.addProduct({ name: 'Mouse', price: 10.6 })
shoppingCart.addProduct({ name: 'Monitor', price: 980.2 })
shoppingCart.addProduct({ name: 'Keyboard', price: 120.8 })



console.log(order.checkout())
