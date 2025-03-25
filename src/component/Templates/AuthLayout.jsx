import { useContext } from "react";
import { Link } from "react-router-dom";
import {DarkMode} from "./../../context/DarkMode"

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const {isDarkMode, setDarkMode} = useContext(DarkMode)
  console.log(isDarkMode);
  return (

    <div className={`flex justify-center min-h-screen items-center min-w-100 ${isDarkMode && "bg-slate-900"}`}>
      <div className="w-full max-w-xs">
        <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" onClick={()=> setDarkMode(!isDarkMode)}>
          {isDarkMode? "Light":"Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          {" "}
          welcome please enter yout detail
        </p>
        {children}

        <Navlink type={type} />
      </div>
    </div>
  );
};

const Navlink = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an Account?{" "}
        <Link to="/register" className="font-bold text -blue-700">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Have an Account?{" "}
        <Link to="/login" className="font-bold text -blue-700">
          Login
        </Link>
      </p>
    );
  }
};

const ExNavlink = ({type})=>{
    return(
        <p className="text-sm mt-5 text-center">
        {type ==="register"?"Have an Account? " : "Already have an account? "}
        {type ==="login" && (
            <Link to="/login" className="font-bold text -blue-700">
                Login
            </Link>
        )}
        {type ==="register" && (<Link to="/register" className="font-bold text -blue-700">
          Register
        </Link>)}
      </p>
    )
}

export default AuthLayout;
