import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Buttons";
// import Products from "./Products";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import Stu from "../assets/C1.png";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PaypalComponents from "./PaypalComponents";
import { useState } from "react";

function Home() {
  const [showPaypalButton, setShowPaypalButton] = useState(false);


  const initialOptions = {
    clientId: "AbTjWFpRNzdIiU3xIOgfARgNbxK4JY5KgcO9A1lwYph9SAlFKMEhxTVbI9FPEVxdsaFTtfPKMk8MXHLQ",
    currency: "USD",
    intent: "capture",
};

const handleBuyNowClick = () => {
  setShowPaypalButton((prevState) => !prevState);
};
  return (
    <PayPalScriptProvider options={initialOptions}>
    <Section>
      <ColumnLeft className="items-start w=[80%]">
        <h1>
          CHERNER <span>ARMCHAIR</span>
        </h1>
        <p>Enim pariatur mollit duis eiusmod incididunt magna</p>
        <strong >$399.0</strong>
        <button className="bg-[#FFE8A9] px-16 p-2 mt-4 font-semibold mb-4"
        onClick={handleBuyNowClick} primary="true">
          Buy now
        </button>
        {showPaypalButton && <PaypalComponents />}
      </ColumnLeft>
      <ColumnRight>
       <FontAwesomeIcon icon={faArrowLeft} className=" pt-32 text-[#999999]"/>
      <div className="mt-52"> 
       
      </div>
    
        <img src={Stu} alt="product" />
       <FontAwesomeIcon icon={faArrowRight} className="pt-32" />
        <div className=" 
        rotate-90 text-xl font-semibold
        ">
        <span className="text-3xl font-bold">01</span>
        <span className="text-[#999999] font-bold">/03</span>
        </div>
        <button className="absolute bottom-0 right-0 py-2 px-12 bg-[#FFE192] text-m" >Add to cart +</button>
      </ColumnRight>

      {/* <Products /> */}
    </Section>
 
    </PayPalScriptProvider>
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
  
    color: gray;
    font-size: 2rem;
  }
  span {
    color: black;
  }
  p {
 
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
