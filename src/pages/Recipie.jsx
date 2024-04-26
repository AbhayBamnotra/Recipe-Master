import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
function Recipie() {
  const [recipe, setRecipe] = useState({});
  const [active, setActive] = useState("instructions");

  const params = useParams();
  const getrecipie = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    const recipesDetails = await data.json();
    console.log(recipesDetails);
    setRecipe(recipesDetails);
  };

  useEffect(() => {
    getrecipie(params.id);
  }, [params.id]);

  return (
    <DetailWrapper>
      <div className="title">
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.image} />
      </div>
      <Info>
        <div>
        <button
          className={active === "instructions" ? "active" : ""}
          onClick={() => setActive("instructions")}
        >
          Instructions
        </button>
        <button
          className={active === "ingridients" ? "active" : ""}
          onClick={() => setActive("ingridients")}
        >
          Ingredients
        </button>
        </div>
        {active === "instructions" && (
          <div>
            <h5 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h5>
            <h5 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h5>
          </div>
        )}
        {active === "ingridients" && (
          <ul>
            {recipe.extendedIngredients.map((lists) => (
              <li key={lists.id}>{lists.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 3rem;
  margin-top: 10rem;
  margin-bottom: 1rem;
  h2 {
    margin-bottom: 2rem;
    color: #464646;
  }
  img {
    height: 20rem;
  }
  
`;

const Info = styled.div`
  width: 40em;
  button {
    padding: 1rem 2.5rem;
    border: 4px solid #464644;
    margin: 0 4rem;
    color: #464644;
    cursor: pointer;
  }
  .active {
    background: linear-gradient(35deg, #494944, #313131);
    color: white;
  }

  h5 {
    line-height: 2.1;
    padding: 2rem 0;
  }
  li {
    font-weight: 600;
    line-height: 2.4;
  }
  ul {
    margin-top: 4rem;
  }
`;

export default Recipie;
