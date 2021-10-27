import React from "react";
import styled from "styled-components";
import How from "../image/how.jpg";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  height: 15%;
  margin-left: 100px;
`;

const Right = styled.div`
  width: 50%;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1``;
const Description = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Service = () => {
  return (
    <>
      <Container>
        <Left>
          <Image src={How} />
        </Left>
        <Right>
          <Wrapper>
            <Title>Simple process to start</Title>
            <Description>
              We provide a digital experience service to startups and small
              businesses looking for a partner of their digital media, design &
              development, lead generation and communication requirments. We
              work with you, not for you. Although we have a great resource.
            </Description>
            <CardContainer></CardContainer>
          </Wrapper>
        </Right>
      </Container>
    </>
  );
};
