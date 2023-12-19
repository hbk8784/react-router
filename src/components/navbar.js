import { useSelector } from "react-redux/es/hooks/useSelector";
import Icon from "./icon";
import Container from "./cartContainer";

const Navbar = () => {
  let { cartItem, amount, total } = useSelector((store) => store.cart);
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "Gray",
      }}
    >
      <h3>Navbar</h3>
      <Icon />
      <p>{amount}</p>
    </div>
  );
};

export default Navbar;
