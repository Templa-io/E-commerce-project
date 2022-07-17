import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ReactMainSlider from "./ReactMainSlider";

function Products(props) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  const slides = [1, 2, 3, 4, 5, 6, 7, 8];

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        {/* <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div> */}
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <Container>
          <Buttons>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("women's clothing")}
            >
              Women's Clothing
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("jewelery")}
            >
              Jewelery
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("electronics")}
            >
              Electronics
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => setFilter(data)}
            >
              All
            </button>
          </Buttons>
          <ReactMainSlider />
        </Container>

        {/* <ReactMainSlider /> */}
        {filter.map((product) => {
          return (
            <>
              <MainSliderContainer>
                <MdKeyboardArrowLeft
                  size={40}
                  className="slider-icon left "
                  onClick={slideLeft}
                />

                <Slider id="slider">
                  {slides.map((slide, index) => {
                    return (
                      <SlideCard key={product.id}>
                        <SlideCardImage>
                          <img
                            src={product.image}
                            height="250px"
                            alt={product.title}
                          />
                        </SlideCardImage>
                        <SlideCardBody>
                          <h5>{product.title.substring(0, 12)}...</h5>
                          <p>${product.price}</p>
                          <Link
                            to={"/products/${product.id}"}
                            class="btn btn-outline-dark"
                          >
                            Buy Now
                          </Link>
                        </SlideCardBody>
                      </SlideCard>
                    );
                  })}
                </Slider>
                <MdKeyboardArrowRight
                  size={40}
                  className="slider-icon right"
                  onClick={slideRight}
                />
              </MainSliderContainer>
            </>
          );
        })}
      </>
    );
  };

  return (
    // <div>
    // <div className="container my-5 py-5">
    // <div className="row">
    // <div className="col-12 mb-5"></div>
    // </div>
    <div className="justify-content-center">
      {loading ? <Loading /> : <ShowProducts />}
    </div>
    // </div>
    // </div>
  );
}

export default Products;

const Buttons = styled.div`
  margin: 5rem 0;
  padding-left: 3rem;
`;
const MainSliderContainer = styled.div`
  position: relative;
  margin: 5rem 0;
  display: flex;
  align-items: center;
`;
const Slider = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  scroll-behavior: smooth;
  overflow-x: hidden;
`;
const SlideCard = styled.div`
  width: 320px;
  height: 450px;
  border-radius: 10px;
  display: inline-block;
  margin-right: 20px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 12%);
`;
const SlideCardImage = styled.div`
  width: 100%;
  height: 300px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const SlideCardBody = styled.div`
  color: back;
  background: white;
  text-align: center;
  height: 150px;
  padding: 5px;
`;
const Container = styled.div``;
