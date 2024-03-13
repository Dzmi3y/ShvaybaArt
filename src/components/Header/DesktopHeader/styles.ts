import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';

export const Container = styled.nav`
    display:none;
    transition: color 0.5s ease;
    transition: background 0.5s ease;
    @media (min-width: 1246px) {
        --bg-color: #E9EDF6D9;
        --text-color: #11141D;
        --selected-text-color: #626D8E;

        &.red{
            --bg-color: #FFF0F0;
            --text-color: #241010;
            --selected-text-color: #925555;
        }

        opacity: 85%;
        background-color: var(--bg-color);
        font-family: Playfair;
        position: fixed;
        font-size: 40px;
        height: 100px;
        width: 100%;

        display:block;
    }
`;

export const Wrapper = styled.nav`
        display: grid;
        grid-template-columns: auto auto auto auto auto 6% 64px ;
        align-content: center;
        margin: 20px 2rem 0;
`;

export const Logo = styled(HashLink)`
    &.selected{
        font-weight: 500;
        color: var(--selected-text-color);
    }
    text-decoration: none;
    font-family: Petemoss;
    font-size: 64px;
    text-decoration: none;
    color: var(--text-color);
    margin-top: -20px;
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
        margin-top: 6px;
        display:flex;
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
    width: 22px;
    height: 22px;
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
    font-size: 32px;
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