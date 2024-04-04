import styled from "styled-components";

export const Container = styled.nav`
    --text-color: #A8B7E3;
    --selected-text-color: #E9EDF6;
    &.red{
        --text-color: #D69898;
        --selected-text-color: #FFD2D2;
    }

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
    color: var(--text-color);
    cursor: pointer;
    
    &.selected{
        color: var(--selected-text-color);
    }
`;