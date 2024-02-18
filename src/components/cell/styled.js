import styled from "styled-components";

const getCellContentPlaceholder = (props) => {
    if (!props.$value && !props.$isVictoryReached) {
        return props.$isXStep ? 'X' : 'O'
    }

    return ''
}


export const CellWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    color: #fff;
    border: 1px solid #fff;
    font-size: 45px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        transition: all .25s ease-in-out;
    }

    &:nth-child(1n) {
        border-left-width: 0;
    }

    &:nth-child(3n) {
        border-right-width: 0;
    }

    &:nth-child(-n + 3) {
        border-top-width: 0;
        border-bottom-width: 0;
    }

    &:nth-last-child(-n + 3) {
        border-top-width: 0;
        border-bottom-width: 0;
    }

    &:hover:before {
        content: '${props => getCellContentPlaceholder(props)}';
    }
`;