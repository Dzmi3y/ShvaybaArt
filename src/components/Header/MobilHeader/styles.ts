import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';


export const RootContainer = styled.div`
transition: color 0.5s ease;
    transition: background 0.5s ease;
    --bg-color: #E9EDF6D9;
    --text-color: #11141D;
    --logo-color: #626D8E;
    --selected-text-color: #626D8E;
    --modal-bg-color: #F8F8F8;

    &.red{
        --modal-bg-color: #FFF0F0;
        --bg-color: #FFF0F0;
        --text-color: #241010;
        --logo-color: #241010;
        --selected-text-color: #925555;
    }
    color: var(--text-color);
    font-family: Playfair;
    font-size: 24px;
    @media (min-width: 1246px) {
        display:none;
    }
`;

export const Container = styled.div`
    

    background-color: var(--bg-color);
    opacity: 85%;
    position: fixed;
    height: 60px;
    width: 100%;
    display:block;

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


export const CartWrapper = styled.div`
        margin-top: -7px;
        display:flex;
    svg{
        width: 29px;
        height: 29px;
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

export const Modal = styled.div`
    &.blocked{
        display: none;
    }

    @keyframes showModal {
              0%   { background: rgba(17, 20, 29, .0); z-index: -1;}
            100%   { background: rgba(17, 20, 29, .6); z-index: 1;}
    }
    @keyframes hideModal {
              0%   { background: rgba(17, 20, 29, .6); z-index: 1;}
            100%   { background: rgba(17, 20, 29, .0); z-index: -1;}
    }
    
    top:60px;
    width: 100vw;
    height: 100vh;
    position: fixed;
    

    &.hide{
        animation: 0.5s ease-in normal hideModal;
        animation-fill-mode: forwards;
    }
    &.show{
        animation: 0.5s ease-in normal showModal;
        animation-fill-mode: forwards;
        background: rgba(17, 20, 29, .6);
    }
`;
export const Menu = styled.div`
    @keyframes showMenu {
              0%   { transform: translateX(-400px); z-index: -1;}
            100%   { transform: translateX(0); z-index: 1;}
    }
    @keyframes hideMenu {
              0%   { transform: translateX(0); z-index: 1;}
            100%   { transform: translateX(-400px); z-index: -1;}
    }
    top: 60px;
    background-color: var(--modal-bg-color);
    width: 300px;
    height: 360px;
    position: fixed;
    border-radius: 0px 10px 20px 0px;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    padding-top: 15px;

    &.hide{
        animation: 0.1s ease-in normal hideMenu;
        animation-fill-mode: forwards;
    }
    &.show{
        animation: 0.1s ease-in normal showMenu;
        animation-fill-mode: forwards;
    }

`;

export const OrderLinkWrapper = styled(HashLink)`
    text-decoration: none;
`;

export const LinkWrapper = styled(HashLink)`
    text-decoration: none;
    padding-left: 2rem;
    font-size: 24px;
    display: flex;
    align-items: center;
    height: 50px;
    color: var(--text-color);
    &.logo{
        font-size: 36px;
        font-family: Petemoss;
    }
    &.selected{
        font-weight: 500;
        color: var(--selected-text-color);
        box-shadow: var(--shadow);
    }
`;

export const LangSwitcher = styled.div`  
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 93px;
    height: 50px;
    font-family: Varta;
    font-size: 24px;
    color: #11141D;
    border-radius: 4px;
    margin: 25px 0 0 2rem;
    border: 1px solid #11141D;

    &:active{
        color: #E9EDF6;
        border: 1px solid #11141D;
        background-color: #11141D;
    }

    &.red{
        color: #241010;
        border: 1px solid #241010;
     
        &:active{
            color: #E9EDF6;
            border: 1px solid #241010;
            background-color: #241010;
        }
    }

`;