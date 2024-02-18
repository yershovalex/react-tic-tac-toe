import styled from "styled-components";

export const WinnerText = styled.div`
    color: #58de01;
    font-size: 35px;
    margin: 40px 0;
    height: 50px;
    opacity: ${(props) => props.$isVictoryReached ? 1 : 0};
    transition: all .5s ease-in-out;
    text-align: center;
`;

export const ResetGameButton = styled.div`
    color: #fff;
    text-align: center;
    font-size: 25px;
    line-height: 50px;
    border: 1px solid #fff;
    border-radius: 10px;
    margin-top: 40px;
    width: 175px;
    height: 50px;
    background: transparent;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        border: 1px solid #ff0000;
        color: #ff0000;
        box-shadow: 0 0 30px #ff0000;
    }
`;