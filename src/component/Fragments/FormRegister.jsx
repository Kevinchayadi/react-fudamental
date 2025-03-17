import Button from "../elements/Button";
import InputForm from "../elements/input/Index";

const FormRegister = ()=>{
    return(
        <form action="">
          <InputForm
            type="text"
            name="name"
            placeholder="example@gmail.com"
            title="Fullname"
          />
          <InputForm
            type="email"
            name="email"
            placeholder="example@gmail.com"
            title="email"
          />
          <InputForm
            type="password"
            name="password"
            placeholder="example@gmail.com"
            title="password"
          />
          <InputForm
            type="password"
            name="confirm-password"
            placeholder="example@gmail.com"
            title="Confirm Password"
          />

          <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
    );
}

export default FormRegister;