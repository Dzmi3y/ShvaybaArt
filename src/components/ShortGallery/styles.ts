import styled from "styled-components";

export const Container = styled.div``;
export const CardContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 1458px) {
        img:nth-child(2){
            margin-left: -40px;
            margin-top: 20px;
        }
        img:nth-child(3){
            margin-left: -40px;
            margin-top: 40px;
        }


        &.invert{
            img:nth-child(1){
                margin-top: 40px;
            }
            img:nth-child(2){
                margin-left: -40px;
                margin-top: 20px;
            }
            img:nth-child(3){
                margin-left: -40px;
                margin-top: 0px;
            }
        }
    }
`;
export const ImgCard = styled.img`

    &.next{
        display: none;
    }

    &.current{
        width: 283px;
        height: 280px;
        max-width: 100%;
        max-height: 100%;
        margin-top: 49px;
        z-index: 1;
    }

    &.previous{
        width: 227px;
        height: 219px;
        max-width: 100%;
        max-height: 100%;
        position: absolute;
        margin-left: -90px;
        z-index: 0;
    }


    @media (min-width: 1458px) {
        max-width: 556px;
        max-height: 550px;
        width: 100%;
        height: 100%;
        box-shadow: var(--shadow);
    }
`;
export const PaginationContainer = styled.div`
    display:flex;
    justify-content: center;
    gap: 9px;
    margin-top: 34px;
    
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