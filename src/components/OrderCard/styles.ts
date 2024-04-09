import styled from "styled-components";

export const Container = styled.div`
    display: grid;
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
    @media (min-width: 1458px) {
        margin-bottom: 20px;
        font-size: 40px; 
    }
`;

export const ExhibitionContainer = styled.div``;

export const ExhibitionDateContainer = styled.div`
    display: flex;
    gap: 20px;
    `;
export const ExhibitionPriceContainer = styled.div`
    display: flex;
    gap: 20px;
`;
export const ExhibitionDate = styled.div`
    font-family: Playfair;
    color: #11141D;
    font-size: 24px;
    @media (min-width: 1458px) {
        margin-bottom: 20px;
        font-size: 64px;
        display: flex;
        gap: 20px;
    }
`;
export const ExhibitionPrice = styled.div`
    font-family: Playfair;
    color: #11141D;
    font-size: 24px;
    @media (min-width: 1458px) {
        font-size: 64px;
        display: flex;
        gap: 20px;
    }
`;
export const AngleArrow = styled.img`
 cursor: pointer;
    width: 12px;
    height: 6px;
    content: url("/images/global/angle.png");
    &:active{
        content: url("/images/global/active/angle.png");
    }
    @media (min-width: 1458px) {
        transform: rotate(180deg);
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
    @media (min-width: 1458px) {
        font-size: 64px;
    }
`;

export const CheckBox = styled.input`
    width: 30px;
    height: 30px;
    @media (min-width: 1458px) {
        width: 60px;
        height: 60px;
    }

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