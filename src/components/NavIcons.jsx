import React from 'react'
import {GiNoodles, GiChopsticks,GiIndianPalace, GiPizzaSlice} from 'react-icons/gi'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import styled from "styled-components";
import {NavLink} from 'react-router-dom'

function NavIcons() {
  return (
    <List>
       <SLink to={'/cuisine/Indian'} >
        <GiIndianPalace />
        <h5>Indian</h5>
       </SLink>
       <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h5>American</h5>
       </SLink >
       <SLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h5>Thai</h5>
       </SLink >
       <SLink to={'/cuisine/Chinese'}>
        <GiChopsticks />
        <h5>Chinese</h5>
       </SLink >
       <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h5>Italian</h5>
       </SLink >
    </List>
  )
}

const List = styled.div`
    display: flex;
    height: 8rem;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    margin: 0 2rem;
    a{
      text-decoration: none;
    }

 
`

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .4rem;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
  transform: scale(.8);
  h5{
    font-size: .9rem;
  }
  svg {
    color:blanchedalmond  ;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`

export default NavIcons