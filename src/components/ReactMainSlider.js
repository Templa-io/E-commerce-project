import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
// import Products from "./Products";

const ReactMainSlider = (props) => {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8];

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <MainSliderContainer>
      <Slider id="slider">
        {slides.map((slide, index) => {
          return (
            <SliderCard>
              <SliderCardImage>
                <img src="/" alt="" />
              </SliderCardImage>
              <SliderCardBody>
                <p>tittle</p>
                <h>description</h>
              </SliderCardBody>
            </SliderCard>
          );
        })}
      </Slider>
      <Scrollbar>
        <p size={40} className="slider-icon left " onClick={slideLeft}>
          BACK
        </p>

        <p size={40} className="slider-icon right" onClick={slideRight}>
          <span>NEXT</span>
        </p>
      </Scrollbar>
    </MainSliderContainer>
  );
};

export default ReactMainSlider;

const Slider = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  scroll-behavior: smooth;
  overflow-x: hidden;
`;
const MainSliderContainer = styled.div`
  position: relative;
  display: flex;
  height: 500px;
`;
const SliderCard = styled.div`
  width: 320px;
  height: 400px;
  background: lightpink;
  border-radius: 10px;
  display: inline-block;
  margin-right: 20px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 12%);
`;
const SliderCardImage = styled.div`
  width: 100%;
  height: 300px;
  background: lightgray;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const SliderCardBody = styled.div`
  color: back;
  background: white;
  text-align: center;
  height: 100px;
  padding: 5px;
`;
const Scrollbar = styled.div`
  position: relative;
  display: flex;
  margin: -50px;
  margin-right: 50px;
  padding-right: 40px;
  p {
    font-size: 15px;
    padding: 5px;
    color: black;
  }
  span {
    color: gray;
  }
`;
