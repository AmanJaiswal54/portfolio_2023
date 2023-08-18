import { useEffect } from "react";
import QuestionFragment from "../../container/QuestionFragment";

const CustomJavascriptEvent2 = () => {
  useEffect(() => {
    const button = document.querySelector(".click");
    const textDiv = document.querySelector(".default-text");

    const custom = new CustomEvent("custom:setText", {
      detail: "xyz",
      bubbles: true, // bubble:true will help us to listen custom event at document
    });

    document.addEventListener("custom:setText", (e) => {
      console.log("e", e.detail);
      textDiv.innerHTML = e.detail;
    });

    button.addEventListener("click", (e) => {
      // always need to pass dispatchEvent in any default events i.e click/onchange
      e.target.dispatchEvent(custom);
    });
  }, []);

  return (
    <QuestionFragment>
      <div>Custom Event Creation 2</div>
      <section style={{ background: "white", border: "1px solid gray" }}>
        <div className="default-text" style={{ color: "black" }}>
          Text from JSX
        </div>
        <button className="click">Click</button>
      </section>
    </QuestionFragment>
  );
};

export default CustomJavascriptEvent2;
