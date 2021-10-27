import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 20px;
`;

const Text

export const MiniCard = () => {
  return (
    <>
      <Container>
        <Image />
        <Text>This is a service we provide</Text>
      </Container>
    </>
  );
};
