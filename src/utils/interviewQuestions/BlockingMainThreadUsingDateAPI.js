import { useEffect } from "react";
import QuestionFragment from "../../container/QuestionFragment";
import { styled } from "styled-components";

const BlockingMainThreadUsingDateAPI = () => {
  useEffect(() => {
    // simulate code to block main thread for 10 seconds
    let startTime = new Date().getTime();
    let endTime = startTime;
    while (endTime < startTime + 10000) {
      endTime = new Date().getTime();
    }

    const tenSecondsEndDiv = document.createElement("div");
    tenSecondsEndDiv.innerHTML = "Ten Seconds Main Thread Blocking End";
    document.querySelector(".tenSecondsEndDiv").appendChild(tenSecondsEndDiv);

    const endDiv = document.createElement("div");
    endDiv.innerHTML = "End";
    document.querySelector(".end").appendChild(endDiv);
  }, []);

  return (
    <QuestionFragment>
      <div>Blocking Main Thread Using Javascript Date WEB API</div>

      <section style={{ background: "white", border: "1px solid gray" }}>
        <BlackText className="start">Start</BlackText>
        <BlackText className="tenSecondsStartDiv">
          Ten Seconds Main Thread Blocking Start
        </BlackText>
        <BlackText className="tenSecondsEndDiv"></BlackText>
        <BlackText className="end"></BlackText>
      </section>
    </QuestionFragment>
  );
};

export default BlockingMainThreadUsingDateAPI;

const BlackText = styled.div`
  color: black;
`;
