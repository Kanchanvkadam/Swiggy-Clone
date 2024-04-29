import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext.js";

const Header =()=>{
    const [btnNameReact, setbtnNameReact] = useState("Login");
    const {loggedInUser} = useContext(UserContext)
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg p-2">
            <div className="logo">
                <img className="w-20" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4">
                    <li className="px-2">
                    <Link to="/">Home</Link></li>
                    <li className="px-2">
                    <Link to="/about">About Us</Link></li>
                    <li className="px-2">
                    <Link to="/contact">Contact Us</Link></li>
                    <li className="px-2"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-2">Cart</li>
                    <button className="login" onClick={()=>{
                        btnNameReact === "Login"?setbtnNameReact("Logout"):setbtnNameReact("Login");
                        console.log(btnNameReact);
                    }}>{btnNameReact}</button>
                    <li className="px-2 "><b>{loggedInUser}</b></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;