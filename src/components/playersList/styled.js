import styled, {keyframes} from "styled-components";

const blinkAnimation = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

export const PlayersListWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 40px;
    max-width: 500px;
    width: 100%;
`

export const PlayerTitle = styled.div`
    text-align: center;
    color: ${props => !props.$isVictoryReached && props.$isActive ? '#58de01' : '#fff'};
    text-shadow: ${props => props.$isActive ? '0 0 10px #58de01' : 'none'};
    animation: ${props => !props.$isVictoryReached && props.$isActive ? blinkAnimation : 'none'} 2.5s infinite;
    transition: all .3s ease-in-out;
`;