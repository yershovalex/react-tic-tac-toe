import {winCombinations} from "../../constants";

export const createBoardElements = () => {
    return Array(9).fill(null).map((item, index) => (
        {id: index, value: null}
    ))
}

export const updateBoardItem = (index, boardElements, isXStep) => {
    return boardElements.map(cell => {
        if (cell.id === index) {
            return {...cell, value: isXStep ? 'X' : 'O'}
        }
        return {...cell}
    })
}

export const getCellValueByIndex = (boardElements, index) => {
    return boardElements.find(item => item.id === index).value;
}

export const checkIsWin = (cellsArr) => {
    for (let i = 0; i < winCombinations.length; i++) {
        const [firstPosition, secondPosition, thirdPosition] = winCombinations[i];

        if (cellsArr[firstPosition].value
            && cellsArr[firstPosition].value === cellsArr[secondPosition].value
            && cellsArr[secondPosition].value === cellsArr[thirdPosition].value
        ) {
            return true;
        }
    }

    return false;
}

export const getVictoryText = (isXStep) => {
    return `Congratulations, ${!isXStep ? 'Player 1 (X)' : 'Player 2 (O)'}, you have won!`
}