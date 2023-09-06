import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";

const Header =()=>{
    const [btnNameReact, setbtnNameReact] = useState("Login");
    return(
        <div className="header">
            <div className="logo">
                <img className="image" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                    <Link to="/">Home</Link></li>
                    <li>
                    <Link to="/about">About Us</Link></li>
                    <li>
                    <Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnNameReact === "Login"?setbtnNameReact("Logout"):setbtnNameReact("Login");
                        console.log(btnNameReact);
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;