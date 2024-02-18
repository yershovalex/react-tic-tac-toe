import React from 'react';
import {CellWrapper} from "./styled";

export const Cell = ({item, ...props}) => {
    return (
        <CellWrapper
            $isXStep={props.isXStep}
            $value={item.value}
            $isVictoryReached={props.isVictoryReached}
            onClick={() => props.onClick(item.id)}
        >
            {item.value}
        </CellWrapper>
    );
};