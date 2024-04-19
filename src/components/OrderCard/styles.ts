import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 150px 1fr 30px;
    grid-gap: 10px;
    margin: 10px 2rem;
    @media (min-width: 1458px) {
        grid-template-columns: 397px 1fr 60px;
        grid-gap: 20px;
        margin-bottom: 20px;
    }
`;
export const ImageContainer = styled.div`
    position: relative;
`;
export const InfoContainer = styled.div`

`;
export const ControlsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;

`;

export const StyledImage = styled.img`
    height: 160px;
    width: 150px;
    border-radius: 4px 10px 20px 4px;
    @media (min-width: 1458px) {
        height: 339px;
        width: 397px;
        border-radius: 4px 20px 50px 4px;
    }
`;
export const ExhibitionText = styled.div`
    position: absolute;
    font-family: Playfair;
    color: #11141D;
    font-size: 14px;
    z-index: 1;
    top: 70px;
    left: 43px;
    @media (min-width: 1458px) {
        top: 140px;
        left: 120px;
        font-size: 32px;
    }
`;

export const Type = styled.div`
    font-family: Playfair;
    color: #626D8E;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    @media (min-width: 1458px) {
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 32px; 
    }
`;
export const Title = styled.div`
    font-family: Playfair;
    color: #11141D;
    font-size: 14px;
    margin-bottom: 10px;
    @media (min-width: 1458px) {
        margin-bottom: 20px;
        font-size: 40px; 
    }
`;

export const ExhibitionContainer = styled.div``;

export const ExhibitionDateContainer = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    @media (min-width: 1458px) {
        margin-top: 0px;
    }
`;
export const ExhibitionPriceContainer = styled.div`
    display: flex;
    gap: 20px;
`;
export const ExhibitionDate = styled.div`
    font-family: Playfair;
    color: #11141D;
    font-size: 24px;
    margin-bottom: 10px;
    @media (min-width: 1458px) {
        margin-top: 0px;
        margin-bottom: 20px;
        font-size: 44px;
        display: flex;
        gap: 20px;
    }
    @media (min-width: 1604px) {
        font-size: 64px;
    }

`;
export const ExhibitionPrice = styled.div`
    font-family: Playfair;
    color: #11141D;
    font-size: 24px;
    margin-bottom: 10px;

    @media (min-width: 1458px) {
        font-size: 44px;
        display: flex;
        gap: 20px;
    }
    @media (min-width: 1604px) {
        font-size: 64px;
    }
    
`;
export const ArrowPriceContainer = styled.div`
    position: relative;
    &.open{
        &::after{
            position: absolute;
            content: ''; 
            margin-left: -9px;
            z-index: 4;
            bottom: -5px;
            border: 15px solid transparent; 
            border-bottom: 15px solid #D4DCF3; 
            @media (min-width: 1458px) {
                margin-left: -3px;
                z-index: 1;
                bottom: -5px;
                border: 20px solid transparent; 
                border-bottom: 20px solid #D4DCF3; 
            }
        }
    }
`;
export const AngleArrow = styled.img`
    cursor: pointer;
    width: 12px;
    height: 6px;
    margin-top: 10px;
    transform: rotate(180deg);
    z-index: 2;
    position: absolute;
    content: url("/images/global/angle.png");
    &:active{
        content: url("/images/global/active/angle.png");
    }
    @media (min-width: 1458px) {
        margin-top: 33px;
        width: 34px;
        height: 16px;
        content: url("/images/global/angle.png");
        &:hover{
            content: url("/images/global/hover/angle.png");
        }
        &:active{
            content: url("/images/global/active/angle.png");
        }
    }
    &.open{
        transform: rotate(0deg);
    }
`;


export const GraphicContainer = styled.div``;
export const GraphicDescription = styled.div`
    font-family: Playfair;
    color: #11141D;
    font-size: 12px;
    @media (min-width: 1458px) {
        margin-top: 80px;
        margin-bottom: 10px;
        font-size: 20px;
    }
`;
export const GraphicPrice = styled.div`
    font-family: Playfair;
    color: #11141D;
    font-size: 24px;
    margin-top: 50px;
    @media (min-width: 1458px) {
        margin-top: 0px;
        font-size: 64px;
    }
`;

export const CheckBoxLabel = styled.label`
    width: 30px;
    height: 30px;
    display: block;
    position: relative;
    @media (min-width: 1458px) {
        width: 60px;
        height: 60px;
    }
    input[type="checkbox"] + span {
        position: absolute;
        left: 0; 
        top: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        background: url(/images/global/checkbox.png);
        background-repeat: no-repeat;
        background-size: cover;
        &:hover{
            background: url(/images/global/hover/checkbox.png);
            background-repeat: no-repeat;
            background-size: cover;
        }
   }
   input[type="checkbox"]:checked + span {
        background: url(/images/global/checked/checkbox.png);
        background-repeat: no-repeat;
        background-size: cover;
   }
`;


export const CheckBox = styled.input`
    display: none;
`;

export const CloseImage = styled.img`
    cursor: pointer;
    height: 15px;
    width: 15px;
    content: url("/images/global/close.png");
    &:active{
        content: url("/images/global/active/close.png");
    }
    @media (min-width: 1458px) {
        height: 30px;
        width: 30px;
        content: url("/images/global/close.png");
        &:hover{
            content: url("/images/global/hover/close.png");
        }
        &:active{
            content: url("/images/global/active/close.png");
        }
    }
`;

export const PriceModalDesktop = styled.div`
    display: none;
    @media (min-width: 1458px) {
        &.open{
            display: block;
            background-color: #D4DCF3;
            border-radius: 4px;
            position: absolute;
            box-shadow: var(--shadow);
            z-index: 1;
            left: -350px;
            right: unset;
            bottom: -200px;
            width: 415px;
            height: 200px;
        
        }
    }
`;

export const PriceModalMobile = styled.div`
    display: none;
    @media (max-width: 1457px) {
        &.open{
            display: block;
            background-color: #D4DCF3;
            border-radius: 4px;
            position: absolute;
            box-shadow: var(--shadow);
            height: 190px;
            left: 2rem;
            right: 2rem;
            z-index: 3;
        }
    }
`;

export const DateModal = styled.div`
    display: none;
    &.open{
        display: block;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 3;
    }

`;

export const DateModalContainer = styled.div`
    background-color: #D4DCF3;
    border-radius: 4px;
    margin-top: 150px;
    height: 271px;
    box-shadow: var(--shadow);
    @media (min-width: 1458px) {
        width: 1231px;
        height: 671px;
        margin-top: 120px;
        margin-left: auto;
        margin-right: auto;
    }
`;
