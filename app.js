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
    const { resData} = props;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+resData.data.cloudinaryImageId} />
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines.join(", ")}</h4>
            <h4>{resData.data.avgRating}</h4>
            <h4>{resData.data.costForTwo /100}</h4>
            <h4>{resData.data.deliveryTime}</h4>
        </div>
    )
}

const resObj = {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "264863",
      "name": "Al Zara Mandi Arabian Restaurant",
      "uuid": "303c9348-d9bf-4431-a657-7540b00ab496",
      "city": "1",
      "area": "Frazer Town",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "glqxlss2oht3etcbysmt",
      "cuisines": [
        "Arabian",
        "North Indian",
        "Indian",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 39,
      "minDeliveryTime": 39,
      "maxDeliveryTime": 39,
      "slaString": "39 MINS",
      "lastMileTravel": 4.800000190734863,
      "slugs": {
        "restaurant": "al-zara-mandi-arabian-restaurant-frazer-town-frazer-town",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "No-137, Ground Floor, MM Road, Frazer Town, Bangalore - 560005",
      "locality": "MM Road",
      "parentId": 29562,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹100 | Use code GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹100 | Use code GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6720113~p=1~eid=00000187-f61d-e7cb-343b-da9300820103",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "264863",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "lastMileTravel": 4.800000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  };

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            <RestaurantCard resData = {resObj}/>
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
