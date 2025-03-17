import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center min-w-100">
      <div className="w-full max-w-xs">
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
