import styled from "styled-components";
import Logo from "../Logo/Logo";
import NavItems from "../NavItems/NavItems";

const Header = () => {
  return (
    <Wrapper className="header">
      <Logo/>
      <NavItems/>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.09);
  position: fixed;
  z-index: 200;
  background: white;
  top: 0;
`;
