import styled from "styled-components";
import Tailwind from "../../utils/images/tailwind.svg";
import CSS from "../../utils/images/css.svg";
import HTML from "../../utils/images/html.svg";
import React from "../../utils/images/react.svg";
import Javascript from "../../utils/images/javascript.svg";
import Linkedin from "../../utils/images/linkedin.svg";
import Github from "../../utils/images/github.svg";
import Profile from "../../utils/images/profile.jpg";

const Introduction = () => {
  return (
    <Wrapper className="home">
      <HorizontalContainer>
        <AboutDescriptionWrapper>
          <Title>Front-End Javascript, React Developer</Title>
          <Description>
            Hi, I'm Aman Jaiswal. A passionate Front-end Javascript, React
            Developer based in Pune, India. 📍
          </Description>
          <SkillsWrapper style={{ paddingLeft: 0 }}>
            <Skill
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/aman-jaiswal-5319a0127/";
              }}
            >
              <SkillImage src={Linkedin} title="Linkedin"></SkillImage>
            </Skill>
            <Skill
              onClick={() => {
                window.location.href = "https://github.com/AmanJaiswal54";
              }}
            >
              <SkillImage src={Github} title="Github"></SkillImage>
            </Skill>
          </SkillsWrapper>
        </AboutDescriptionWrapper>
        <ProfilePictureWrapper>
          <img
            src={Profile}
            style={{
              width: "60%",
              borderRadius: "50%",
              filter: "drop-shadow(10px 10px 10px gray)",
            }}
          />
        </ProfilePictureWrapper>
      </HorizontalContainer>
      <TechStackWrapper>
        <TechTitle>Tech Stack</TechTitle>
        <SkillsWrapper>
          <Skill>
            <SkillImage title="Javascript" src={Javascript} />
          </Skill>
          <Skill>
            <SkillImage title="React" src={React} />
          </Skill>
          <Skill>
            <SkillImage title="HTML" src={HTML} />
          </Skill>
          <Skill>
            <SkillImage title="CSS" src={CSS} />
          </Skill>
          <Skill>
            <SkillImage title="Tailwind" src={Tailwind} />
          </Skill>
        </SkillsWrapper>
      </TechStackWrapper>
    </Wrapper>
  );
};

export default Introduction;

const Wrapper = styled.section`
  height: 100vh;
  position: relative;
`;

const HorizontalContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 100px;
  height: 70%;
`;

const AboutDescriptionWrapper = styled.div`
  width: 50%;
  margin: 50px;
`;

const Title = styled.h1`
  font-size: 55px;
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

const TechStackWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

const TechTitle = styled.div`
  border-right: 2px solid rgba(45, 46, 50, 0.5);
  padding-right: 20px;
`;

const SkillsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  list-style-type: none;
`;

const Skill = styled.li`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.09);
  cursor: pointer;
  display: flex;
`;

const SkillImage = styled.img`
  width: 30px;
  height: 30px;
`;
