import styled from "styled-components"

export const MainWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

export const Container = styled.div`
width: 90%;
margin: 0 auto;

@media ${props => props.theme.breakpoints.tablet} {
    width: 80%;

}

@media ${props => props.theme.breakpoints.desktop} {
    width: 75%;

}
`
export const Row = styled.div`
  display: flex;
  flex: ${props => (props.flex ? props.flex : "initial")};
  flex-direction: row;
  flex-wrap: ${props => (props.wrap ? props.wrap : "initial")};
  align-content: ${props =>
    props.alignContent ? props.alignContent : "initial"};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "initial"};
  @media screen and (max-width: 768px) {
    flex-direction: ${props => (props.mobile ? "column" : "row")};
  }
`
export const Column = styled.div`
  flex: ${props => (props.flex ? props.flex : "initial")};
  flex-direction: column;
  align-content: ${props =>
    props.alignContent ? props.alignContent : "initial"};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "initial"};
  margin: ${props => (props.margin ? props.margin : "0")};
  width: ${props => (props.width ? props.width : "auto")};
`

export const NavWrapper = styled.div`
width: 90%;
margin: 0 auto;

@media ${props => props.theme.breakpoints.tablet} {
    width: 80%;

}

@media ${props => props.theme.breakpoints.desktop} {
    width: 75%;

}
`