import QuestionFragment from "../../container/QuestionFragment";
import { keyframes, styled } from "styled-components";

const SolarSystemCSS = () => {
  return (
    // <QuestionFragment>
    <Wrapper>
      Solar System Sun, Earth, Moon CSS
      <Orbit>
        <Sun>
          <Earth>
            <Moon></Moon>
          </Earth>
        </Sun>
      </Orbit>
    </Wrapper>
    // </QuestionFragment>
  );
};

export default SolarSystemCSS;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`\
`;

Orbit = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Sun = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fcbe24;
  box-shadow: 0 0 10px;
`;

const Earth = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(red, blue, green);
  box-shadow: 0 0 10px;
  top: 50%;
  transform-origin: top left;
  left: 50%;

  animation: ${rotate} 6s linear infinite;
`;

const Moon = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0 0 10px;
  background: linear-gradient(45deg, black, transparent);

  top: 50%;
  transform-origin: top left;
  left: 50%;

  animation: ${rotate} infinite;
  animation-duration: 3s;
`;
