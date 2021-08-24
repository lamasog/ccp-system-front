import styled from "styled-components";

export const StudentForm = styled.button`
    margin-top: 3vh;
    display: flex;
    height: 6vh;
    width: 40vw;
    background-color: var(--color-secondary-text);
    color: #7D7D7D;
    border-style: none;
    border-radius: 10px;
    border: 2px solid #D2D2D2;
    font-size: 1.05vw;
    padding-top: 1.2vh;
    padding-left: 1.25vw;
    cursor: pointer;

    :hover {
        box-shadow: 0 0 10px var(--color-exit-text-background);
        border-style: none;
    }
`;