// import React from "react";

const QuestionFragment = (props) => {
  const { children } = props;
  return (
    <div
      style={{
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default QuestionFragment;
