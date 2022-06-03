// Navbar.js

import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"



const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  background-color: #fff;
  position: sticky;
  top:0;
  justify-content: center;
  box-shadow: 0 1px 1px 0.5px rgba(0,0,0,.1);
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 1000;
  align-items: center;
  

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`
const Wrapper = styled.div`
  postion:relative;
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  top: 0;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
        <Navigation>
          <Wrapper>
          <Logo />
            <Toggle
              navbarOpen={navbarOpen}
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            {navbarOpen ? (
              <Navbox>
                <NavbarLinks />
              </Navbox>
            ) : (
              <Navbox open>
                <NavbarLinks />
              </Navbox>
            )}
          </Wrapper>
      </Navigation>

  
  )
}

export default Navbar