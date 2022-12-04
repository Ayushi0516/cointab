import { Route, Routes } from "react-router-dom"
import HomePage from "./Homepage"
import Login from "./Login"
import Register from "./Register"


const AllRoutes=()=>{
    return(
        <div>
            <Routes>
                <Route  path="/home" element= {<HomePage />} />
                <Route   path="/login" element={<Login/>}/>
                <Route  path="/" element={<Register/>}   />
            </Routes>
        
        </div>
    )
}
export default AllRoutes