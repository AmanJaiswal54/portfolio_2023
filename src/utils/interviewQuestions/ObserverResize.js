import { useEffect } from "react";
import QuestionFragment from "../../container/QuestionFragment";

export default ObserverResize = () => {
  useEffect(() => {
    let observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.style.backgroundColor =
          entry.contentRect.width > 200 ? "red" : "green";
        console.log("entry", entry);
      });
    });

    observer.observe(document.querySelector(".re-size"));
  }, []);
  return (
    <QuestionFragment>
      <div>Resize Observer</div>

      <section style={{ background: "white", border: "1px solid gray" }}>
        <textarea
          type="text"
          className="re-size"
          style={{ background: "green" }}
        ></textarea>
      </section>
    </QuestionFragment>
  );
};
