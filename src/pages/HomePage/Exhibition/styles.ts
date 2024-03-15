import styled from "styled-components";

export const Container = styled.div`
    background-image: url("./images/home/exhibition_mobil.jpg");
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    height: 510px;
    text-align: center;
    color: #11141D;
    padding: 0 30px;
     @media (min-width: 1458px) {
        background-size: cover;
        background-image: url("./images/home/exhibition.jpg");
        height: 1020px;
     }
`;

export const Title = styled.div`
    font-family: Playfair;
    font-size: 24px;
    margin-top: 105px;
    @media (min-width: 1458px) {
        margin-top: 200px;
        font-size: 64px;
    }
`;
export const Name = styled.div`
    font-family: Playfair;
    font-size: 40px;
    margin-top: 11px;
    @media (min-width: 1458px) {
        margin-top: 20px;
        font-size: 96px;
    }
`;
export const Description = styled.div`
    font-family: Varta;
    font-size: 24px;
    font-weight: 300;
    white-space: pre-line;
    margin-top: 28px;
    margin-bottom: 48px;
    line-height: 2rem;
    @media (min-width: 1458px) {
        margin-top: 51px;
        margin-bottom: 180px;
        font-size: 48px;
        line-height: 4rem;
    }
`;