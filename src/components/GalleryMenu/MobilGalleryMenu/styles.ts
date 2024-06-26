import styled from "styled-components";

export const Container = styled.nav`
    --text-color: #11141D;
    --selected-text-color: #E9EDF6;
    --bg-color: #D4DCF3;
    --selected-bg-color:#C4CFEE;
    --model-height: 234px;
    &.red{
        --text-color: #241010;
        --selected-text-color: #FFD2D2;
        --bg-color: #FFF0F0;
        --selected-bg-color:#FFD2D2;
        --model-height: 114px;
    }
    display: block;
    margin-top:70px;
    @media (min-width: 1458px){
        display: none;
    }
`;

export const TitleContainer = styled.div`
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        margin-bottom: 12px;
`;

export const CurrentTitle = styled.div`
    font-size: 20px;
    color: var(--selected-text-color);
    font-family: Playfair;
`;

export const AngleImg = styled.img`
    width: 12px;
    height: 6px;
    margin-top: 5px;
    transform: rotate(180deg);
    &.open{
        transform: rotate(0deg);
        
    }
`;

export const ImgContainer = styled.div`
    &.open{
        &::after{
            content: ''; 
            margin-left: -16px;
            border: 10px solid transparent; 
            border-bottom: 10px solid var(--bg-color); 
        }
    }
`; 

export const Modal = styled.div`
    display: none;
    &.open{
        position: absolute;
        z-index: 2;
        left:2rem;
        right: 2rem;
        height: var(--model-height);
        border-radius: 4px;
        display: flex;
        gap: 20px;
        flex-direction:column;
        background-color: var(--bg-color);
        box-shadow: var(--shadow);
    }
`;

export const ModalTextContainer = styled.div`
    height: 40px;
    font-weight: 400;
    border-radius: 4px;
    cursor: pointer;
    &.selected{
        font-weight: 500;
        background-color: var(--selected-bg-color);
    }
`;

export const Text = styled.div`
    margin-top: 6px;
    margin-bottom: 7px;
    font-size: 20px;
    color: var(--text-color);
    font-family: Playfair;
    text-align: center;
`;

