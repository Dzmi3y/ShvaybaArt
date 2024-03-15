import styled from "styled-components";

export const Button = styled.button`
    border-radius: 10px;
    font-family: Varta;
    font-weight: 600;
    background: transparent;
    width: 203px;
    height: 59px;
    font-size: 24px;
    border: none;
    color: #D4DCF3;
    @media (min-width: 1458px) {
        width: 298px;
        height: 90px;
        font-size: 40px;
    }

    background-image: radial-gradient(rgba(17,20,29,1), rgba(17,20,29,0.7));
    cursor: pointer;
    &:active{
        background-image: radial-gradient(rgba(54,64,97,1),rgba(54,64,97,0.7));
    }

    @media (min-width: 1458px) {
        &:hover{
           background-image: radial-gradient(rgba(92,109,142,1),rgba(92,109,142,0.7));
        }
        &:active{
            background-image: radial-gradient(rgba(54,64,97,1),rgba(54,64,97,0.7));
        }
    }

    &.disabled{
        cursor: not-allowed;
            background-image: radial-gradient(rgba(109,142,158,1), rgba(109,142,158,0.7));
        &:hover{
            background-image: radial-gradient(rgba(109,142,158,1), rgba(109,142,158,0.7));
        }
        &:active{
            background-image: radial-gradient(rgba(109,142,158,1), rgba(109,142,158,0.7));
        }
    }
`;