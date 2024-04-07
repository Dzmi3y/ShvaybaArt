import styled from "styled-components";

export const Container = styled.div`
    
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const WhiteContainer = styled.div`
    background: rgba(255,255,255,0.4);
    top: 0;
    bottom: 0;
    left:  0;
    right: 0;
    z-index: 0;
    color: #11141D;
    text-align: center;
    padding-top: 80px;
    padding-bottom: 50px;
    &>div{
        margin-left: 2rem;
        margin-right: 2rem;
    } 
    @media (min-width: 1458px) {
        padding-top: 140px;
        padding-bottom: 120px;
    }

`

export const HeadContainer = styled.div`
   text-align: left;
`;
export const BackImage= styled.img`
    width: 10px;
    height: 20px;
    cursor: pointer;
    content: url(/images/exhibitions/icons/backArrow.png);
    &:hover{
        content: url(/images/exhibitions/icons/hover/backArrow.png);
    }
    &:active{
        content: url(/images/exhibitions/icons/active/backArrow.png);
    }
    @media (min-width: 1458px) {
        width: 20px;
        height: 40px;
    }
`;

export const Title = styled.div`
    font-family: Playfair;
    font-size: 24px;
    margin-bottom: 10px;
    @media (min-width: 1458px) {
        font-size: 58px;
        margin-bottom: 15px;
    }
`;

export const ExhibitionName = styled.div`
    font-family: Playfair;
    font-size: 40px;
    margin-bottom: 20px;
    @media (min-width: 1458px) {
        font-size: 96px;
        margin-bottom: 60px;
    }`;

export const Date = styled.div`
    font-family: Varta;
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 30px;
    @media (min-width: 1458px) {
        font-weight: 400;
        font-size: 40px;
        margin-bottom: 80px;
    }
`;