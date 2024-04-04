import styled from "styled-components";

export const Container = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 30px;
`;
export const Title = styled.div`
    color: #D4DCF3;
    font-family: Playfair;
    font-size: 64px;
    text-align: center;
    @media (min-width: 1458px) {
        margin-top: 150px;
        margin-bottom: 50px;
    }
`;

export const ExhibitionsContainer = styled.div`
    display: grid;
    align-self: center;
    grid-gap: 20px;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    &>div:nth-child(2n){
        border-radius:  4px 100px 50px 4px;
        justify-self: start;
    }

`;