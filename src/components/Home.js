import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Buttons";
// import Products from "./Products";
import Stu from "../assets/C1.png";

function Home() {
  return (
    <Section>
      <ColumnLeft>
        <h1>
          CHERNER <span>ARMCHAIR</span>
        </h1>
        <p>Enim pariatur mollit duis eiusmod incididunt magna</p>
        <Button to="/products" primary="true">
          <b>VIEW MORE</b>
        </Button>
      </ColumnLeft>
      <ColumnRight>
        <img src={Stu} alt="product" />
      </ColumnRight>

      {/* <Products /> */}
    </Section>
  );
}

export default Home;
// const Section = styled.section`
//   width: 100%;
//   height: 100%;
//   padding: 0 10rem;
// `;
const Section = styled.div`
  padding: 3rem calc((100vw-1300px) / 2);
  background: lightgray;
  display: grid;
  max-width: 100%;
  grid-template-columns: 1fr 1fr;
  margin: 0 10rem;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  background: lightgray;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;

  h1 {
    margin-left: 2rem;
    color: gray;
    font-size: 2rem;
  }
  span {
    color: black;
  }
  p {
    margin-left: 2rem;
    margin-bottom: 2rem;
    color: gray;
  }
`;
const ColumnRight = styled.div`
  display: flex;

  img {
    width: 400px;
    height: 400px;
    object-fit: cover;

    @media screen and (max-width: 768) {
      width: 90%;
      height: 90%;
    }
  }
`;
