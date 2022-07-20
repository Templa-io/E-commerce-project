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
          <p>Contact Us</p>
          <p>Services</p>
          <p>Register/Login</p>
          <p>FAQs</p>
        </BodyContent>
        <BodyContent>
          <h>FURNITURE</h>
          <p>Chairs</p>
          <p>Tables</p>
          <p>Storage</p>
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

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;
const BodyContent = styled.div`
  text-align: left;
  padding-left:5rem;


  h {
    font-weight: bold;
  }
  p {
    margin-top: 2rem;
    font-size: 14px;
    line-height: 0px;
    transition: 0.3s !important;
    &:hover {
        background: ${({ primary }) => (primary ? "#F26A2E" : "#F26A2E")};
        transform: translateY(-2px);
  }
`;
