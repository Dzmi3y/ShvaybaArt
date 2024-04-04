import styled from "styled-components";

export const Container = styled.div`
    touch-action: none;
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
        top: 60px;
        left: 0px;
        right: 0px;
        height: 100vh ;
        z-index: 2;
        display: grid;
        grid-template-rows: 59px calc(100vh - 400px) 201px;

    @media (min-width: 1458px) {
        top:130px;
        left: 160px;
        right: 160px;
        height: calc(100vh - 160px);

        padding: 0 20px;
        display: grid;
        grid-template-rows: 110px calc(100vh - 440px) 170px;
    }
`;

export const HeadContainer = styled.div`
    margin-top: 20px;
    margin-left: 2rem;
    margin-right: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (min-width: 1458px) {
        margin-top: 9px;
        margin-left: 0px;
        margin-right: 0px;
        grid-template-columns: 1fr 2fr 1fr;
    }
`;
export const ControlsContainer = styled.div`
    width: 16px;
    @media (min-width: 1458px) {
        width: 277px;
        display: flex;
        margin-top: 17px;
        gap: 43px;
    }
`;
export const Minus = styled.img`
    display: none;
    @media (min-width: 1458px) {
        display: block;
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
    }
`;
export const Plus = styled.img`
    display: none;
    @media (min-width: 1458px) {
        display: block;
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
    }
`;
export const Play = styled.img`
    height: 22px;
    width: 17px;
    content: url(/images/slider/light/play.png);
    &:active{
        content: url(/images/slider/light/active/play.png);
    }

    @media (min-width: 1458px) {
        cursor: pointer;
        height: 51px;
        width: 30px;
        margin-top: 7px;
        margin-left: 20px;
        &:hover{
            content: url(/images/slider/light/hover/play.png);
        }
       
    }
`;
export const Stop = styled.img`
    height: 21px;
    width: 16px;
    cursor: pointer;
    content: url(/images/slider/light/stop.png);
    &:active{
        content: url(/images/slider/light/active/stop.png);
    }
    @media (min-width: 1458px) {
        margin-top: 7px;
        margin-left: 12px;
        height: 50px;
        width: 38px;
        cursor: pointer;
        &:hover{
            content: url(/images/slider/light/hover/stop.png);
        }
    }
`;

export const ZoomImgContainer = styled.div`
    --modal_info_display: none;
    @media (min-width: 1458px) {
        width: min-content;
        position: relative;
        --modal_info_display: none;
        --modal_info_margin_top: 20px;
        &:hover{
            --modal_info_display: flex;
            &::after{
                position: absolute;
                content: ''; 
                margin-left: 20px;
                border: 10px solid transparent; 
                border-bottom: 10px solid #D9D9D9; 
            }
        }
    }
`; 

export const SlideshowControlsImgContainer = styled.div`
    --modal_info_display: none;
    @media (min-width: 1458px) {
        width: min-content;
        position: relative;
        --modal_info_display: none;
        --modal_info_margin_top: 5px;
        &:hover{
            --modal_info_display: flex;
            &::after{
                bottom: 6px;
                position: absolute;
                content: ''; 
                margin-left: -25px;
                border: 10px solid transparent; 
                border-bottom: 10px solid #D9D9D9; 
            }
        }
    }
`; 

export const ModalInfo = styled.div`
    display: var(--modal_info_display);
    position: absolute;
    font-family: Varta;
    font-weight: 400;
    font-size: 24px;
    justify-content: center;
    align-items: center;
    color: #626D8E;
    z-index: 2;
    height: 68px;
    width: max-content;
    margin-top: var(--modal_info_margin_top);
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 4px;
    background-color: #D9D9D9;
`;




export const Close = styled.img`
    justify-self: end;
    height: 16px;
    width: 16px;
    content: url(/images/slider/light/close.png);
    &:active{
        content: url(/images/slider/light/active/close.png);
    }
    @media (min-width: 1458px) {
        margin-top: 11px;
        justify-self: end;
        height: 35px;
        width: 35px;
        cursor: pointer;
        &:hover{
            content: url(/images/slider/light/hover/close.png);
        }
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -10px;
`;

export const Title = styled.div`
    display: none;
    @media (min-width: 1458px) {
        display: block;
        text-align: center;
        font-family: Playfair;
        font-size: 40px;
        color: var(--title-color);
    }
`;
export const MobilTitle = styled.div`
    display: block;
    text-align: center;
    font-family: Playfair;
    font-size: 24px;
    color: var(--title-color);

    @media (min-width: 1458px) {
        display: none;
    }
`;
export const Description = styled.div`
    text-align: center;
    font-family: Varta;
    font-size: 15px;
    color: var(--description-color);
    @media (min-width: 1458px) {
        font-size: 24px;
    }
`;

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 2rem calc(100vw - 4rem) 2rem;
    @media (min-width: 1458px) {
        grid-template-columns: 140px calc(100vw - 640px) 140px;
    }
`;

export const LeftImgControlContainer = styled.div`
    align-self: center;
    width: 53px;
    @media (min-width: 1458px) {
        width: 43px;
    }
`;

export const LeftImgControl = styled.img`
    transform: rotate(180deg);
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background: rgba(255,255,255, 0.5);
    cursor: pointer;
    content: url(/images/slider/light/mobil_vertical_angle_arrow.png);
    &:active{
        content: url(/images/slider/light/active/mobil_vertical_angle_arrow.png);
    }
    margin-left: 35px;
    z-index: 1;
    position: absolute;
    @media (min-width: 1458px) {
        background: none;
        border-radius: 0%;
        position: static;
        margin-left: 0px;
        width: 43px;
        height: 86px;
        cursor: pointer;
        content: url(/images/slider/light/vertical_angle_arrow.png);
        &:hover{
            content: url(/images/slider/light/hover/vertical_angle_arrow.png);
        }
        &:active{
            content: url(/images/slider/light/active/vertical_angle_arrow.png);
        }
    }
`;


export const RightImgControlContainer = styled.div`
    width: 53px;
    justify-self: end;
    align-self: center;
    @media (min-width: 1458px) {
        width: 43px;
    }
`;

export const RightImgControl = styled.img`
    width: 53px;
    height: 53px;
    justify-self: end;
    align-self: center;
    cursor: pointer;
    content: url(/images/slider/light/mobil_vertical_angle_arrow.png);
    &:active{
        content: url(/images/slider/light/active/mobil_vertical_angle_arrow.png);
    }
    margin-left: -35px;
    z-index: 1;
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255, 0.5);
    @media (min-width: 1458px) {
        background: none;
        border-radius: 0%;
        position: static;
        margin-left: 0px;
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
    }
`;


export const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 19px;
    margin: 0;
    @media (min-width: 1458px) {
        gap: 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 140px;
    }
`;

export const Price = styled.div`
    font-size: 40px;
    font-family: Playfair;
    color: var(--price-color);
    text-align: center;
    @media (min-width: 1458px) {
        text-align: start;
        font-size: 96px; 
    }
    
`;
export const ButtonContainer = styled.div`
`;