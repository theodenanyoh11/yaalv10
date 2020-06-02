// Logo.js
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import LogoIcon from "./LogoIcon"

const LogoContainer = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
flex:1;  
position:relative; 
  z-index: 3;
  height: 70px;

`

const LogoWrap = styled.div`
  position:relative; 
  float: left;
  color: #333;
  
  
`
const Logo = () => {
  

  return (
    <LogoContainer>
      <LogoWrap as={Link} to="/">
        <LogoIcon />
       
      </LogoWrap>
    </LogoContainer>

  )
}

export default Logo