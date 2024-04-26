import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function Search() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const submitHandler = (e)=> {
        e.preventDefault();
        navigate("/searched/"+input);
        setInput('');
    }
  return (
    <FormStyle onSubmit={submitHandler}>
        <input onChange={((e)=> setInput(e.target.value))} type="text" value={input} placeholder="Search Any Recipe Here..."/>
        <FaSearch />
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: auto;
    position: relative;
    width: 60%;
    margin-top: 2rem;
   input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 100%;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
   }

   svg {
    position: absolute;
    left: 3%;
    top: 50%;
    color: blanchedalmond;
    transform: translateY(-50%);
   }
`

export default Search