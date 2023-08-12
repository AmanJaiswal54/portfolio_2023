import React from "react";
import ReactDOM from "react-dom/client";
import MainComponent from "./src/components/MainComponent";


// const div = document.createElement("div");
// div.innerHTML = "HELLO World From JS";

const root = document.querySelector(".root");
// root.appendChild(div);


// using CDN - no need to install react/react-dom
// const divReact = React.createElement("div", { className: "react-div" }, [
//   React.createElement(
//     "div",
//     { className: "child1" },
//     "Hello World from React 1"
//   ),
//   React.createElement(
//     "div",
//     { className: "child2" },
//     "Hello World from React 2"
//   ),
// ]);

const rootReact = ReactDOM.createRoot(root);
rootReact.render(<MainComponent/>);
