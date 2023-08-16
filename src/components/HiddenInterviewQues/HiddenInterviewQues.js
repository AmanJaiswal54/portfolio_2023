import { NavLink } from "react-router-dom";

const HiddenInterviewQues = () => {
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <NavLink to="/infinite-scroll">
            Infinite Scroll Using Scroll Event Listener
          </NavLink>
        </li>
        <li>
          <NavLink to="/intersection-observer">
          Intersection Observer basic example
          </NavLink>
        </li>
        <li>
          <NavLink to="/resize-observer">
          Resize Observer basic example
          </NavLink>
        </li>
        <li>
          <NavLink to="/custom-event">
          Custom Javascript Event Creation
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HiddenInterviewQues;
