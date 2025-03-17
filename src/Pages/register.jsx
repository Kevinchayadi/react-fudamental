import { Link } from "react-router-dom";
import FormRegister from "../component/Fragments/FormRegister";
import AuthLayout from "../component/Templates/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
