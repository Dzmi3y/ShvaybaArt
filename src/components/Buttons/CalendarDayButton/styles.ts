import styled from "styled-components";

export const Button = styled.button`
    border-radius: 10px;
    font-family: Playfair;
    cursor: pointer;
    background: none;
    font-size: 24px;
    width: 24px;
    height: 20px;
    color: #11141D;
    border: none;
    padding-bottom: 10px;
    &.weekend{
        color: #626D8E
    }
    &:active{
        background: #626D8E;
        color:#E9EDF6;
    }
    @media (min-width: 1458px) {
        &:hover{
            border: 1px solid #626D8E
        }
        &:active{
            background: #626D8E;
            color:#E9EDF6;
        }
        width: 75.94px;
        height: 68.97px;
        font-size: 40px;
    }

    &:disabled{
        color: #11141D38;
        cursor: default;
    }

    &.selected{
        background: #626D8E99;
        color:#E9EDF6;
    }
`;
