import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Searched() {
  const [searched, SetSearched] = useState([]);
  const params = useParams();
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipies = await data.json();
    SetSearched(recipies.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <Container>
      <h3>{`${params.search} recipes`}</h3>
      <Grid>
        {searched &&
          searched.map((item) => {
            return (
              <Card key={item.id}>
                <Link to={"/recipe/" + item.id}>
                  <img src={item.image} alt={item.image} />
                  <h4>{item.title}</h4>
                </Link>
              </Card>
            );
          })}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  h3 {
    text-align: center;
  }
`;

const Grid = styled.div`
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
    color: #464646;
  }
`;

export default Searched;
