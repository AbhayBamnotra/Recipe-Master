import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {

    const check = localStorage.getItem('popular')

    if(check) {
         setPopular(JSON.parse(check));
    }else if(check === undefined){

        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=18`
        );
        const data = await api.json();

        console.log(data);
        localStorage.setItem('popular', JSON.stringify(data.recipes));
        setPopular(data.recipes);
    }else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=18`
      );
      const data = await api.json();

      console.log(data);
      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <div>
      <Container>
        <h3>Popular Recipies</h3>
        <Splide 
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            type: "loop",
            drag: "free",
            gap: '2rem',
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 1
            }
          }}
          extensions={{ AutoScroll }}
        >
          {popular.map((recipe) => {
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
padding: 1rem 0;
  margin: 4rem 0;
`;
const Card = styled.div`
 min-height: 14rem;
 max-height: 25rem;
 width: 18rem;
 border-radius: 2rem;
 overflow: hidden;
 position: relative;
 cursor: pointer;
 transition-duration: 250ms;
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
    font-size: .8rem;
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

export default Popular;
