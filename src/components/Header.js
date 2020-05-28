import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Container } from "./LayoutComponents"
import Nav from "./Nav"

const Header = ({ siteTitle, className }) => (
  <header className={className}>
    <Container>
    
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled(Header)`
  position: fixed;
  top:0;
  right:0;
  left:0;
  background-color: ${props => props.theme.colors.primary};
  padding: 1rem 0;
  margin-bottom: 1rem;
  h1 {
    margin: 0;
  }
`

export default StyledHeader