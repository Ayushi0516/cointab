import {useState} from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

function Login(){
    const navigate=useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        const payload = {
            email,
            password,
        }

        fetch("http://localhost:8080/user/login",{
            method : "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body : JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            // if(res.token){
            //     localStorage.setItem("token", res.token)
                navigate("/home")
            // }
        })
        .catch((err) => console.log(err))
    }
    return <div className="login">
        <h1>Login here</h1>
        <input type="text" placeholder=" enter email" onChange={(e) => setEmail(e.target.value)}/>
        <br/>
        <input type="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <button onClick={handleSubmit}>Login</button>
    </div>
}

export default Login