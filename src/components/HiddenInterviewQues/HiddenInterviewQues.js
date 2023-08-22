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
          <NavLink to="/resize-observer">Resize Observer basic example</NavLink>
        </li>
        <li>
          <NavLink to="/custom-event">Custom Javascript Event Creation</NavLink>
        </li>
        <li>
          <NavLink to="/custom-event-2">
            Custom Javascript Event Creation 2
          </NavLink>
        </li>
        <li>
          <NavLink to="/solar-system">
            Solar System Sun, Earth, Moon CSS
          </NavLink>
        </li>
        <li>
          <NavLink to="/main-thread-block">
            Blocking Main Thread Using Javascript Date WEB API
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HiddenInterviewQues;
