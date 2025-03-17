import { Link } from "react-router-dom";
import FormLogin from "../component/Fragments/FormLogin";
import AuthLayout from "../component/Templates/AuthLayout";

const LoginPage= () =>{
return (
    <AuthLayout title="login" type="login">
        <FormLogin />
    </AuthLayout>
)
}

export default LoginPage;