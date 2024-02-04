import "../styles/cart.css";
import { useId } from "react";

import { CartIcon, ClearCartIcon } from "../Icons/Icons.jsx";
import { useCart } from "../hooks/useCart.js";

function CartItem({
  price,
  title,
  quantity,
  addToCart,
  removeOneItemFromCart,
}) {
  return (
    <li>
      <img src="https://picsum.photos/640/360" alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <button onClick={removeOneItemFromCart}>-</button>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
      <small>SubTotal: {price * quantity}</small>
    </li>
  );
}
// function Total() {
//   const localData = JSON.parse(localStorage.getItem("cart")).map((data) => {
//     return { price: data.price, quantity: data.quantity };
//   });
//   const result = localData.map((data) => {
//     const total = data.quantity * data.price;
//     return total;
//   });
//   const total = result.reduce((total, numero) => total + numero, 0);

//   return <small>Total: {total}</small>;
// }
/*NOTE: con esta funcion y usando reduce es mucho más facil el poder manejar los totales y de mas cosas  */
function Total() {
  const localData = JSON.parse(localStorage.getItem("cart")) || [];
  const total = localData.reduce((total, data) => {
    const subtotal = data.quantity * data.price;
    return total + subtotal;
  }, 0);
  return <small>Total: {total}</small>;
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart, removeOneItemFromCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              removeOneItemFromCart={() => removeOneItemFromCart(product)}
              {...product}
            />
          ))}
          <small>
            <Total />
          </small>
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
