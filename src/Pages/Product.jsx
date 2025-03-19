import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../component/elements/Button";
import CardProduct from "../component/Fragments/CardProduct";
import { getProducts } from "../services/products.service";
import { useLogin } from "../hooks/useLogin";


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
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const totalPriceRef = useRef(null);
  const cartref = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  const [products , setProducts ]= useState([]);
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  useEffect(() => {
      if (cart.length > 0) {
          totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);
    
    
    useEffect(()=>{
        getProducts((data)=>{
          setProducts(data);
          console.log(data);
            
        });
    },[])


    
    

    
    const handlerLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
  };

  const handlerAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      console.log();
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10">
        {username}
        <Button
          classname="ml-5 bg-slate-700 hover:bg-slate-500 "
          onClick={handlerLogout}
        >
          {" "}
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5 ">
        <div className="w-3/4 flex flex-wrap mb-5">
          {products.length > 0 && products.map((item) => (
            <CardProduct key={item.id}>
              <CardProduct.Header src={item.image} />
              <CardProduct.Body title={item.title}>{item.description}</CardProduct.Body>
              <CardProduct.Footer
                price={item.price}
                id={item.id}
                handlerAddToCart={handlerAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4 ">
          <h1 className="text-3xl font-extrabold text-blue-700 text-center">
            Kategori
          </h1>
          <table className="text-center w-full">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 && cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}>
                <td className="" colSpan={3}>
                  Price
                </td>
                <td>
                  {totalPrice.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
          </Fragment>

  );
};

export default ProductPage;
