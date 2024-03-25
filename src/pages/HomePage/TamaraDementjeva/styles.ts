import styled from "styled-components";

export const Container = styled.div`
    background-color: #11141D;
    height: 1768px;
    text-align: center;
    margin: 0 2rem;
    @media (min-width: 1458px) {
        height: 1349px;
    }
`;

export const Title = styled.div`
    color: #E9EDF6;
    margin-top: 36px;
    font-family: Playfair;
    font-size: 32px;
    @media (min-width: 1458px) {
        font-size: 64px;
    }
`;

export const Description = styled.div`
    color: #E9EDF6;
    margin-top: 23px;
    margin-bottom: 20;
    font-family: Varta;
    font-size: 20px;
    font-weight: 300px;
    white-space: pre-line;
    line-height: 2rem;
    @media (min-width: 1458px) {
        margin-bottom: 75px;
        font-size: 48px;
        line-height: 4rem;
    }
`;

export const ButtonWrapper = styled.div`
margin-top: 42px;
@media (min-width: 1458px) {
    margin-top: 77px;
}
`;