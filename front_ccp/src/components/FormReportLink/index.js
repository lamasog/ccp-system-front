import styled from 'styled-components';

export const FormReportLink = styled.div`
    margin-top: 1.5vh;
    margin-bottom: 3vh;
    display: flex;
    flex-direction: row;
    height: 6.25vh;
    width: 38vw;
    background-color: #346E80;
    color: var(--color-secondary-text);
    border-style: none;
    border-radius: 10px;
    border: 2px solid var(--color-primary-text);
    font-size: 1.05vw;
    font-weight: bold;
    padding-left: 1vw;
    cursor: pointer;

    img {
        height: 42.5px;
        width: 42.5px;
        padding-bottom: 0.1vh;
    }

    h4 {
        padding-top: 1.2vh;
        padding-left: 0.25vw;
    }

    :hover {
        box-shadow: 0 0 10px var(--color-exit-text-background);
        border-style: none;
    }
`;