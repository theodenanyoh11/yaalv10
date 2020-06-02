// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"



const NavItem = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  padding: 20px 0px;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    padding: 35px 32px;
    z-index: 6;
  }
`
const NavMenu = styled.div`
position: relative;
float: right;
`

const NavbarLinks = () => {
  return (
    <NavMenu>
      <NavItem to="/">Episodes</NavItem>
      <NavItem to="/">About</NavItem>
      <NavItem to="/">Contact</NavItem>
  
    </NavMenu>
  )
}

export default NavbarLinks