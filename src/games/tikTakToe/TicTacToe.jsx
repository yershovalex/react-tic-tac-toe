import React, {useEffect, useState} from 'react';
import {Board} from "../../components/board/Board";
import {GameWrapper} from "../../components/gameWrapper/GameWrapper";
import {checkIsWin, createBoardElements, getCellValueByIndex, getVictoryText, updateBoardItem} from "./helpers";
import {ResetGameButton, WinnerText} from "./styled";
import {PlayersList} from "../../components/playersList/PlayersList";

export const TicTacToe = () => {
    const [boardElements, setBoardElements] = useState(createBoardElements);
    const [isXStep, setIsXStep] = useState(true);
    const [isVictoryReached, setIsVictoryReached] = useState(false);

    useEffect(() => {
        if (checkIsWin(boardElements)) {
            setIsVictoryReached(true);
        }
    }, [boardElements]);

    const handleCellClick = (index) => {
        //check if cell is not empty && victory not reached
        if (getCellValueByIndex(boardElements, index) || isVictoryReached) return;

        const updatedBoard = updateBoardItem(index, boardElements, isXStep)
        setBoardElements(updatedBoard);
        setIsXStep(prev => !prev)
    }

    const handleResetButtonClick = () => {
        setBoardElements(createBoardElements);
        setIsXStep(true);
        setIsVictoryReached(false);
    }

    return (
        <GameWrapper>
            <PlayersList isVictoryReached={isVictoryReached} isXStep={isXStep}/>
            <WinnerText $isVictoryReached={isVictoryReached}>
                {isVictoryReached && getVictoryText(isXStep)}
            </WinnerText>
            <Board
                cells={boardElements}
                isXStep={isXStep}
                isVictoryReached={isVictoryReached}
                onClick={handleCellClick}
            />
            <ResetGameButton onClick={() => handleResetButtonClick()}>Reset</ResetGameButton>
        </GameWrapper>
    );
};