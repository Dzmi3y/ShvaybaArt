import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 110px);
    background-color: #F8F8F8;
    padding-top: 90px;
    padding-bottom: 100px;
    position: relative;
    @media (min-width: 1458px) {
        padding-bottom: 20px;
        display: grid;
        grid-template-columns: 3fr 1fr;
        padding-top: 100px;
    }
`;
export const Title = styled.div`
    display: none;
    @media (min-width: 1458px) {
        display: block;
        grid-column-start: 1;
        grid-column-end: 3;
        font-size: 64px;
        font-family: Playfair;
        color: #11141D;
        margin-left: 2rem;
        margin-bottom: 40px;
    }
`;
export const OrderListContainer = styled.div``;
export const TotalPriceContainer = styled.div`
    background-color: #626D8E;
    border-radius: 15px 15px 0px 0px;
    position: fixed;
    &.absolute{
        position: absolute;
    }
    bottom: 0;
    left: 0;
    right: 0;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media (min-width: 1458px) {
        display: block;
        position: static;
        border-radius: 20px 4px 4px 50px;
        width: 417px;
        height: 380px;
        text-align: center;
        margin-left: auto;
        margin-right: 2rem;
    }
`;

export const TotalPriceText = styled.div`
    font-family: Playfair;
    color: #E9EDF6;
    font-size: 24px;
    margin-top: -15px;
    @media (min-width: 1458px) {
        font-size: 48px;
        margin-top: 20px;
    }
`;
     
export const TotalPriceValue = styled.div`
    display: none;
    @media (min-width: 1458px) {
        margin-top: 20px;
        margin-bottom: 50px;
        display: block;
        font-family: Playfair;
        color: #E9EDF6;
        font-size: 96px;
    }
`;