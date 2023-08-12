import styled from "styled-components";

const Logo = () => {
    return <Wrapper>
        <span>Aman.dev</span>
    </Wrapper>
}

export default Logo;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
  font-size: 20px;
  cursor: pointer;
`;