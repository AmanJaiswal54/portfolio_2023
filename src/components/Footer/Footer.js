import styled from "styled-components";
import Linkedin from "../../utils/images/linkedin.svg";
import Github from "../../utils/images/github.svg";

const Footer = () => {
  return (
    <Wrapper>
      <CopyrightWrapper>
        Copyright © 2023. All rights are reserved
      </CopyrightWrapper>
      <SkillsWrapper>
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
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.section`
  background-color: #2d2e32;
  display: flex;
  justify-content: space-around;
`;

const CopyrightWrapper = styled.div`
  padding: 50px 0;
  color: white;
`;

const SkillsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  list-style-type: none;
  padding: 18px 0;
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
  background: white;
`;

const SkillImage = styled.img`
  width: 30px;
  height: 30px;
`;
