import { Link } from "react-router-dom";
import Button from "../elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-1/4 max-w-sm bg-slate-700 border border-blue-800 rounded-lg shadow m-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { src,id } = props;
  return (
    <Link to={"/product/" +id}>
      <img src={src} alt="" className="p-5 rounded-t-lg h-[200px] w-full object-fill " />
    </Link>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="text-white px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-lg font-semibold tracking-tight">{title}</h5>
        <p className="text-xs">
          {children}
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handlerAddToCart, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-m font-bold text-white">{price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                  })}</span>
      {/* <Button classname="bg-blue-600 hover:bg-blue-700 text-sm" onClick={() => handlerAddToCart(id)}> Add To Cart</Button> */}
      <Button classname="bg-blue-600 hover:bg-blue-700 text-sm" onClick={() => dispatch(addToCart({id, qty:1}))}> Add To Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
