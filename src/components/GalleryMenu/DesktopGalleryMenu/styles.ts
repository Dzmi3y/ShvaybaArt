import styled from "styled-components";

export const Container = styled.nav`
    display: none;
    margin-top: 100px;
    margin-bottom: 94px;
    @media (min-width: 1458px){
        height: 86px;
        display: flex;
        gap: 91px;
        justify-content: center;    
    }
`;
export const Text = styled.div`
    font-family: Playfair;
    font-size: 64px;
    color:#A8B7E3;
    cursor: pointer;
    
    &.selected{
        color: #E9EDF6;
    }
`;