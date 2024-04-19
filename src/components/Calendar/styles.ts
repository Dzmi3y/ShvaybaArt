import styled from "styled-components";

export const Container = styled.div``;
export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (min-width: 1458px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    
`;
export const Mounth = styled.div`
    font-family: Playfair;
    font-size: 32px;
    color: #626D8E;
    @media (min-width: 1458px) {
        font-size: 64px;
    }

`;
export const PreviousMounthButton = styled.button`
    border: none;
    background: none;
    box-shadow: none;
`;
export const PreviousMounthImg = styled.img`
    cursor: pointer;
    width: 12px;
    height: 6px;
    content: url("/images/global/angle.png");
    &:active{
        content: url("/images/global/active/angle.png");
    }
    @media (min-width: 1458px) {
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
`;
export const NextMounthButton = styled.button`
    border: none;
    background: none;
    box-shadow: none;
`;
export const NextMounthImg = styled.img`
    cursor: pointer;
    transform: rotate(180deg);
    width: 12px;
    height: 6px;
    content: url("/images/global/angle.png");
    &:active{
        content: url("/images/global/active/angle.png");
    }
    @media (min-width: 1458px) {
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
`;
export const CloseButton = styled.button`
    border: none;
    background: none;
    box-shadow: none;
`;
export const CloseImg = styled.img`
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

export const DateContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
`;

export const DayTitle = styled.div`
    font-family: Playfair;
    font-size: 16px;
    color: #11141D;
    width: 24px;
    height: 20px;
    @media (min-width: 1458px) {
        font-size: 40px;
        width: 75.94px;
        height: 68.97px;
    }
    &.disabled{
        color: #11141D38;
    }
    &.weekend{
        color: #626D8E;
        &.disabled{
            color: #11141D38;
        }
    }
` 