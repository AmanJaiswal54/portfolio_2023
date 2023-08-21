import React from "react";
import ReactDOM from "react-dom/client";
import MainComponent from "./src/components/MainComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/components/About/About";
import Project from "./src/components/Project/Project";
import Contact from "./src/components/Contact/Contact";
import HiddenInterviewQues from "./src/components/HiddenInterviewQues/HiddenInterviewQues";
import InfiniteScroll from "./src/utils/interviewQuestions/InfiniteScroll";
import IntersectObserver from "./src/utils/interviewQuestions/IntersectObserver";
import ObserverResize from "./src/utils/interviewQuestions/ObserverResize";
import CustomJavascriptEvent from "./src/utils/interviewQuestions/CustomJavascriptEvent";
import CustomJavascriptEvent2 from "./src/utils/interviewQuestions/CustomJavascriptEvent2";
import SolarSystemCSS from "./src/utils/interviewQuestions/SolarSystemCSS";

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

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent />,
    errorElement: <div>ERROR PAGE !!</div>,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/hidden-gems",
    element: <HiddenInterviewQues />,
  },
  {
    path: "/infinite-scroll",
    element: <InfiniteScroll />,
  },
  {
    path: "/intersection-observer",
    element: <IntersectObserver />,
  },
  { path: "/resize-observer", element: <ObserverResize /> },
  { path: "/custom-event", element: <CustomJavascriptEvent /> },
  { path: "/custom-event-2", element: <CustomJavascriptEvent2 /> },
  {
    path: "/solar-system",
    element: <SolarSystemCSS />,
  },
]);

const rootReact = ReactDOM.createRoot(root);
// rootReact.render(<MainComponent/>);

rootReact.render(<RouterProvider router={router} />);
