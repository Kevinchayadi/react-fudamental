import axios from "axios";

export const getProducts = (callback) =>{
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
        if (callback) {
            callback(res.data);
        }

    })
    .catch((err)=>{
        console.log(err);
    })
}
