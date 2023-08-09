import React from 'react'
import { Link} from 'react-router-dom'
import { styled } from 'styled-components'
import { Navigate,useLocation } from 'react-router-dom'
function Menu() {
   
  return (
    <MenuDiv className='flex flex-column '>
        <UL className='d-flex  flex-column flex-'>
            <StyledLink  to="pokemons">Get All Pokemons</StyledLink>
            <StyledLink to="colors">Colors</StyledLink>
            <StyledLink to="abilities">Abities</StyledLink>
            <StyledLink to="moves">Moves</StyledLink>
        </UL>
    
    </MenuDiv>
  )
}
const MenuDiv = styled.div`
display:flex;
flex-direction:column;

`
const UL = styled.ul`
display:flex;
flex-direction:column;
padding:50px;

`
const StyledLink = styled(Link)`
color:black;
text-decoration:none;
&:hover {
  color: red; // <Thing> when hovered
}

`

export default Menu