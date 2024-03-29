import styled from "styled-components";

export const Container = styled.div`
    --modal-bg-color: #11141D;
    --description-color:#626D8E;
    --title-color:#A8B7E3;
    --price-color:#C4CFEE;


    background: rgba(0, 0, 0, 0.6);
    display: block;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 1;
`;

export const Modal = styled.div`
    background-color: var(--modal-bg-color);
    position: fixed;
    top:130px;
    left: 160px;
    right: 160px;
    height: calc(100vh - 160px);
    z-index: 2;
    padding: 0 20px;
    display: grid;
    grid-template-rows: 110px 1fr 170px;
`;

export const HeadContainer = styled.div`
    margin-top: 9px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;
export const ControlsContainer = styled.div`
    width: 277px;
    display: flex;
    justify-content: space-between;
    margin-top: 17px;
`;
export const Minus = styled.img`
    cursor: pointer;
    height: 58px;
    width: 58px;
    content: url(/images/slider/light/minus.png);
    &:hover{
        content: url(/images/slider/light/hover/minus.png);
    }
    &:active{
        content: url(/images/slider/light/active/minus.png);
    }
`;
export const Plus = styled.img`
    cursor: pointer;
    height: 58px;
    width: 58px;
    content: url(/images/slider/light/plus.png);
    &:hover{
        content: url(/images/slider/light/hover/plus.png);
    }
    &:active{
        content: url(/images/slider/light/active/plus.png);
    }
`;
export const Play = styled.img`
    cursor: pointer;
    height: 51px;
    width: 30px;
    margin-top: 7px;
    content: url(/images/slider/light/play.png);
    &:hover{
        content: url(/images/slider/light/hover/play.png);
    }
    &:active{
        content: url(/images/slider/light/active/play.png);
    }
`;
export const Stop = styled.img`
    margin-top: 7px;
    height: 50px;
    width: 38px;
    cursor: pointer;
    content: url(/images/slider/light/stop.png);
    &:hover{
        content: url(/images/slider/light/hover/stop.png);
    }
    &:active{
        content: url(/images/slider/light/active/stop.png);
    }
`;
export const Close = styled.img`
    margin-top: 11px;
    justify-self: end;
    height: 35px;
    width: 35px;
    cursor: pointer;
    content: url(/images/slider/light/close.png);
    &:hover{
        content: url(/images/slider/light/hover/close.png);
    }
    &:active{
        content: url(/images/slider/light/active/close.png);
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -10px;

`;
export const Title = styled.div`
    text-align: center;
    font-family: Playfair;
    font-size: 40px;
    color: var(--title-color);
`;
export const Description = styled.div`
    text-align: center;
    font-family: Varta;
    font-size: 24px;
    color: var(--description-color);
`;

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 140px 1fr 140px;
`;

export const BackgroiundImageContainer = styled.div``;
export const DarkEffectDiv = styled.div``;
export const ImageContainer = styled.div``;
export const Image = styled.img``;
export const LeftImgControl = styled.img`
    transform: rotate(180deg);
    width: 43px;
    height: 86px;
    align-self: center;
    cursor: pointer;
    content: url(/images/slider/light/vertical_angle_arrow.png);
    &:hover{
        content: url(/images/slider/light/hover/vertical_angle_arrow.png);
    }
    &:active{
        content: url(/images/slider/light/active/vertical_angle_arrow.png);
    }
`;
export const RightImgControl = styled.img`
    width: 43px;
    height: 86px;
    justify-self: end;
    align-self: center;
    cursor: pointer;
    content: url(/images/slider/light/vertical_angle_arrow.png);
    &:hover{
        content: url(/images/slider/light/hover/vertical_angle_arrow.png);
    }
    &:active{
        content: url(/images/slider/light/active/vertical_angle_arrow.png);
    }
`;


export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 140px;
`;
export const Price = styled.div`
    font-size: 96px;
    font-family: Playfair;
    color: var(--price-color);
`;
export const ButtonContainer = styled.div`
`;

