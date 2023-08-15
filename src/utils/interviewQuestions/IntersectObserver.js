import { useEffect } from "react";
import QuestionFragment from "../../container/QuestionFragment";

export default IntersectObserver = () => {
  let listItems = [];

  for (let i = 0; i <= 200; i++) {
    listItems.push(
      <div key={i} style={{ color: "black", fontSize: '100px' }} className="intersect">
        {i} 
      </div>
    );
  }
  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.style.color = entry.isIntersecting ? "green" : "black";
        console.log('entry', entry);
      });
    }, {threshold: 0.5});
    document
      .querySelectorAll(".intersect")
      .forEach((obj) => observer.observe(obj));
  }, []);
  return (
    <QuestionFragment>
      <div>Intersection Observer</div>

      <section style={{ background: "white", border: "1px solid gray" }}>
        <div style={{ height: "300px", width: "300px", overflow: "auto" }}>
          {listItems}
        </div>
      </section>
    </QuestionFragment>
  );
};
