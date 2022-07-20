import React from "react";
import styled from "styled-components/macro";
import { Button } from "./Buttons";

function Information() {
  return (
    <>
      <Section>
        <Container>
          <h1>KEEP UPDATED</h1>
          <p>Enim pariatur mollit duis eiusmod incididunt magna</p>
          <Label>
            <Input></Input>
            <Placeholder>Enter your name</Placeholder>
            <SubscriberButton>Subscriber</SubscriberButton>
          </Label>
        </Container>

        {/* <Products /> */}
      </Section>
    </>
  );
}

export default Information;
const Section = styled.section`
  width: 100%;
  padding: 0 10rem;
  align-items: center;
  display: flex;
  margin: 0rem;
`;
const Container = styled.div`
  background: lightgray;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  text-align: center;
  justify-content: center;
  line-height: 1.4;
  padding: 10rem;

  h1 {
    font-size: 20px;
  }

  p {
    color: gray;
  }
`;
const Label = styled.div`
  position: relative;
  display: flex;
`;
const Input = styled.div`
  padding: 1rem;
  width: 100%;
  background-color: #faf7f2;
  border: none;
  :focus-visible {
    border: none;
  }
  &:focus {
    border: none;
  }
`;
const Placeholder = styled.div`
  color: #d4d1cd;
  position: absolute;
  left: 5%;
  top: 23%;
  font-size: 15px;

  transition: top 0.3s ease-in, color 0.3s ease-in, font size 0.3s ease-in;
`;
const SubscriberButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  text-align: center;
  display: block;
  height: 2rem;
  right: 0;
  line-weight: normal;
  color: white;
  background-color:black;
  transition: 0.3s !important;
  border: 0;
  outline-style: none;
  text-transformation: uppercase;
  cursor: pointer;
  width: 100px;
  padding: 0rem;

  &:focus {
    outline: none;
  }
  &:hover {
    background: ${({ primary }) => (primary ? "#F26A2E" : "#F26A2E")};
    transform: translateY(-2px);
`;
