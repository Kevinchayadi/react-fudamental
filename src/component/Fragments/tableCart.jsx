import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

const TableCart = (props) =>{
    const {products} = props;
    const totalPriceRef = useRef(null);
    const cart = useSelector((state) => state.cart.data);
    // const [totalPrice, setTotalPrice] = useState(0);
    const {total} = useTotalPrice();
    const {isDarkMode} = useContext(DarkMode)
    const dispatch = useTotalPriceDispatch();

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
          const sum = cart.reduce((acc, item) => {
            const product = products.find((product) => product.id === item.id);
            return acc + product.price * item.qty;
          }, 0);
          // setTotalPrice(sum);
          dispatch({
            type:"UPDATE",
            payload:{
              total: sum
            }
          })
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
    
    return (
          <table className={"text-center w-full " + (isDarkMode ? "text-white" : "")}>
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
                    <td>{product.title.substring(0,15)}...</td>
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
                  {total.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
    )
}

export default TableCart;