import { styled } from "styled-components";

export const InputSearch = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:first-child {
        padding-top: 2px;
        cursor: pointer;
    }

    input {
        padding: 5px;
        border: solid 1px #000;
        border-radius: 10px;
    }
`   