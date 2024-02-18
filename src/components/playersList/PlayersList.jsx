import React from 'react';
import {PlayersListWrapper, PlayerTitle} from "./styled";

export const PlayersList = ({isXStep, isVictoryReached}) => {
    return (
        <PlayersListWrapper>
            <PlayerTitle
                $isVictoryReached={isVictoryReached}
                $isActive={isXStep === true}
            >
                Player 1 (X)
            </PlayerTitle>
            <PlayerTitle
                $isVictoryReached={isVictoryReached}
                $isActive={isXStep === false}
            >
                Player 2 (O)
            </PlayerTitle>
        </PlayersListWrapper>
    );
};