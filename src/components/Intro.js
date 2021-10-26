import React from "react";
import styled from "styled-components";
import Woman from "../image/woman.jpg";
import { AnimatedShapes } from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  width: 60%;
  font-size: 50px;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 15px;
  background-color: #afc4c4;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #358e9d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: grey;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 45%;
  padding-top: 50px;
  padding-right: 100px;
`;

const Image = styled.img`
  width: 100%;
`;

export const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call us (123)-456-7890</Phone>
            <ContactText>For any questions or concerns</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
};
