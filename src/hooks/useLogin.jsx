import { useEffect, useRef } from "react";
import { getUsername } from "../services/auth.service";


export const useLogin = () =>{
    const token = localStorage.getItem("token");
    const username = useRef("")
    useEffect(()=>{
      if(token){
        username.current = getUsername(token);
      }else{
        window.location.href = "/login"
      }
    },[])


    return username.current
}