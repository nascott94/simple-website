import React from "react";
import styled from "styled-components";
import App from "../image/app.jpg";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 50px;
`;
const Image = styled.img`
  width: 60%;
`;
const Right = styled.div`
  width: 50px;
`;

const Title = styled.span`
  font-size: 70px;
`;
const SubTitle = styled.span`
  font-size: 24px;
`;
const Description = styled.p``;
const Button = styled.button``;

function Feature() {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>good </b> design
          <br />
          <b> good</b> business
        </Title>
        <SubTitle>We know good design means good business</SubTitle>
        <Description>
          We help our clients succeed by creating brand identities, digital
          experiences and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Description>
        <Description>
          We care about your business and guarantee you will achieve your
          marketing goals.
        </Description>
        <Button>Learn More</Button>
      </Right>
    </Container>
  );
}

export default Feature;
