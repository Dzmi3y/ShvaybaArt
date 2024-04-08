import styled from "styled-components";

export const Container = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
`;

export const Title = styled.div`
    text-align: center;
    margin-top: 30px;
    font-family: Playfair;
    font-size: 32px;
    color: #E9EDF6;
    margin-bottom: 20px;
    @media (min-width: 1458px) {
        margin-top: 20px;
        margin-bottom: 15px;
        font-size: 64px;
    }
`;

export const Info = styled.div`
    text-align: center;
    font-family: Varta;
    font-size: 15px;
    font-weight: 300;
    color: #C4CFEE;
    margin-bottom: 20px;
    @media (min-width: 1458px) {
        margin-bottom: 30px;
        font-size: 40px;
    }
`;

export const SliderContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    overflow: hidden;
    overflow-x: auto;
    -webkit-scrollbar { width: 0; };
    -ms-overflow-style: none;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;	
	-webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {           
         width: 0 !important;
    }
    @media (min-width: 775px) {
        justify-content: center; 
    }
`;

export const TicketCard = styled.div`
    scroll-snap-align: end;
    background-color: #D4DCF3;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 4px 50px 20px 4px;
    width: 264px;
    height: 320px;
    @media (min-width: 1458px) {
        border-radius: 50px 4px 4px 100px;
        width: 536px;
        height: 600px;
    }
`;

export const Name = styled.div`
    margin-top: 20px;
    font-family: Playfair;
    font-size: 24px;
    color: #11141D;
    height: 60px;
    margin-bottom: 10xp;
    @media (min-width: 1458px) {
        height: 140px;
        margin-bottom: 10px;
        font-size: 64px;
    }
`;

export const Price = styled.div`
    font-family: Playfair;
    font-size: 64px;
    color: #626D8E;
    margin-bottom: 60px;
    @media (min-width: 1458px) {
        margin-bottom: 90px;
        font-size: 140px;
      
    }
`;

export const PaginationContainer = styled.div`
    display:flex;
    justify-content: center;
    gap: 9px;
    margin-top: 34px;
    width: 100%;
    margin-left: 5px;
    @media (min-width: 775px) {
        display: none;
    }
`;

export const PaginationDot = styled.div`
    cursor: pointer;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    
    &.next{
        background-color: #626D8E;
    }
    &.current{
        background-color: #A8B7E3;
    }
    &.previous{
        background-color: #626D8E94;

    }
`;