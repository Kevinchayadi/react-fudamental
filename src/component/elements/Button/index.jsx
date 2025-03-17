//penggunaan component dengan arrow fuction
const Button = (props) => {
    const{children = 'uji coba', classname = 'bg-black', onClick={onClick} , type="button"} = props;
    return (
      <button
        className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
        type={type}
        onClick={onClick}
      >
       {children}
      </button>
    );
  };


  export default Button;