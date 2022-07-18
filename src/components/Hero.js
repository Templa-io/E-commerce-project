import React from "react";
import { Button } from "./Buttons";
import styled from "styled-components";
import Cat from "../assets/CAt.png";

function Hero() {
  return (
    <>
      <Section>
        <Container>
          <ColumnLeft>
            <h>DREXEL</h>
            <p>PETS SLEEPING BAG</p>

            <Button to="/products" primary="true">
              <b>VIEW MORE</b>
            </Button>
          </ColumnLeft>
          <ColumnRight>
            <img src={Cat} alt="product" />
          </ColumnRight>
        </Container>
      </Section>
    </>
  );
}

export default Hero;

const Section = styled.section`
  width: 100%;
  background: light;
  height: 100%;
  margin-top: 2rem;
`;
const Container = styled.div`
  display: grid;
  background: lightgray;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px;
  margin: 0 10rem;
  height: 250px;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 5rem;
  margin-bottom: 5rem;

  h {
    margin-bottom: 1rem;
    color: black;
    font-size: 30px;
  }

  p {
    margin-bottom: 2rem;
    color: gray;
  }
`;
const ColumnRight = styled.div`
  padding: 0 6rem;
  display: flex;
  justify-content: right;
  align-items: right;
  margin: -150px;

  img {
    width: 400px;
    height: 500px;
    padding-bottom: 4rem;
    object-fit: cover;

    @media screen and (max-width: 768) {
      width: 90%;
      height: 90%;
    }
  }
`;