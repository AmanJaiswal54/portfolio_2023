import { useEffect, useState } from "react";
import QuestionFragment from "../../container/QuestionFragment";

export default InfiniteScroll = () => {
  const [count, setCount] = useState(50);
  let listItems = [];
  for (let i = 1; i <= count; i++) {
    listItems.push(<div key={i}>{i}</div>);
  }
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        setCount((count) => {
          return count + 50;
        });
      }
    };
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return <QuestionFragment>{listItems}</QuestionFragment>;
};
