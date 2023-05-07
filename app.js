import React from "react";
import  ReactDOM  from "react-dom/client";



// Header
// - LOGO
// -Nav Item
// 
// Body
// - Search
// - RestaurantContainer
// - RestaurantCard
//      - image
//      - Name of Restaurant, Star Rating, Cuisine
// footer
// - Copyright
// - Links
// - Address
// - Contacts


const Header =()=>{
    return(
        <div className="header">
            <div className="logo">
                <img className="image" src="https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) =>{
    console.log(props);
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wfksq2cpbgfeuvmb2c08" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 Minutes</h4>
        </div>
    )
}



const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            <RestaurantCard resName="Meghana Food"  cuisine="Biryani, North Indian, Asian"/><RestaurantCard resName="KFC"  cuisine="Burger, Fast Food"/>
            </div>
        </div>
    )
}


const AppLayot = () =>{
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
} 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayot />)





// const heading = (
//     <div id="div" className="divInside">
//         <h1 className="head">
//             Hello World! from kanchan in jsx
//         </h1>
//     </div>
// );

// //React Functional Component

// const Title = ()=>(
//     <div id="div" className="divInside">
//         <h1 className="head">
//             Hello World! from kanchan in jsx
//         </h1>
//     </div>
// );

// const HeadingComponent = () => {
//     return (
//         <React.Fragment>
//             <React.Fragment>
//                 <h2>{200+100}</h2>      
//                 <h2>{console.log("ABC")}</h2>   
//             </React.Fragment>
//             <div id="container"> 
//                 <Title />
//                 {Title()}
//                 {heading}
//                 <h2>{200+100}</h2>      
//                 <h2>{console.log("ABC")}</h2>  
//                 <h1 className="heading">React Functional Component</h1>
//             </div>
//             <div id="container"></div>
//         </React.Fragment>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const root1 = ReactDOM.createRoot(document.getElementById("root1"))

// root.render(<HeadingComponent />)

// root1.render(<Title />);
//root.render(heading);





//  <div id="parent">
//     <div id="child">
//         <h1 id="newHeading"></h1>
//         <h2></h2>
//     </div>
//  </div>
//Creating Above structure (Nn ested HTML structure using React):
// const parent =React.createElement(
//     "div",{id:"parent"}, 
//     [
//             React.createElement(
//                 "div",{id:"child1"}, 
//                 [
//                     React.createElement(
//                     "h1",{id:"newHeading"},
//                     "Heading under 2 div"
//                     ),
//                     React.createElement(
//                     "h2",{},"This is an sibling to h1"
//                     )
//                 ]
//             ),
//             React.createElement(
//                 "div",{id:"child2"},
//                 [
//                     React.createElement(
//                         "h1",{},"h1 in 2 div and child2"
//                     ),
//                     React.createElement(
//                         "h2",{},"h2 in child2"
//                     )
//                 ]
//             )
//     ]
//     )

// console.log(parent);

// const heading = React.createElement("h1",{id:"heading"},"Hello World From React");

// //console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// //console.log(root);

// root.render(parent); 
