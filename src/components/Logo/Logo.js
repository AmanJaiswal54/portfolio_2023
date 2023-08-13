import styled from "styled-components";

const Logo = () => {
  const navClickHandler = (nav) => {
    document.querySelector(`.${nav}`).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Wrapper>
      <span
        onClick={() => {
          navClickHandler("home");
        }}
      >
        Aman.dev
      </span>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
  font-size: 20px;
  cursor: pointer;
`;
