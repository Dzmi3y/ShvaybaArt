import styled from "styled-components";

export const Container = styled.div`
    --title-color: #A8B7E3;
    --description-color: #626D8E;
    --price-color:#C4CFEE;
    &.red{
        --title-color: #D69898;
        --description-color: #925555;
        --price-color:#FFF0F0;
    }
    --description-margin-left: 0px;
    --description-margin-right: 0px;
    --infoContainer-display: block;
    --mobil-title-align: center;
    width: auto;

    &.horizontal{
        display: grid;
        grid-column-start: 1;
        grid-column-end: 3;
        --infoContainer-display: grid;
        --mobil-title-align: start;

        @media (min-width: 1458px){
            --img-order: 1;
            --description-order: 2;
            --grid-template-columns: 2fr 1fr;
            --description-margin-left: 9px;
            --description-margin-right: 0px;
            grid-column-start: 1;
            grid-column-end: 4;
            justify-self: start !important;
            grid-template-columns: var(--grid-template-columns);
            grid-gap: 9px;
        }
    }
`;

export const ImageContainer = styled.div`
    margin-top: 10px;
    order: var(--img-order);
    position: relative;
    --image-overlay-display: flex;
    @media (min-width: 1458px){
        --image-overlay-display: none;
        &:hover{  
            --image-overlay-display: flex;
        }  
    }
`;

export const ScaleIcon = styled.img`
    width: 13px;
    height: 14px;
    margin-right: 10px;
    margin-bottom: 15px;
    @media (min-width: 1024px){
        width: 19px;
        height: 20px;
    }
    @media (min-width: 1458px){
        width: 45px;
        height: 48px;
        margin-right: 31px;
        margin-bottom: 31px;
    }
`;

export const HoverImageOverlay = styled.div`
    display: var(--image-overlay-display);
    cursor: pointer;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    position: absolute;
    background-color: transparent;;
    z-index: 1;
    justify-content: end;
    align-items: end;
    @media (min-width: 1458px){
        background-color: #11141D78;
    }
`;

export const Image = styled.img`
    width: 100%;  
`;

export const InfoContainer = styled.div`
    display: var(--infoContainer-display);
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    @media (min-width: 1458px){
        display:block;
        order: var(--description-order);
        align-self: flex-end;
        margin-left: var(--description-margin-left);
        margin-right: var(--description-margin-right);
    }
`;

export const Title = styled.div`
    margin-top: 3px;
    font-family: Playfair;
    font-size: 14px;
    color: var(--title-color);
    text-align: var(--mobil-title-align);
    margin-bottom: 15px;
    @media (min-width: 1024px){
        font-size: 20px;
    }
    @media (min-width: 1458px){
        margin-bottom: 0px;
        text-align: left;
        margin-top: 6px;
        font-size: 40px;
    }
`;

export const Description = styled.div`
    display: none;
    @media (min-width: 1458px){
        display:block;
        font-family: Varta;
        font-size: 24px;
        color: var(--description-color);
        margin-top: 8px;
        margin-bottom: 9px;
    }
`;

export const SaleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Price = styled.div`
    display: none;
    @media (min-width: 1458px){
        display: block;
        color: var(--price-color);
        font-size: 64px;
        font-family: Playfair;  
        min-height: 80px;
    }
`;

export const ButtonContainer = styled.div`
    text-align: center;
    margin-top: -2px;
    width: 100%;
    &>button{
        width: 100%!important;
    }
    @media (min-width: 1024px){
        height: 40px!important;
        &>button{
            height: 40px!important;
        }
    }
    @media (min-width: 1458px){
        &>button{
            height: 71px!important;;
            width: 260px!important;;
        }
        margin-top: 0px;
        width:auto;
        height: auto;
        text-align: start;
        margin-top: -6px;
    }
`;
