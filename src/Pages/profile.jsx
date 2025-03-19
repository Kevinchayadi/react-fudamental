import { useLogin } from "../hooks/useLogin"

const Profile =() => {
    const username = useLogin();
    return (
        <h1 className="">username : {username}</h1>
        
    )
}

export default Profile