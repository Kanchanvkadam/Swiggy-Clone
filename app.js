//  <div id="parent">
//     <div id="child">
//         <h1 id="newHeading"></h1>
//         <h2></h2>
//     </div>
//  </div>
//Creating Above structure (Nn ested HTML structure using React):
const parent =React.createElement(
    "div",{id:"parent"}, 
    [
            React.createElement(
                "div",{id:"child1"}, 
                [
                    React.createElement(
                    "h1",{id:"newHeading"},
                    "Heading under 2 div"
                    ),
                    React.createElement(
                    "h2",{},"This is an sibling to h1"
                    )
                ]
            ),
            React.createElement(
                "div",{id:"child2"},
                [
                    React.createElement(
                        "h1",{},"h1 in 2 div and child2"
                    ),
                    React.createElement(
                        "h2",{},"h2 in child2"
                    )
                ]
            )
    ]
    )

console.log(parent);

const heading = React.createElement("h1",{id:"heading"},"Hello World From React");

//console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//console.log(root);

root.render(parent); 
