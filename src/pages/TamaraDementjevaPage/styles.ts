import styled from "styled-components";

export const Container = styled.div`
    background-color: #241010;
    padding-left: 2rem;
    padding-right: 2rem;
`;

export const Title = styled.div`
    display:none;
    @media (min-width: 1458px){
        display: block;
        text-align: center;
        font-family: Playfair;
        font-size: 64px;
        color: #FFF0F0;
        margin-top: 120px;
        margin-bottom: -60px;
    }
    `;

export const BackgroundDiv = styled.div`
    background-color: #241010;
    position: absolute;
    z-index: -1;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-top: 20px;

`;