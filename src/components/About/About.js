import styled from "styled-components";
import Programmer from "../../utils/images/programmer.svg";

const About = () => {
  return (
    <Wrapper className="about">
      <ProfilePictureWrapper>
        <img
          src={Programmer}
          style={{
            width: "50%",
            filter: "drop-shadow(10px 10px 10px gray)",
          }}
        />
      </ProfilePictureWrapper>
      <AboutDescriptionWrapper>
        <Title>About Me</Title>
        <Subtitle>
          A dedicated Front-end Developer based in Pune, India. 📍
        </Subtitle>
        <Description>
          As a Senior Front-End Developer, I possess an impressive arsenal of
          skills in JavaScript, React, Redux, HTML, CSS, Tailwind. I excel in
          developing, designing and maintaining responsive websites that offer a
          smooth user experience. My expertise lies in crafting dynamic,
          engaging interfaces through writing clean and optimized code and
          utilizing cutting-edge development tools and techniques. I am also a
          team player who thrives in collaborating with cross-functional teams
          to produce outstanding web applications
        </Description>
      </AboutDescriptionWrapper>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const AboutDescriptionWrapper = styled.div`
  width: 50%;
  margin: 50px;
`;

const Title = styled.h3`
  font-size: 16px;
  color: #147efb;
  margin: 10px 0;
  text-transform: uppercase;
`;

const Subtitle = styled.h4`
  font-size: 25px;
  margin: 10px 0;
`;

const Description = styled.p`
  color: #555;
  font-family: Mulish, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
`;

const ProfilePictureWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;
