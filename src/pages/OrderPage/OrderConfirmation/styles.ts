import styled from "styled-components";

export const Container = styled.div`
    padding: 80px 2rem 10px 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (min-width: 1458px) {
        padding: 20px;
    }
`;
export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
`;
export const Title = styled.div`
    color: #626D8E;
    font-family: Playfair;
    font-size: 24px;
    margin-bottom: 20px;
    @media (min-width: 1458px) {
        margin-bottom: 20px;
        font-size: 48px;
    }
`;
export const Subtitle = styled.div`
    color: #11141DB2;
    text-align: center;
    font-family: Playfair;
    font-size: 20px;
    margin-bottom: 20px;
    @media (min-width: 1458px) {
        margin-bottom: 20px;
        width: 425px;
        font-size: 24px;
    }
`;
export const PhoneContainer = styled.div`
    margin-bottom: 20px;
    @media (min-width: 1458px) {
        margin-bottom: 20px;
    }
`;
export const EmailContainer = styled.div`
    margin-bottom: 20px;
    @media (min-width: 1458px) {
        margin-bottom: 20px;
    }
`;
export const CloseButton = styled.div`
    border: none;
    box-shadow: none;
    background: none;
`;

export const CloseImage = styled.img`
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


export const ThanksForOrderContainer= styled.div`
    display: none;
    &.show{
        position: absolute;
        background-color: #F8F8F8;
        top: 100px;
        left: 0px;
        right: 0px;
        bottom: 0px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: 1458px) {
            top: 50px;
        }
    }
`;
export const ThanksImage= styled.img`
    width: 330px;
    height: 350px;
    @media (min-width: 1458px) {
        width: 484px;
        height: 513px;
    }
`;

