import React from 'react';
import {BoardWrapper} from "./styled";
import {Cell} from "../cell/Cell";

export const Board = ({cells, ...props}) => {
    return (
        <BoardWrapper>
            {
                cells.map(cell => (
                    <Cell key={cell.id}
                          item={cell}
                          {...props}

                    />
                ))
            }
        </BoardWrapper>
    );
};