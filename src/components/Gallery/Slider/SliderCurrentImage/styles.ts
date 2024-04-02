import styled from "styled-components";

export const BackgroundImageContainer = styled.div`
border-radius: 4px;
background-image: none !important;;
@media (min-width: 1458px) {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
`;
export const DarkEffectDiv = styled.div`
@media (min-width: 1458px) {
    background: rgba(0, 0, 0, 0.7 );
}
width: 100%;
height: 100%;
`;
export const ImageContainer = styled.div`
touch-action: manipulation;
display: flex;
overflow: hidden;
justify-content: center;
align-items: center;
height: 100%;
width: calc(100vw - 4rem);
@media (min-width: 1458px) {
    
    height: calc(100vh - 460px);
    width: calc(100vw - 640px);
    padding-top: 10px;
    padding-bottom: 10px;
}
`;
export const Image = styled.img`
width: 100%;
@media (min-width: 1458px) {
    height: 100%;
    width: auto;
}
`;