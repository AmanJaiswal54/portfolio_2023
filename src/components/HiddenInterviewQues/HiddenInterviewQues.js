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
      </ul>
    </div>
  );
};

export default HiddenInterviewQues;
