import styled from "styled-components";

export const Button = styled.button`
    --bg-normal: #626D8E78;
    --bg-hover: #626D8E;
    --bg-active: #11141D;
    &.red{
        --bg-normal: #CCAFAF;
        --bg-hover: #925555;
        --bg-active: #241010;
    }
    &.hide{
        display: none;
    }

    border-radius: 50%;
    width: 58px;
    height: 58px;
    right: 20px;
    top: 80%;
    border: none;
    position: fixed;
    z-index: 2;
    cursor: pointer;
    background-color: var(--bg-normal);
    &:active{
        background-color: var(--bg-active);
    }
   

    @media (min-width: 1458px) {
        &:hover{
            background-color: var(--bg-hover);
        }  
        &:active{
            background-color: var(--bg-active);
        }
        right: 40px;
        width: 119px;
        height: 119px;
    }


`;
export const Image = styled.img`
width: 12px;
height: 42px;
@media (min-width: 1458px) {
    width: 25px;
    height: 87.5px;
}
`;