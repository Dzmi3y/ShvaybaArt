import styled from "styled-components";

export const Containder = styled.div`
    --circle-bg-color: #A8B7E3;
    &:hover{
        --circle-bg-color: #626D8E; 
    }
    display: flex;
    justify-content: center;
`;

export const Card = styled.div`
    margin-left: 319px;
    margin-right: 180px;
    margin-bottom: 80px;
    background-color: #D4DCF3;
    color: #11141D;
    align-items: center;
    display: flex;
    border-radius: 4px 50px 100px 4px; 
    max-width: 1232px;
    width: 1232px;
    min-height: 427px;

    &.right{
        margin-left: 180px;
        margin-right: 319px;
        border-radius:  100px 4px 4px 50px;
        &.small{
            @media (min-width: 1731px){
                margin-left: 738px;
            }
            margin-left: auto;
            max-width: 675px;
            width: 675px;
            min-height: 280px;
        }
    }
`;

export const MainText = styled.div`
    margin-left: 137px;
    margin-right: 237px;
    &.right{
        margin-left: 237px;
        margin-right: 137px;
        &.small{
            margin-left: 119px;
            margin-right: 0px;
            width: 320px;
        }
    }
`;

export const Circle = styled.div`
    background-color: var(--circle-bg-color);
    color: #E9EDF6;
    font-family: Playfair;
    font-size: 64px;
    border-radius: 50%;
    width: 278px;
    height: 278px;
    margin-left: -139px;
    &.right{
        order: 1;
        margin-right: -139px;
        margin-left: auto;
    }

    
`;
export const DateText = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   margin-top: -1rem;
   justify-content: center;
`;

export const Image = styled.img``;