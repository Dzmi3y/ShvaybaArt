import styled from "styled-components";

export const Button = styled.button`
    border-radius: 10px;
    font-family: Varta;
    cursor: pointer;
    background: #626D8E;
    font-size: 24px;
    width: 320px;
    height: 70px;
    color:#E9EDF6;
    border: none;
    &:active{
        background: #11141D;
        
    }
    @media (min-width: 1458px) {
        &:hover{
            background: #626D8ED9;
        }
        &:active{
            background: #11141D;
        }
        width: 298px;
        height: 74px;
        font-size: 48px;
    }

    &:disabled{
        background: #626D8E99;
        cursor: default;
    }
`;
