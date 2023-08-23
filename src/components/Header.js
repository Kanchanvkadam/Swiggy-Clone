import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";

const Header =()=>{
    const [btnNameReact, setbtnNameReact] = useState("Login");
    return(
        <div className="header">""
            <div className="logo">
                <img className="image" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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