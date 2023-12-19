// import React, { useEffect } from "react";
// import Container from "./components/cartContainer";
// import Navbar from "./components/navbar";

// import { totalPrice } from "./features/cart/cartSlice";
// import { useDispatch, useSelector } from "react-redux";

// function App() {
//   const { cartItem } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(totalPrice());
//   }, [cartItem]);

//   return (
//     <div>
//       <Navbar />
//       <Container />
//     </div>
//   );
// }
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
