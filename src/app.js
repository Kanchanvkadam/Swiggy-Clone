import React,{lazy, Suspense, useState, useEffect}from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext, {userContext} from "./utils/userContext"


const Grocery =lazy(()=>import("./components/Grocery"))
const AppLayot = () =>{
    const [userName, setUserName] = useState('');
    
    useEffect(()=>{
        data={
            name:  "Kanchan Kadam"
        }
        setUserName(data.name)
    },[])

    return(
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
} 

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayot />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense> 
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)





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
