import React from 'react';
import ReactDOM from 'react-dom/client';

// const name = "Nguyễn Minh Quốc";
// const root = ReactDOM.createRoot(document.getElementById("root"));
//

// //React.createElement
// root.render(
//     React.createElement("h1", {style: {textAlign: "center"}}, name)
// );
//

// //JSX
// root.render(<h1 style={{textAlign: "center"}}>{name}</h1>);

//fruits
// const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry']
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <div>
//         <h1>List of fruits</h1>
//         <ul>
//             {fruits.map(item => (
//                 <li>{item}</li>
//             ))}
//         </ul>
//     </div>
// );

//date
const root = ReactDOM.createRoot(document.getElementById("root"));
const tick = () => {
    root.render(
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
};

setInterval(tick, 1000);