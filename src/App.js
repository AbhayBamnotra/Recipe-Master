import React from "react";
import { BiDish } from "react-icons/bi";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import NavIcons from "./components/NavIcons";
import Search from "./components/Search";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav>
          <BiDish />
          <Logo to={"/"}>RECIPE MASTER</Logo>
        </Nav>
        <Search />
        <NavIcons />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Nav = styled.div`
  display: flex;
  height:5rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  svg {
    font-size: 4.5rem;
    color: #464646;
    
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 40px;
  font-weight: 1000;
  color: #464646;
;`
export default App;
