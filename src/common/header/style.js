import styled from "styled-components"

export const Logo = styled.a`
    width:100%;
    height:40px;
    background: ${props => props.primary ? "yellow" : "red"};
    display:block;
    text-align:center;
    line-height:40px;
    

`