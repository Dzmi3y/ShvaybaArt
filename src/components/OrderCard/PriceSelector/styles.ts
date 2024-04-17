import styled from "styled-components";

export const Container = styled.div`
    color: #11141D;
    font-size: 20px;
    font-family: Playfair;
    margin-left: 10px;
    @media (min-width: 1458px) {
        font-size: 32px;
    }
`;

export const RowContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 50px 50px;
    margin-top: 25px;
    @media (min-width: 1458px) {
        margin-left: 2rem;
        margin-right:2rem;
        margin-top: 20px;
        grid-template-columns: 1fr 40px 30px;
        grid-gap: 10px;
    }
`;
export const Name = styled.div`

`;
export const Price = styled.div`
    
`;
export const RadiobuttonContainer = styled.div``;
export const Radiobutton = styled.input`
    display: none;
`;
export const RadiobuttonLabel = styled.label`
    width: 27px;
    height: 27px;
    display: block;
    position: relative;
    @media (min-width: 1458px) {
        width: 43px;
        height: 43px;
    }
    input[type="radio"] + span {
        position: absolute;
        left: 0; 
        top: 0;
        width: 100%;
        height: 103%;
        cursor: pointer;
        background: url(/images/global/radiobutton.png);
        background-repeat: no-repeat;
        background-size: cover;
        &:hover{
            background: url(/images/global/hover/radiobutton.png);
            background-repeat: no-repeat;
            background-size: cover;
        }
   }
   input[type="radio"]:checked + span {
        background: url(/images/global/checked/radiobutton.png);
        background-repeat: no-repeat;
        background-size: cover;
   }
`;