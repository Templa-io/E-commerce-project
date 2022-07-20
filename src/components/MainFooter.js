import React from "react";
import styled from "styled-components";

function MainFooter() {
  return (
    <>
      <MainContainer>
        <BodyContent>
          <h>ABOUT</h>
          <p>News</p>
          <p>Show rooms</p>
          <p>Our studio</p>
          <p>Histories</p>
        </BodyContent>
        <BodyContent>
          <h>CUSTOMER SERVICE</h>
          <p>News</p>
          <p>Show rooms</p>
          <p>Our studio</p>
          <p>Histories</p>
        </BodyContent>
        <BodyContent>
          <h>FURNITURE</h>
          <p>News</p>
          <p>Show rooms</p>
          <p>Our studio</p>
          <p>Histories</p>
        </BodyContent>
        <BodyContent>
          <h>ACCESORIES</h>
          <p>News</p>
          <p>Show rooms</p>
          <p>Our studio</p>
          <p>Histories</p>
        </BodyContent>
      </MainContainer>
    </>
  );
}

export default MainFooter;

const MainContainer = styled.div`
  padding: 10rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const BodyContent = styled.div`
  text-align: center;

  h {
    font-weight: bold;
  }
  p {
    inline-height: 1.5px;
  }
`;
