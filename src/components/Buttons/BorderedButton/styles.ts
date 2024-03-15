import styled from "styled-components";

export const Button = styled.button`
    border-radius: 10px;
    font-family: Varta;
    cursor: pointer;
    background: none;

    &.small{
        font-weight: 400;
        font-size: 20px;
        width: 150px;
        height: 30px;
        color:#C4CFEE;
        border: 1px solid #C4CFEE;
        @media (min-width: 1458px) {
            width: 260px;
            height: 71px;
            font-size: 48px;
        }
    }

    &.medium{
        font-weight: 600;
        font-size: 24px;
        width: 203px;
        height: 59px;
        color:#E9EDF6;
        border: 1px solid #E9EDF6;
        @media (min-width: 1458px) {
            width: 298px;
            height: 92px;
            font-size: 40px;
        }
    }

    &.large{
        font-weight: 400;
        font-size: 24px;
        width: 246px;
        height: 52px;
        color:#C4CFEE;
        border: 1px solid #C4CFEE;
        @media (min-width: 1458px) {
            width: 559px;
            height: 100px;
            font-size: 48px;
        }
    }

    &:active{
        background-color: #A8B7E3 ;
        border: none;
        color: #11141D;
    }

    @media (min-width: 1458px) {
        &:hover{
           background-color:#E9EDF6;
           border: none;
           color: #11141D;
        }
        &:active{
            background-color: #A8B7E3 ;
            border: none;
            color: #11141D;
        }
    }

    &.red{
        color:#FFF0F0;
        border: 3px solid #FFF0F0;
        background: none;
        &:active{
            color: #241010;
            background-color: #FFF0F0 ;
            border: none;
        }

        @media (min-width: 1458px) {
            &:hover{
                background: transparent;
                color: #241010;
                background-color: rgba(255,240,240,0.7);
                border: none;
            }
            &:active{
                color: #241010;
                background-color: #FFF0F0 ;
                border: none;
            }
        }
    }

    &.disabled{
        border: 3px solid #C4CFEE2B !important;
        color: #C4CFEE2B !important;
        cursor: not-allowed !important;
            background:none;
        &:hover{
            background:none;
        }
        &:active{
            background:none;
        }
    }
`;