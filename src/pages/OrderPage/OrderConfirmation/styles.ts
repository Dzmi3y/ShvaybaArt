import styled from "styled-components";

export const Container = styled.div`
    padding: 80px 2rem 10px 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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