import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    max-width: 319px;
    height: 280px;
    border-radius:  10px 4px 4px 30px;
    justify-self:end;
    display: grid;
    grid-template-rows: 68px 1fr 90px;
    color: #11141D;
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center;
    overflow: hidden;
    margin-bottom: 20px;
    @media (min-width: 1458px) {
        grid-template-rows: 120px 1fr 178px;
        border-radius:  50px 4px 4px 100px;
        max-width: 814px;
        height: 750px;
        width: 100%;
        margin-bottom: 10px;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 7px;
    padding-right: 7px;
    background: radial-gradient(300% 55% at 20% 41%, #C4CFEE 0%, rgba(196, 207, 238, 0) 100%), 
        radial-gradient(100% 55% at 80% 52%, #C4CFEE 0%, rgba(196, 207, 238, 0) 100%);
    @media (min-width: 1458px) {
        padding-left: 3rem;
        padding-right: 3rem;
        background: radial-gradient(58% 55% at 20% 50%, #C4CFEE 0%, rgba(196, 207, 238, 0) 100%);
    }
`;
export const Status = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-family: Playfair;
    font-size: 16px;
    border-radius: 20%;
    margin-top: -19px;
    @media (min-width: 1458px) {
        margin-top: 0px;
        font-weight: 600;
        font-size: 64px;
    }
`;
export const Title = styled.div`
    padding-left: 7px;
    padding-right: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-family: Playfair;
    font-size: 36px;
    text-align: center;
    background: radial-gradient(80% 50% at 50% 50%, #C4CFEE 0%, rgba(196, 207, 238, 0) 100%);
    @media (min-width: 1458px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        font-family: Playfair;
        font-size: 64px;
        max-height: 452px;
        height: 100%;
        background: radial-gradient(88.9% 28.93% at 50.06% 50%, #C4CFEE 0%, rgba(196, 207, 238, 0) 100%);
    }
;
    
    @media (min-width: 1458px) {
        font-weight: 500;
        font-size: 64px;
    }
`;
export const DescriptionContainer = styled.div`
    display: none;
    @media (min-width: 1458px) {
        background: radial-gradient(100% 55% at 20%  50%, #C4CFEE 0%, rgba(196, 207, 238, 0) 100%);
        padding-top: 20px;
        padding-left: 3rem;
        padding-right: 3rem;
        display: block;
        font-size: 40px;
        font-family: Varta;
        text-align: left;
        &>div{
            background: radial-gradient(50% 55% at 20%  48%, #C4CFEE 0%, rgba(196, 207, 238, 0) 100%);
        }
    }
`;

export const MobileDescriptionContainer = styled.div`
    display: block;
    font-size: 15px;
    font-weight: 300;
    font-family: Varta;
    text-align: right;
    margin-top: 20px;
    @media (min-width: 1458px) {
        display: none;
    }
`;

export const ButtonContainer = styled.div`
    display: none;
    @media (min-width: 1458px) {
        display: flex;
        align-items: center;
        margin-top: 30px;
    }
`;

export const MobileButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -20px;
    @media (min-width: 1458px) {
        display: none;
    }
`;