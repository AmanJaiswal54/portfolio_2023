import styled from "styled-components";

const NavItems = () => {
  return (
    <NavItemsWrapper>
      <NavItem>Home</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Projects</NavItem>
      <NavItem>Contact</NavItem>
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
`;
