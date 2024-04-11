import styled from "styled-components";

export const Button = styled.button`
    border-radius: 10px;
    font-family: Varta;
    cursor: pointer;
    background: radial-gradient(209.86% 209.86% at 50% 50%, #ECF0FB 0%, rgba(233, 237, 247, 0) 100%);
    font-weight: 400;
    font-size: 24px;
    width: 170px;
    height: 52px;
    color:#626D8E;
    border: none;
    &:active{
        background: radial-gradient(209.86% 209.86% at 50% 50%, #909DC2 0%, rgba(233, 237, 247, 0) 100%);

    }
    @media (min-width: 1458px) {
        &:hover{
            background: radial-gradient(261.27% 261.27% at 50% 50%, #FFFFFF 0%, rgba(233, 237, 247, 0) 100%);
        }
        &:active{
            background: radial-gradient(209.86% 209.86% at 50% 50%, #909DC2 0%, rgba(233, 237, 247, 0) 100%);
        }
        font-weight: 700;
        width: 347px;
        height: 71px;
        font-size: 48px;
    }

    &:disabled{
        color: #626D8E;
        background: rgba(236, 240, 251, 0.6);
        cursor: default;
    }
`;
