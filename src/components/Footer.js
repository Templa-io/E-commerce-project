import React from "react";
import styled from "styled-components";
import Image1 from "../assets/img1.png";
import Image2 from "../assets/img2.jpg";
import Image3 from "../assets/img3.png";
import Image4 from "../assets/img4.png";
import Image5 from "../assets/img5.png";
import Image6 from "../assets/img2.jpg";
function Footer() {
  return (
    <>
      <Container>
        <Logo>
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
          <img src={Image3} alt="" />
          <img src={Image4} alt="" />
          <img src={Image5} alt="" />
          <img src={Image6} alt="" />
        </Logo>
      </Container>
    </>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0 10rem;
`;
const Logo = styled.div`
  margin: 20px;

  img {
    height: 130px;
    padding: 20px;
    opacity: 0.65;
  }
`;
