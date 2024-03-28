import styled from "styled-components";

export const Container = styled.div`
    --title-color: #A8B7E3;
    --description-color: #626D8E;
    --price-color:#C4CFEE;
    --description-margin-left: 0px;
    --description-margin-right: 0px;
    
    width: auto;

    &.horizontal{
        --img-order: 1;
        --description-order: 2;
        --grid-template-columns: 2fr 1fr;
        --description-margin-left: 9px;
        --description-margin-right: 0px;

        grid-column-start: 1;
        grid-column-end: 4;
        justify-self: start !important;
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        grid-gap: 9px;

    }

`;

export const ImageContainer = styled.div`
    order: var(--img-order);
    position: relative;
    --image-overlay-display: none;
    &:hover{  
        --image-overlay-display: flex;
    }  
`;

export const ScaleIcon = styled.img`
    width: 45px;
    height: 48px;
    margin-right: 31px;
    margin-bottom: 31px;
`;

export const HoverImageOverlay = styled.div`
    display: var(--image-overlay-display);
    cursor: pointer;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    position: absolute;
    background-color: #11141D78;
    z-index: 1;
    justify-content: end;
    align-items: end;
`;

export const Image = styled.img`
    width: 100%;  
`;

export const InfoContainer = styled.div`
    order: var(--description-order);
    align-self: flex-end;
    margin-left: var(--description-margin-left);
    margin-right: var(--description-margin-right);
`;

export const Title = styled.div`
    margin-top: 6px;
    font-family: Playfair;
    font-size: 40px;
    color: var(--title-color);
`;

export const Description = styled.div`
    font-family: Varta;
    font-size: 24px;
    color: var(--description-color);
    margin-top: 8px;
`;

export const SaleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 9px;
`;

export const Price = styled.div`
    color: var(--price-color);
    font-size: 64px;
    font-family: Playfair;
    margin-bottom: 4px;
`;

export const ButtonContainer = styled.div`
    margin-top: -6px;
`;