import Button from "../elements/Button";
import InputForm from "../elements/input/Index";

const FormLogin = ()=>{
  const handleLogin= (event)=>{
    //agar tidak refresh halaman!
    event.preventDefault();

    localStorage.setItem('email' , event.target.email.value)
    localStorage.setItem('password' , event.target.password.value)
    window.location.href="/product"

  }
    return(
        <form action="" onSubmit={handleLogin}>
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

          <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
        </form>
    );
}

export default FormLogin;