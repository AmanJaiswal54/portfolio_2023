import { useEffect } from "react";
import QuestionFragment from "../../container/QuestionFragment";

const CustomJavascriptEvent = () => {
  useEffect(() => {
    const button = document.querySelector(".double-click");

    button && button.addEventListener("custom:doubleClick", (e) =>{
      console.log('clickWaitTime', e.detail.clickWaitTime);
      button.innerHTML = 'custom double click is working'
    });


    let last_click = 0;
    let waitTime = 500;
    button && button.addEventListener("click", (e) => {
      let clickWaitTime = e.timeStamp - last_click;
      console.log('clickWaitTime', clickWaitTime);
      if (clickWaitTime > waitTime) {
        last_click = e.timeStamp;
        return;
      }

      const doubleClickEvent = new CustomEvent("custom:doubleClick", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: { clickWaitTime },
      });

      e.target.dispatchEvent(doubleClickEvent);
      last_click = 0;
    });

    button && button.addEventListener("doubleClick", (e) => {
      console.log("Double Click", e.detail.clickWaitTime);
    });
  }, []);

  return (
    <QuestionFragment>
      <div>Custom Event Creation</div>
      <a
        href="https://blog.webdevsimplified.com/2022-04/js-custom-events/"
        target="_blank"
      >
        Learning Link
      </a>

      <section style={{ background: "white", border: "1px solid gray" }}>
        <button className="double-click">double Click</button>
      </section>
    </QuestionFragment>
  );
};

export default CustomJavascriptEvent;
