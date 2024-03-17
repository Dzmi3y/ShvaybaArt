import styled from "styled-components";
import { BorderedButton } from "../../../components/Buttons/BorderedButton";

export const Container = styled.div`
    background-color: #11141D;
    height: 630px;
    text-align: center;
    margin: 0 2rem;
    @media (min-width: 1458px) {
        height: 1140px;
    }
`;

export const Title = styled.div`
    color: #E9EDF6;
    font-family: Playfair;
    font-size: 32px;
    margin-top: 35px;
    margin-bottom: 23px;
    @media (min-width: 1458px) {
        font-size: 64px;
        margin-bottom: 75px;
    }
`;

export const ButtonWrapper = styled.div`
    margin-top: 41px;
    @media (min-width: 1458px) {
        margin-top: 77px;
    }
`;