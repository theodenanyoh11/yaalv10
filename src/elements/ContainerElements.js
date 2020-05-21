import styled from "styled-components"

export const ContainerWrapper = styled.div`
    width: 90%;
    margin: 0 auto;

    @media ${props => props.theme.breakpoints.tablet} {
        width: 80%;

    }

    @media ${props => props.theme.breakpoints.desktop} {
        width: 75%;

    }

`