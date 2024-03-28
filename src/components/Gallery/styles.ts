import styled from "styled-components";

export const ButtonContainer = styled.div`

    text-align: center;
    grid-column-start: 1;
    grid-column-end: 3;
    margin-top: 10px;
    margin-bottom: 10px;
    @media (min-width: 1458px){
        margin-top: 20px;
        margin-bottom: 20px;
        grid-column-start: 1;
        grid-column-end: 4;
    }
`;


export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 10px;
    @media (min-width: 1458px){
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 18px;
        margin-bottom: 20px;
        &>div:nth-child(2n of .horizontal){
            --img-order: 2;
            --description-order: 1;
            --grid-template-columns: 1fr 2fr;
            --description-margin-left: 0px;
            --description-margin-right: 9px;
        }
    }

`;