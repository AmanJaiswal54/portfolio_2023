import styled from "styled-components";
import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";
import About from "./About/About";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const MainComponent = () => {
  return (
    <Wrapper>
      <Header />
      <BodyContainer>
        <Introduction />
        <About />
        <Project />
        <Contact/>
      </BodyContainer>
      <Footer/>
    </Wrapper>
  );
};

export default MainComponent;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #2d2e32;
  font-weight: 600;
  font-family: Poppins, sans-serif;
`;

const BodyContainer = styled.div`
  margin: auto;
  width: 90%;
`;
