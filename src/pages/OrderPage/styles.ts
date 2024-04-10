import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F8F8F8;
    padding-top: 90px;
    padding-bottom: 20px;
    @media (min-width: 1458px) {
        display: grid;
        grid-template-columns: 1170px 1fr;
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
export const TotalPriceContainer = styled.div``;