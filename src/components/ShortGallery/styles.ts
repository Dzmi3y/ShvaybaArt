import styled from "styled-components";

export const Container = styled.div`
    height: 370px;
    @media (min-width: 1458px) {
        height: 611px;
    }
`;
export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 320px;
    margin-top: 20px;

    @media (min-width: 1458px) {
        height: 1000px;
        
        img:nth-child(2){
            margin-left: -40px !important;
            margin-top: 20px !important;
        }
        img:nth-child(3){
            margin-left: -40px !important;
            margin-top: 40px !important;
        }

        &.invert{
            img:nth-child(1){
                margin-top: 40px !important;
            }
            img:nth-child(2){
                margin-left: -40px !important;
                margin-top: 20px !important;
            }
            img:nth-child(3){
                margin-left: -40px !important;
                margin-top: 0px !important;
            }
        }
    }
`;
export const ImgCard = styled.img`

    @media (max-width: 1457px) {
        @keyframes previousLeftAnimation {
                0%   {width: 283px; height: 280px;margin-top: 49px; position: absolute; margin-left: 0px; z-index: 2;}
                100% {width: 227px; height: 219px;margin-top: 0px; position: absolute; margin-left: -90px; z-index: 1;}
        }
        @keyframes currentLeftAnimation {
                0%   {width: 183px; height: 180px;margin-top: 200px; position: absolute; margin-left: 100px; z-index: 3; opacity: 0%}
                100% {width: 283px; height: 280px;margin-top: 49px; position: absolute; margin-left: 0px; z-index: 2; opacity: 100%}
        }
        @keyframes nextLeftAnimation {
                0%   {width: 227px; height: 219px;margin-top: 0px; position: absolute; margin-left: -90px; z-index: 1; opacity: 100%}
                100% {width: 227px; height: 219px;margin-top: 0px; position: absolute; margin-left: 10px; z-index: 0;opacity: 0%}
        }


        @keyframes  currentRightAnimation{
                100%   {width: 283px; height: 280px;margin-top: 49px; position: absolute; margin-left: 0px; z-index: 2;}
                0%      {width: 227px; height: 219px;margin-top: 0px; position: absolute; margin-left: -90px; z-index: 1;}
        }
        @keyframes   nextRightAnimation{
                100%   {width: 183px; height: 180px;margin-top: 200px; position: absolute; margin-left: 100px; z-index: 3; opacity: 0%}
                0%      {width: 283px; height: 280px;margin-top: 49px; position: absolute; margin-left: 0px; z-index: 2; opacity: 100%}
        }
        @keyframes previousRightAnimation {
                100%   {width: 227px; height: 219px;margin-top: 0px; position: absolute; margin-left: -90px; z-index: 1; opacity: 100%}
                0% {width: 227px; height: 219px;margin-top: 0px; position: absolute; margin-left: 10px; z-index: 0;opacity: 0%}
        }



        &.next{
            opacity: 0%;
            &.leftAnimation{
                
                animation: 1s ease-in-out normal nextLeftAnimation;
                animation-fill-mode: forwards;
            }
            &.rightAnimation{
                
                animation: 1s ease-in-out normal nextRightAnimation;
                animation-fill-mode: forwards;
            }
        }

        &.current{
            max-width:  283px;
            max-height: 280px;
            width: 100%;
            height: 100%;
            margin-top: 49px;
            position: absolute;
            z-index: 1; 
            &.leftAnimation{
                
                animation: 1s ease-in-out normal currentLeftAnimation;
                animation-fill-mode: forwards;
            }
            &.rightAnimation{
                
                animation: 1s ease-in-out normal currentRightAnimation;
                animation-fill-mode: forwards;
            }

        }

        &.previous{
            width: 100%;
            height: 100%;
            max-width: 227px ;
            max-height: 219px ;
            position: absolute;
            margin-left: -90px;
            z-index: 0; 
            
            &.leftAnimation{    
                //start position
                max-width:  283px;
                max-height: 280px;
                width: 100%;
                height: 100%;
                margin-top: 49px;
                position: absolute;
                z-index: 1; 
                
                animation: 1s ease-in-out normal previousLeftAnimation;
                animation-fill-mode: forwards;
            }
            &.rightAnimation{
                
                animation: 1s ease-in-out normal previousRightAnimation;
                animation-fill-mode: forwards;
            }
        }
    }

    @media (min-width: 1458px) {
        &.leftAnimation,
        &.rightAnimation,
        &.next,
        &.previous,
        &.current{
            position: static;
            max-width: 556px;
            max-height: 550px;
            width: 100%;
            height: auto;
        }
    }
`;

export const PaginationContainer = styled.div`
    display:flex;
    justify-content: center;
    gap: 9px;
    margin-top: 34px;
    position: absolute;
    z-index: 4;
    width: 100%;
    margin-left: -2rem;
    @media (min-width: 1458px) {
        display: none;
    }
`;

export const PaginationDot = styled.div`
    cursor: pointer;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    
    &.next{
        background-color: #626D8E;
    }
    &.current{
        background-color: #A8B7E3;
    }
    &.previous{
        background-color: #626D8E94;

    }
`;