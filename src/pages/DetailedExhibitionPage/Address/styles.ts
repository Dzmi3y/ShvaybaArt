import styled from "styled-components";

export const Container = styled.div`
    margin-top: 20px;
    margin-left: 2rem;
    margin-right: 2rem;
    @media (min-width: 1458px) {
        margin-top: 80px;
        margin-bottom: 80px;
        margin-left: 174px;
        margin-right: 174px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    @media (min-width: 1458px) {
        display: block;
        text-align: start;
    }
`;
export const MapContainer = styled.div`
    position: relative;
    margin-left: -2rem;
    margin-right: -2rem;
`;
export const StyledIframe = styled.iframe`
    border: 0;
    width: 100%;
    height: 470px;
    @media (min-width: 1458px) {
        border: 0;
        border-radius: 4px 100px 50px 4px;
        max-width: 834px;
        max-height: 822px;
        width: 100%;
        height: 100%;
    }
`;
export const ResizeImage = styled.img`
    position: absolute;
    width: 20px;
    height: 21px;
    bottom: 30px;
    right: 60px;
    @media (min-width: 1458px) {
        width: 56px;
        height: 60px;
        bottom: 50px;
        right: 80px;
    }
`;
export const HoursContainer = styled.div``;
export const AddressContainer = styled.div`
    order: 2;
    display: flex;
    justify-content: center;
    @media (min-width: 1458px) {
        display: block;
        order: 0;
    }
`;
export const HoursItemContainer = styled.div`
    display: flex;
    justify-content: center;
    @media (min-width: 1458px) {
        justify-content: start;
    }
`;
export const StationContainer = styled.div`
    display: flex;
    justify-content: center;
    @media (min-width: 1458px) {
        display: block;
    }
`;
export const InfoContainer = styled.div`
    order: 3;
;`;
export const GpsContainer = styled.div`
    display: flex;
    justify-content: center;
    @media (min-width: 1458px) {
        justify-content: start;
    }
`;
export const TitleInfo = styled.div`
    color: #E9EDF6;
    font-family: Playfair;
    font-size: 32px;
    margin-top: 20px;
    margin-bottom: 20px;
    @media (min-width: 1458px) {
        margin-top: 10px;
        margin-bottom: 30px;
        font-size: 64px;
    }
`;

export const TitleHours = styled.div`
    color: #E9EDF6;
    font-family: Playfair;
    font-size: 32px;
    margin-top: 10px;
    margin-bottom: 20px;
    @media (min-width: 1458px) {
        margin-top: 10px;
        margin-bottom: 30px;
        font-size: 64px;
    }
`;

export const TitleAddress = styled.div`
    color: #C4CFEE;
    font-family: Varta;
    font-weight: 300;
    font-size: 15px;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    @media (min-width: 1458px) {
        margin-right: 0px;
        color: #E9EDF6;
        font-family: Playfair;
        font-weight: 400;
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 64px;
    }
`;
export const AddressText = styled.div`
    color: #C4CFEE;
    font-family: Varta;
    font-weight: 600;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    @media (min-width: 1458px) {
        line-height: 60px;
        font-weight: 300;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 40px;
    }
`;
export const Days = styled.div`
    color: #C4CFEE;
    font-family: Varta;
    font-size: 20px;
    font-weight: 300;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 10px;
    @media (min-width: 1458px) {
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 20px;
        font-size: 32px;
    }
`;
export const Hours = styled.div`
    color: #C4CFEE;
    font-family: Varta;
    font-weight: 600;
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 3px;
    @media (min-width: 1458px) {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 40px;
        margin-left: 5px;
    }
`;
export const Minutes = styled.div`
    color: #C4CFEE;
    font-family: Varta;
    font-weight: 600;
    font-size: 14px;
    margin-top: 5px;
    margin-bottom: 00px;
    @media (min-width: 1458px) {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 20px;
    }
`;
export const StationType = styled.div`
    color: #C4CFEE;
    font-family: Varta;
    font-weight: 300;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-transform: capitalize;
    margin-right: 10px;
    @media (min-width: 1458px) {
        margin-right: 0px;
        text-transform: none;
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 32px;
    }
`;
export const StationName = styled.div`
    color: #C4CFEE;
    font-family: Varta;
    font-weight: 600;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    @media (min-width: 1458px) {
        font-weight: 300;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 40px;
    }
`;
export const Gps = styled.div`
    color: #C4CFEE;
    font-family: Varta;
    font-weight: 600;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 20px;
    @media (min-width: 1458px) {
        font-weight: 300;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 40px;
    }
`;
export const GpsTitle = styled.div`
    color: #C4CFEE;
    font-family: Varta;
    font-weight: 300;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    @media (min-width: 1458px) {
        font-weight: 300;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 20px;
        font-size: 40px;
    }
`;

export const IframeBlocker = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right:0px;
    bottom: 0px;
    cursor: pointer;
`;

export const Modal = styled.div`
    background-color: #0000009E;
    position: fixed;
    top: 0px;
    left: 0px;
    right:0px;
    bottom: 0px;
    padding-top: 60px;
    z-index: 2;
    @media (min-width: 1458px) {
        padding: 160px 158px 60px 158px;
    }
    
`

export const ModalContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

export const ModalIframe = styled.iframe`
    border: 0;
    width: 100%;
    height: 100%;
    @media (min-width: 1458px) {
        border: 0;
        border-radius: 4px;
    }
`;

export const CloseImage = styled.img`
    cursor: pointer;
    height: 15px;
    width: 15px;
    position: absolute;
    right: 15px;
    top: 15px;
    content: url("/images/global/close.png");
    &:active{
        content: url("/images/global/active/close.png");
    }
    @media (min-width: 1458px) {
        height: 30px;
        width: 30px;
        right: 20px;
        top: 20px;
        content: url("/images/global/close.png");
        &:hover{
            content: url("/images/global/hover/close.png");
        }
        &:active{
            content: url("/images/global/active/close.png");
        }
    }
`;