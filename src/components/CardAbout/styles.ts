import styled from "styled-components";

export const Containder = styled.div`
    --circle-bg-color: #A8B7E3;
    &:hover{
        --circle-bg-color: #626D8E; 
    }
    @media (min-width: 1458px){
        display: flex;
        justify-content: center;
    }
`;

export const Card = styled.div`
   
    background-color: #D4DCF3;
    color: #11141D;
    align-items: center;
    display: flex;
    border-radius: 4px 0px 0px 20px; 
    margin-left: 20px;
    margin-bottom: 20px;
    &.small{
            width: 320px;
            border-radius: 4px 20px 20px 20px; 
            height: 100px;
        }  

    &.right{
        margin-left: 0px;
        margin-right: 20px;
        border-radius: 0px 20px 4px 0px;  
    }


    @media (min-width: 1458px){
        border-radius: 4px 50px 100px 4px; 
        margin-left: 319px;
        margin-right: 180px;
        margin-bottom: 80px;
        max-width: 1232px;
        width: 1232px;
        min-height: 427px;
        &.right{
            margin-left: 180px;
            margin-right: 319px;
            border-radius: 100px 4px 4px 50px;
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
    }
`;

export const MainText = styled.div`
    font-size: 20px;
    margin-left: 19px;
    margin-right: 19px;
    white-space: pre-line;  
    line-height: 2rem;
    margin-top: 40px;
    margin-bottom: 40px;
    @media (min-width: 1458px){
        line-height: 4rem;
        font-size: 40px;
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
    }
`;

export const Circle = styled.div`
    background-color: var(--circle-bg-color);
    color: #E9EDF6;
    font-family: Playfair;
    border-radius: 50%;
    height: 119px;
    width: 119px;
    min-width: 119px;
    margin-top: 10px;
    margin-left: -80px;
    display: flex;
    justify-content: end;
    align-items: center;
    &.right{
            order: 1;
            margin-right: -80px;
            margin-left: auto;
            justify-content: start;
    }

    @media (min-width: 1458px){
        justify-content: center;
        font-size: 64px;
        width: 278px;
        min-width: 279px;
        height: 278px;
        margin-top: 0px;
        margin-left: -139px;
        &.right{
            order: 1;
            margin-right: -139px;
            margin-left: auto;
        }
    }
    
`;
export const DateText = styled.div`
    font-weight: 600;
    width: 29px;
    &.text{
        width: 20px;
        margin-right: 20px;
        line-height: 23px;
    }
    font-size: 24px;
    word-wrap: break-word;
    align-items: center;
    margin-top: -1rem;
    margin-right: 12px;
    line-height: 28px;
    text-align: center;
    &.right{
        width: 29px;
        @media (min-width: 1458px){
            width: 100%;
        }
        margin-right: 0px;
        margin-left: 11px;
    }
    @media (min-width: 1458px){
        font-weight: 400;
        display: flex;
        width: 100%;
        height: 100%;
        white-space: normal;
        font-size: 64px;
        margin-top: -1rem;
        align-items: center;
        justify-content: center;
    }
`;

export const Image = styled.img``;