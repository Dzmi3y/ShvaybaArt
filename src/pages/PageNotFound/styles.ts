import styled from "styled-components";

export const Container = styled.div`
    background-color: #F8F8F8;
    text-align: center;
    padding: 0 4rem;
`;
export const Title = styled.div`
    margin-bottom: 53px;
    margin-top: 80px;
    font-size: 32px;

    @media (min-width: 1458px) {
        font-size: 64px;
        margin-top: 120px;
    }

    color: #11141D;
    font-family:Playfair;
`;
export const Message = styled.div`

    font-size: 16px;
    @media (min-width: 1458px) {
        font-size: 32px;
    }

    margin-bottom: 93px;
    color: #626D8E;
    font-family: Inter;
`
export const StyledImg =styled.img`
    max-width: 731px;
    width: 100%;
    

`;