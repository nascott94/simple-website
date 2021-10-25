import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;

const Left = styled.div`
  width: 60%;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Right = styled.div`
  width: 40%;
`;
export const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
      </Left>
      <Right></Right>
    </Container>
  );
};
