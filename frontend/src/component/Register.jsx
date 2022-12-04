import {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"

function Register(){
    const navigate=useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = () => {
        const payload = {
            email,
            password,
            name
        }

        fetch("http://localhost:8080/user/signup",{
            method : "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body : JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) =>  console.log(res))
        navigate("/login")  
     .catch((err) => console.log(err))
    }
    return (
    <div className="register">
        <h1>Register here</h1>
        <div className="signup">
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)}/>
        <br/>
        <input type="text" placeholder="enter email" onChange={(e) => setEmail(e.target.value)}/>
        <br/>
        <input type="password" placeholder=" enter password" onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <button onClick={handleSubmit}>Register</button>
        </div>
    </div>
    )
}

export default Register