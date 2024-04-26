import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import "@splidejs/react-splide/css";
import { Link } from 'react-router-dom';
import { isVisible } from '@testing-library/user-event/dist/utils';


function Veggie() {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie');

    if(check) {
         setVeggie(JSON.parse(check));
    }else{
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=18&tags=vegetarian`
        );
        const data = await api.json();
        localStorage.setItem('veggie', JSON.stringify(data.recipes))
        console.log(data);
        setVeggie(data.recipes);
    }
  };

  return (
    <div>
      <Container>
        <h3>Our Vegetarian Recipies</h3>
        <Splide
            options={{
              perPage: 3,
              arrows: false,
              pagination: false,
              type: "loop",
              drag: "free",
              gap: '3rem',
              padding: '3rem 0rem',
              autoScroll: {
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
                speed: 1
              }
            }}
            extensions={{ AutoScroll }}
        >
          {veggie && veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'/recipe/'+recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Container>
    </div>
  );
}


const Container = styled.div`
  margin: 4rem 0;
`;
const Card = styled.div`
 min-height: 18rem;
 max-height: 25rem;
 width: 25rem;
 border-radius: 2rem;
 overflow: hidden;
 position: relative;
 cursor: pointer;
 transition-duration: 250ms;
 transform: scale(1);
 &:hover {
  transform: scale(1.04);
 }
  img {
    position: absolute;
    border-radius: 2rem;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%,0%);
    bottom: 5%;
    color: white;
    display: flex;
    align-items: center;
    font-weight: bold;
  }
`;
const Gradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5));
`

export default Veggie;