import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';

export const Container = styled.div`
    transition: color 0.5s ease;
    transition: background 0.5s ease;
    --bg-color: #E9EDF6D9;
    --text-color: #11141D;
    --logo-color: #626D8E;
    --selected-text-color: #626D8E;

    &.red{
        --bg-color: #FFF0F0;
        --text-color: #241010;
        --logo-color: #241010;
        --selected-text-color: #925555;
    }

    opacity: 85%;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: Playfair;
    position: fixed;
    font-size: 20px;
    height: 60px;
    width: 100%;

    display:block;
    @media (min-width: 1246px) {
        display:none;
    }
`;

export const Title = styled.div`
    &.logo{
        margin-top: -9px;
        font-family: Petemoss;
        font-size: 36px;
        color: var(--logo-color);
    }
`;

export const Wrapper = styled.nav`
        display: flex;
        justify-content: space-between;
        margin: 20px 2rem 0;
`;



export const LinkWrapper = styled(HashLink)`
    text-decoration: none;
    color: var(--text-color);
    &.selected{
        font-weight: 500;
        color: var(--selected-text-color);
    }

`;



export const CartWrapper = styled.div`
        margin-top: -7px;
        display:flex;
    svg{
        width: 29px;
        height: 29px;
    }

    &:hover{
        *{
            fill: #626D8E;
            stroke: #626D8E; 
            --border-color: #626D8E;
            --bg-color: #F8F8F8;
            --text-color: #626D8E;
        }
    }

    &:active  {
        *{
            fill: #11141D;
            stroke: #11141D; 
            --border-color: #11141D;
            --bg-color: #F8F8F8;
            --text-color: #11141D; 
        }
    }

    &.red{
        *{
            stroke: #241010;    
            --border-color: #925555;
            --bg-color: #925555;
            --text-color: #FFD2D2;  
        }

        &:hover{
            *{
                fill: #925555;
                stroke: #925555; 
                --border-color: #925555;
                --bg-color: #FFF0F0;
                --text-color: #925555;
            }
        }

        &:active  {
            *{
                fill: #241010;
                stroke: #241010; 
                --border-color: #241010;
                --bg-color: #FFF0F0;
                --text-color: #241010;
            }
        }
    }
`;

export const CartCount = styled.div`
    font-size: 16px;
    font-family: Varta;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left: -13px;

    --border-color: #626D8E;
    --bg-color: #626D8E;
    --text-color: #D4DCF3;

    border: 1px solid var(--border-color);
    background-color: var(--bg-color);
    color: var(--text-color);

    &.hide{
        display: none;
    }
    
`;


export const LangSwitcher = styled.div`  
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 42px;
    width: 64px;
    font-family: Varta;
    font-size: 12px;
    color: #11141D;
    
    border: 1px solid #11141D;
    &:hover{
        color: #E9EDF6;
        border: 1px solid #626D8E;
        background-color: #626D8E;
    }
    &:active{
        color: #E9EDF6;
        border: 1px solid #11141D;
        background-color: #11141D;
    }

    &.red{
        color: #241010;
        border: 1px solid #241010;
        &:hover{
            color: #E9EDF6;
            border: 1px solid #925555;
            background-color: #925555;
        }
        &:active{
            color: #E9EDF6;
            border: 1px solid #241010;
            background-color: #241010;
        }
    }

`;

export const Burger = styled.div`
    cursor: pointer;

    div{
        background-color: #11141D;
    }
    
    &.red{
        div{
            background-color: #241010;
        }
    }


    div:nth-child(1){
        height: 2px;
        width: 20px;
        border-radius: 30%;
    }

    div:nth-child(2){
        height: 2px;
        width: 26px;
        margin-top: 7px;
        border-radius: 30%;
    }


    div:nth-child(3){
        height: 2px;
        width: 33px;
        margin-top: 7px;
        border-radius: 30%;
    }
 

    &.open{
        @keyframes line1 {
            0%   { width: 20px; transform-origin: center; transform: translateY(0px) rotate(0deg)}
            30%   { width: 20px; transform-origin: center; transform: translateY(9px) rotate(0deg)}
            70%   { width: 33px;  transform-origin: center; transform: translateY(9px) rotate(0deg)}
            100%   { width: 33px; transform-origin: center; transform: translateY(9px) rotate(45deg)}
        }

        @keyframes line2 {
            0%   { width: 26px; transform-origin: center; transform:  rotate(0deg)}
            30%   { width: 26px; transform-origin: center; transform:  rotate(0deg)}
            70%   { width: 33px;  transform-origin: center; transform:  rotate(0deg)}
            100%   { width: 33px; transform-origin: center; transform:  rotate(-45deg)}
        }

        @keyframes line3 {
            0%   { width: 33px; transform-origin: center; transform: translateY(0px) rotate(0deg)}
            30%   { width: 33px; transform-origin: center; transform: translateY(-9px) rotate(0deg)}
            70%   { width: 33px;  transform-origin: center; transform: translateY(-9px) rotate(0deg)}
            100%   { width: 33px; transform-origin: center; transform: translateY(-9px) rotate(-45deg)}
        }

        div:nth-child(1){
            animation: 0.2s ease-in normal line1;
            animation-fill-mode: forwards;
        }

        div:nth-child(2){
            animation: 0.2s ease-in normal line2;
            animation-fill-mode: forwards;
        }

        div:nth-child(3){
            animation: 0.2s ease-in normal line3;
            animation-fill-mode: forwards;
            
        }
    }

    &.close{
        @keyframes lineClose1 {
            100%   { width: 20px; transform-origin: center; transform: translateY(0px) rotate(0deg)}
            70%   { width: 20px; transform-origin: center; transform: translateY(9px) rotate(0deg)}
            30%   { width: 33px;  transform-origin: center; transform: translateY(9px) rotate(0deg)}
            0%   { width: 33px; transform-origin: center; transform: translateY(9px) rotate(45deg)}
        }

        @keyframes lineClose2 {
            100%   { width: 26px; transform-origin: center; transform:  rotate(0deg)}
            70%   { width: 26px; transform-origin: center; transform:  rotate(0deg)}
            30%   { width: 33px;  transform-origin: center; transform:  rotate(0deg)}
            0%   { width: 33px; transform-origin: center; transform:  rotate(-45deg)}
        }

        @keyframes lineClose3 {
            100%   { width: 33px; transform-origin: center; transform: translateY(0px) rotate(0deg)}
            70%   { width: 33px; transform-origin: center; transform: translateY(-9px) rotate(0deg)}
            30%   { width: 33px;  transform-origin: center; transform: translateY(-9px) rotate(0deg)}
            0%   { width: 33px; transform-origin: center; transform: translateY(-9px) rotate(-45deg)}
        }

        div:nth-child(1){
            animation: 0.2s ease-in normal lineClose1;
            animation-fill-mode: forwards;
        }

        div:nth-child(2){

            animation: 0.2s ease-in normal lineClose2;
            animation-fill-mode: forwards;

        }

        div:nth-child(3){
            animation: 0.2s ease-in normal lineClose3;
            animation-fill-mode: forwards;
            
        }
    }
`;

export const BurgerLine = styled.div`    

`;