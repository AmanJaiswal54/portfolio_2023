import styled from "styled-components";

const Logo = () => {
  const navClickHandler = (nav) => {
    document.querySelector(`.${nav}`).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Wrapper>
      <Span
        onClick={() => {
          navClickHandler("home");
        }}
      >
        Aman.dev
      </Span>
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

const Span = styled.span`
  background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  &:hover {
    transform: scale(1.2);
  }
`;
