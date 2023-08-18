import styled from "styled-components";
import { NavigationItems } from "../../utils/constant";
import { NavLink } from "react-router-dom";

const NavItems = () => {
  const navClickHandler = (event) => {
    document
      .querySelector(`.${event.target.innerHTML}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavItemsWrapper>
      {NavigationItems.map((item) => {
        return (
          <NavItem
            key={item}
            onClick={(e) => {
              navClickHandler(e);
            }}
          >
            {item}
          </NavItem>
        );
      })}
      <NavItem><NavLink to="/hidden-gems" style={{display: "none"}}>Questions</NavLink></NavItem>
    </NavItemsWrapper>
  );
};

export default NavItems;

const NavItemsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  margin-right: 70px;
  list-style-type: none;
`;

const NavItem = styled.li`
  margin: 20px;
  font-size: 16px;
  cursor: pointer;
  text-transform: capitalize;
  text-decoration: none;
  &:hover {
    transform: scale(1.2);
  }
`;
