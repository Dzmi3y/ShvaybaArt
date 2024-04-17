import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    &>label:has(+ input:invalid){   
        color: #FF0000;
    }

`;

export const Label = styled.label`
    font-family: Playfair;
    font-size: 24px;
    color: #626D8E;
    font-weight: 500;
    text-align: center;
    @media (min-width: 1458px) {
        margin-bottom: 10px;
        font-size: 32px;
    }

`;

export const StyledInput = styled.input`
    font-family: Playfair;
    font-size: 20px;
    color: #11141D;
    border-radius: 4px;
    border: 1px solid #11141D;
    width: 320px;
    height: 70px;
    outline: none;
    text-align: center;
    @media (min-width: 1458px) {
        font-size: 32px;
        width: 576px;
        height: 70px;
    }

    &:invalid{   
        border: 1px solid #FF0000;
        @media (min-width: 1458px) {
            background: #FF00000F;

        }
    }
`;

export const InfoContainer = styled.div``;
export const InfoImage = styled.img``;
export const InfoText = styled.div``;