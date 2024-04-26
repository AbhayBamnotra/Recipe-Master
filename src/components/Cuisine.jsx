import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../Loader";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const [loading, setLoading] = useState(false)
  const params = useParams();

  const getRecipe = async (name) => {
    setLoading(true);
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipies = await data.json();
    if(recipies){
      setLoading(false)
      setCuisine(recipies.results);
      console.log(recipies.results);
    }
  };

  useEffect(() => {
    getRecipe(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <Container>
      <h3>{`${params.type} Dishes`}</h3>
      <Grid 
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: .5}}  
      >
        {cuisine && cuisine.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={'/recipe/'+item.id}>
              <img src={item.image} alt={item.image} />
              <h4>{item.title}</h4>
              </Link>
            </Card>
          );
        })}
      </Grid>
      {loading && <Loader/> }
    </Container>
  );
}

const Container = styled.div`
  h3 {
    text-align: center;
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 4rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;


export default Cuisine;
