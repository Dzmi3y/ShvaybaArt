import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';

export const Wrapper = styled.div`
    --bg-color: #F8F8F8;
    --t-color: #11141D;
    --email-color:#626D8E;
    &.red{
        --bg-color: #FFF0F0;
        --t-color: #241010;
        --email-color:#925555;
    }
    &.dark{
        --bg-color: #11141D;
        --t-color: #F8F8F8;
        --email-color:#A8B7E3;
    }

    --email-font-size:24px;
    --logo-font-size:36px;

    @media (min-width: 1246px) {
    
        --t-size:32px;
        --email-font-size:40px;
        --logo-font-size:64px;
    }

    background-color: var(--bg-color);
    color: var(--t-color);

`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0;
    @media (min-width: 1246px) {
        padding: 4rem 3rem 1rem;
        display: grid;
        grid-template-columns: 360px 1fr 360px;
        grid-template-rows: 1fr 1fr;
    }
`;

export const NavWrapper = styled.nav`
    display: none;
    @media (min-width: 1246px) {
        display:flex;
        flex-direction: column;
        gap: 2rem;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start:1;
        grid-row-end: 3;
    }

`;
export const FooterNavLink = styled(HashLink)`
    font-family: Playfair;
    color:  var(--t-color);
    text-decoration: none;
    font-size: var(--t-size);
`;

export const IconImg = styled.img`
    height: 92px;
    width: 93px;
    @media (min-width: 1246px) {
        height: 121px;
        width: 118px;
    }
`;

export const ImgContainer = styled.div` 
    order: 1;
    display:grid;
    grid-template-columns: 95px 95px;
    grid-template-rows: 95px 95px;
    margin: -5px auto auto;
    gap: 2rem;
   

    @media (min-width: 1246px) {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start:1;
        grid-row-end: 3;
    }
`;

export const ImgWrapper = styled.div`
padding: 0;
    cursor: pointer;
    *{
        width: 115px;
        height: 115px;      
    }

    :hover{
        *{
            fill: #626D8E;
            stroke: #F8F8F8; 
        }
    }

    :active  {
        *{
            fill: #11141D;
            stroke: #F8F8F8; 
        }
    }

    &.red{
        *{
            stroke: #241010;      
        }

        :hover{
            *{
                fill: #925555;
                stroke: #F8F8F8; 
            }
        }

        :active  {
            *{
                fill: #241010;
                stroke: #F8F8F8; 
            }
        }
    }

    &.dark{
        *{
            stroke: #F8F8F8;      
        }

        :hover{
            *{
                fill: #A8B7E3;
                stroke: #11141D; 
            }
        }

        :active  {
            *{
                fill: #626D8E;
                stroke: #F8F8F8; 
            }
        }
    }

`;


export const EmailWrapper = styled.div`
    display:flex;
    flex-direction: column;
    text-align: center;
    order: 0;
    gap: 1rem;
    @media (min-width: 1246px) {
        text-align: left;
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start:1;
        grid-row-end: 2;
    }
`;
export const LogoWrapper = styled.div`
    order: 2;
    font-family: Petemoss;
    font-size: var(--logo-font-size);
    text-align: center;

    @media (min-width: 1246px) {
        text-align: end;
        margin-top: auto;

        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start:2;
        grid-row-end: 3;
    }
`;

export const EmailTitle = styled.div`
    display: none;
    @media (min-width: 1246px) {
        display: block;
    }
`;
export const Email = styled.div`
    font-weight: 500;
    font-size: var(--email-font-size);
    color: var(--email-color);
`;
