import styled from "styled-components";

export const Container = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 50px;

`;
export const TextContainer = styled.div`
`;

export const InfoContainer = styled.div`
text-align: center;
    @media (min-width: 1458px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 100px;
        text-align: start;
    }
`;

export const Title = styled.div`
    margin-bottom: 30px;
    margin-top: 30px;
    text-align: center;
    color: #E9EDF6;
    font-size: 32px;
    font-family: Playfair;
    @media (min-width: 1458px) {
        margin-bottom: 50px;
        font-size: 64px;
    }
`;
export const Introduction = styled.div`
    color: #E9EDF6;
    font-size: 15px;
    font-family: Varta;
    margin-bottom: 20px;
    text-align: center;
    line-height: 2rem;
    margin-left: 10px;
    margin-right: 10px;
    @media (min-width: 1458px) {
        line-height: 4rem;
        margin-left: 0px;
        margin-right: 0px;
        text-align: start;
        margin-bottom: 50px;
        font-size: 40px;
    }
`;
export const MainText = styled.div`
    color: #A8B7E3;
    font-size: 15px;
    font-weight: 400;
    font-family: Varta;
    text-align: center;
    line-height: 2rem;
    margin-left: 10px;
    margin-right: 10px;
    @media (min-width: 1458px) {
        line-height: 4rem;
        margin-left: 0px;
        margin-right: 0px;
        text-align: start;
        font-weight: 300;
        font-size: 40px;
    }
`;
export const StyledImage = styled.img`
    margin-bottom: 20px;
    border-radius: 4px 20px 50px 4px;
    max-width: 320px;
    max-height: 320px;
    width: 100%;
    @media (min-width: 1458px) {
        margin-bottom: 10px;
        border-radius: 50px 4px 4px 100px;
        max-width: 695px;
        max-height: 710px;
        width: 100%;
    }


`;
