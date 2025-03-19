import { useEffect, useRef, useState } from "react";
import Button from "../elements/Button";
import InputForm from "../elements/input/Index";
import { login } from "../../services/auth.servish";

const FormLogin = ()=>{
  
  useEffect(()=>{
    usenameref.current.focus();
  },[])
  
  const handleLogin= (event)=>{
    //agar tidak refresh halaman!
    event.preventDefault();

    // localStorage.setItem('usename' , event.target.usename.value)
    // localStorage.setItem('password' , event.target.password.value)
    // window.location.href="/product"
    
    const data = {
      username : usenameref.current.value,
      password: passwordref.current.value
    }
    login(data, (status, res)=>{
      if(status){
        localStorage.setItem("token", res.data.token);
      }else{
        setIsAuth(res.response.data)
      }
    })

  }
  const usenameref = useRef("");
  const passwordref = useRef("");
  const [isAuth, setIsAuth]= useState("")

    return(
        <form action="" onSubmit={handleLogin}>
          <InputForm
            type="text"
            name="usename"
            placeholder="example@gmail.com"
            title="usename"
            ref = {usenameref}
          />
          <InputForm
            type="password"
            name="password"
            placeholder="example@gmail.com"
            title="password"
            ref={passwordref}
          />
          <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
          {isAuth && <p className="text-red-500">{isAuth}</p>}
        </form>
    );
}

export default FormLogin;