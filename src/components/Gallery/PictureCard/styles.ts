import styled from "styled-components";

export const Container = styled.div`
    --title-color: #A8B7E3;
    --description-color: #626D8E;
    --price-color:#C4CFEE;
    width: auto;
    //grid-column-start: 2;

`;

export const ImageContainer = styled.div`
    max-width: 536px;
    max-height: 520px;
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
    top:0px;
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
    max-width: 536px;
    max-height: 520px;
    width: 100%;
    
`;

export const InfoContainer = styled.div`

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
`;