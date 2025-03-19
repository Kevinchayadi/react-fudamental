import Button from "../elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-1/4 max-w-sm bg-slate-700 border border-blue-800 rounded-lg shadow m-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { src } = props;
  return (
    <a href="#">
      <img src={src} alt="" className="p-5 rounded-t-lg h-[200px] w-full object-fill " />
    </a>
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
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-m font-bold text-white">{price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                  })}</span>
      <Button classname="bg-blue-600 hover:bg-blue-700 text-sm" onClick={() => handlerAddToCart(id)}> Add To Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
