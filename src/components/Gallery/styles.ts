import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 18px;
    &>div:nth-child(3n + 1){
        justify-self: start;
    }
    &>div:nth-child(3n + 2){
        justify-self: center;
    }
    &>div:nth-child(3n + 3){
        justify-self: end;
    }


`;