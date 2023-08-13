import React from "react";
import styled from "styled-components";
import Singtel from "../../utils/images/singtelAccessories.png";
import Optus from "../../utils/images/optusMobile.png";
import DBSBank from "../../utils/images/dbsBank.png";

const Card = (props) => {
  const { card } = props;
  const { title, description, technology, url, imageNumber } = card;

  const Images = [DBSBank, Singtel, Optus];

  const clickHandler = () => {
    window.location.href = url;
  };
  return (
    <CardWrapper>
      <DetailsWrapper>
        <Title
          onClick={() => {
            clickHandler();
          }}
        >
          {title}
        </Title>
        <Description>{description}</Description>
        <TechStack>
          {technology.map((tech) => {
            return <Tech key={tech}>{tech}</Tech>;
          })}
        </TechStack>
      </DetailsWrapper>
      <ImageWrapper>
        <Image
          onClick={() => {
            clickHandler();
          }}
          src={Images[imageNumber]}
        />
      </ImageWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: flex;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.09);
  margin: 50px 0;
  border-radius: 20px;
`;

const DetailsWrapper = styled.div`
  width: 50%;
  padding: 30px 50px;
`;

const Title = styled.h4`
  font-size: 20px;
  margin: 10px 0;
  text-align: center;
  cursor: pointer;
`;

const Description = styled.p`
  color: #555;
  font-family: Mulish, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
`;

const TechStack = styled.div`
  padding: 0 50px;
  display: flex;
  justify-content: space-evenly;
`;

const Tech = styled.span`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.09);
  padding: 10px 10px;
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
  width: 50%;
  height: 360px;
  //   padding: 30px 50px;
  // display: flex;
  // justify-content: center;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  width: 100%;
  transform: translateY(0);
  transition: 2s ease-out;

  &:hover {
    object-fit: cover;
    transform: translateY(calc(-100% + 400px));
    transition: 2s ease-out;
  }
`;
