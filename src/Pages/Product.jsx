import { Fragment, useContext, useEffect, useState } from "react";
import Button from "../component/elements/Button";
import CardProduct from "../component/Fragments/CardProduct";
import { getProducts } from "../services/products.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../component/Fragments/tableCart";
import Navbar from "../component/Templates/Navbar";
import { DarkMode } from "../context/DarkMode";

// const products = [
//   {
//     id: 1,
//     name: "sepatu satu",
//     img: "/images/shoes1.jpg",
//     price: 1000000,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, saepe maxime nisi quisquam eos perspiciatis ullam reiciendis itaque quam inventore minima commodi tempore nihil eligendi! Cum, esse nesciunt ipsam ex unde repudiandae, nam doloribus quasi nemo ad ab illo. Commodi vel debitis",
//   },
//   {
//     id: 2,
//     name: "sepatu dua",
//     img: "/images/shoes1.jpg",
//     price: 800000,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, saepe maxime nisi quisquam eos perspiciatis ullam reiciendis itaque quam inventore ",
//   },
//   {
//     id: 3,
//     name: "sepatu tiga",
//     img: "/images/shoes1.jpg",
//     price: 1200000,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, saepe maxime nisi quisquam eos perspiciatis ullam reiciendis itaque quam inventore minima commodi tempore ",
//   },
// ];

const ProductPage = () => {
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  // const cartref = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  const [products, setProducts] = useState([]);
  const {isDarkMode} = useContext(DarkMode)
  useLogin();


  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
      console.log(data);
    });
  }, []);



  // const handlerAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     console.log();
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { id: id, qty: 1 }]);
  //   }
  // };

  return (
    <Fragment>
      <Navbar />
      <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
        <div className="w-3/4 flex flex-wrap mb-5">
          {products.length > 0 &&
            products.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header id={item.id} src={item.image} />
                <CardProduct.Body title={item.title}>
                  {item.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={item.price}
                  id={item.id}
                  // handlerAddToCart={handlerAddToCart}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/4 ">
          <h1 className="text-3xl font-extrabold text-blue-700 text-center">
            Cart
          </h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
