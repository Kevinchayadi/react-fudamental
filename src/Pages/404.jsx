import { useRouteError } from "react-router-dom";

const ErrorPage=()=>{
    const error = useRouteError();
    return(
    <div className="flex flex-col justify-center min-h-screen items-center min-w-100">
        <h1 className="text-3xl font-extrabold">Oops!</h1>
        <p className="my-3 text-xl" >Sorry, An unexpected Error has occured</p>
        <p>{ error.statusText || error.message} </p>
    </div>
    );

}

export default ErrorPage