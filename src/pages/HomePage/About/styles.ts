import styled from "styled-components";

export const Container = styled.div`
    background-color: #F8F8F8;
    min-height: 300px;
    margin-bottom: 50px;
    @media (min-width: 1458px){
        margin-bottom: 135px;
    }
`;

export const Title = styled.div`
    text-align: center;
    font-family: Playfair;
    color: #626D8E;
    font-size: 32px;
    margin-top: 60px;
    margin-bottom: 23px;
    @media (min-width: 1458px){
        margin-top: 90px;
        margin-bottom: 90px;
        font-size: 64px;
        text-align: center;
    }
`;
