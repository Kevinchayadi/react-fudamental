import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setDarkMode } = useContext(DarkMode);
  const totalPrice = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handlerLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10 py-8">
      {username}
      <Button
        classname="ml-5 bg-slate-700 hover:bg-slate-500 mr-5"
        onClick={handlerLogout}
      >
        {" "}
        Logout
      </Button>
      <Button
        className=" bg-black p-10 mx-5 text-white rounded"
        onClick={() => setDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
      <div className="flex items-center bg-gray-500 p-2 rounded-md ml-5 ">
        <div>Item: {totalCart} | Price: {totalPrice.total}</div>
      </div>
    </div>
  );
};

export default Navbar;
