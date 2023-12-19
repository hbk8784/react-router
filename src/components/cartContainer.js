import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import CartItem from "./cartItem";

const Container = () => {
  const { cartItem, amount, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return <div>Your Cart Is Empty</div>;
  }

  return (
    <section>
      <div>
        {cartItem.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <hr></hr>
      <footer style={{ display: "flex", justifyContent: "space-between" }}>
        <h4>Total</h4>
        <h4>${total}</h4>
      </footer>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </section>
  );
};

export default Container;
