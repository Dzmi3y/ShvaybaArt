import styled from "styled-components";

export const Container = styled.div`
    padding: 0.5rem 2rem;
    text-align: center;
    @media (min-width: 1458px) {
        padding: 20px 90px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;
export const Header = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    gap: 10px;
    @media (min-width: 1458px) {
        margin-bottom: 30px;
    }
`;
export const Mounth = styled.div`
    font-family: Playfair;
    font-size: 32px;
    color: #626D8E;
    text-align: start;
    @media (min-width: 1458px) {
        font-size: 64px;
    }

`;
export const PreviousMounthButton = styled.button`
    border: none;
    background: none;
    box-shadow: none;
    margin-top: 5px;
    @media (min-width: 1458px) {
        margin-top: 35px; 
    }
`;
export const PreviousMounthImg = styled.img`
    cursor: pointer;
    width: 28px;
    height: 10px;
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
    margin-top: 5px;
    @media (min-width: 1458px) {
        margin-top: 35px; 
    }
`;
export const NextMounthImg = styled.img`
    cursor: pointer;
    transform: rotate(180deg);
    width: 28px;
    height: 10px;
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
    margin-top: 0px;
    margin-left: auto;
    @media (min-width: 1458px) {
        margin-top: 23px;
        margin-right: -55px;
    }
`;
export const CloseImg = styled.img`
    cursor: pointer;
    height: 20px;
    width: 20px;
    content: url("/images/global/close.png");
    &:active{
        content: url("/images/global/active/close.png");
    }
    @media (min-width: 1458px) {
        height: 35px;
        width: 35px;
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
    grid-template-columns: repeat(7, auto);
    grid-template-rows: repeat(6, 1fr);
    justify-content: space-between; 
    width: 100%;
    @media (min-width: 1458px) {
        grid-row-gap: 10px;
    }
`;

export const DayTitle = styled.div`
    font-family: Playfair;
    font-size: 16px;
    color: #11141D;
    @media (min-width: 1458px) {
        font-size: 40px;
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