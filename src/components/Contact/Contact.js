import styled from "styled-components";
import Location from "../../utils/images/location.svg";
import Mail from "../../utils/images/mail.svg";

const Contact = () => {
  return (
    <Wrapper className="contact">
      <AboutDescriptionWrapper>
        <Title>Contact</Title>
        <Subtitle>Don't be shy! Hit me up! 👇</Subtitle>
        <ContactMeWrapper>
          <Container>
            <ImageWrapper>
              <Image title="Location" src={Location} />
            </ImageWrapper>
            <ItemWrapper>
              <Item>Location</Item>
              <ItemDescription>Pune, India</ItemDescription>
            </ItemWrapper>
          </Container>
          <Container>
            <ImageWrapper>
              <Image title="Mail" src={Mail} />
            </ImageWrapper>
            <ItemWrapper>
              <Item>Mail</Item>
              <ItemDescription
                type="mail"
                href="mailto:amanjaiswal98936@gmail.com"
              >
                amanjaiswal98936@gmail.com
              </ItemDescription>
            </ItemWrapper>
          </Container>
        </ContactMeWrapper>
      </AboutDescriptionWrapper>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  height: 70vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const AboutDescriptionWrapper = styled.div`
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

const ContactMeWrapper = styled.ul`
  padding-left: 0;
  margin-top: 40px;
  display: flex;
  gap: 60px;
`;

const Container = styled.li`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const ImageWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.09);
  cursor: pointer;
  display: flex;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.h4`
  font-size: 16px;
  margin: 10px 0;
`;

const ItemDescription = styled.a`
  color: #767676;
  cursor: pointer;
  font-family: Mulish, sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  margin: 0;
`;
