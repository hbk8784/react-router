import { useDispatch } from "react-redux";
import { removeItem } from "../features/cart/cartSlice";
import { increase, decrease } from "../features/cart/cartSlice";

const CartItem = ({ id, brand, price, qty }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{brand}</p>
      <p>${price}</p>
      <p>
        Qty
        <span>
          <button onClick={() => dispatch(increase(id))}>+</button>
        </span>
        <input
          type="text"
          value={qty}
          size={1}
          readOnly
          style={{ textAlign: "center" }}
        ></input>
        <span>
          <button onClick={() => dispatch(decrease(id))}>-</button>
        </span>
        <span>
          <button onClick={() => dispatch(removeItem(id))}>Remove</button>
        </span>
      </p>
      <hr></hr>
    </div>
  );
};

export default CartItem;
