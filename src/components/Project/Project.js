import styled from "styled-components";
import Card from "../Card/Card";
import CardsData from "../../utils/json/CardsData";

const Project = () => {
  return (
    <Wrapper className="portfolio">
      <ProjectContainer>
        <Title>Portfolio</Title>
        <Subtitle>Each project is a unique piece of development</Subtitle>
        <CardsWrapper>
          {CardsData.map((card) => {
            return <Card key={card.title} card={card} />;
          })}
        </CardsWrapper>
      </ProjectContainer>
    </Wrapper>
  );
};

export default Project;

const Wrapper = styled.section`
`;

const ProjectContainer = styled.div`
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

const CardsWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
`;
