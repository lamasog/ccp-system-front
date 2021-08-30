import styled from "styled-components";

export const Wrapper = styled.div`
    justify-content: space-around;
    height: 100vh;
    width: 100vw;
`;

export const BlueBox = styled.div`
    background-color: var(--color-primary-text);
    height: 27.5vh;
    width: 99vw;
    margin: 0;
    text-align: center;

    h1 {
        color: var(--color-background);
        margin-top: 8.85vh;
        font-size: 1.9vw;
        font-weight: normal;
        text-shadow: 1.5px 1.5px var(--color-title-text);
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    height: 125vh;
    width: 98vw;
    align-items: center;
    overflow-y: auto;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: -1vh;

    h4 {
        color: var(--color-primary-text);
        font-size: 1vw;
        font-weight: normal;
        margin-top: 0.5vh;
        margin-left: 1vh;
    }
`;

export const ExitButton = styled.div`
	width: 9vw;
	height: 6.75vh;
	background: var(--color-exit-button-background);
	color: var(--color-exit-text-background);
    position: fixed;
	border: 0;
	border-radius: 50px;
    margin-top: -81vh;
    margin-left: -82.5vw;
	cursor: pointer;
	font-size: 1.125vw;
    font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	transition: 0.2s;
	box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
    z-index: 1;

    :hover { opacity: 0.8; }
`;

export const Form = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 8.25vh;
    margin-bottom: 3vh;
    height: 100vh;
    width: 51vw;
    background-color: var(--color-secondary-text);
    border-radius: 10px;
    box-shadow: 3px 3px 5px;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow-y: auto;
    
    h1 {
        color: var(--color-button-background);
        margin-top: 2vh;
        margin-bottom: 2vh;
        font-size: 1.6vw;
        font-weight: normal;
    }

    h3 {
        color: var(--color-primary-text);
        font-size: 1.15vw;
        font-weight: normal;
        align-self: flex-start;
        margin-top: 3.5vh;
        margin-right: 8vh;
        margin-bottom: 0.5vh;
        margin-left: 8vh;
    }
`;

export const GrayLine = styled.div`
    background-color: #D2D2D2;
    height: 0.4vh;
    width: 100%;
    margin-top: 3vh;
    margin-bottom: 2vh;
`;

export const BlueLine1 = styled.div`
    background-color: var(--color-title-text);
    height: 3vh;
    width: 100%;
    margin-top: 0vh;
`;

export const BlueLine2 = styled.div`
    background-color: var(--color-title-text);
    height: 3vh;
    width: 100%;
    margin-top: 10vh;
`;

export const TextField = styled.textarea`
    display: flex;
    margin-bottom: 4vh;
    height: 17.5vh;
    width: 40vw;
    background-color: #E5E5E5;
    color: #707070;
    border-style: none;
    border-radius: 10px;
    box-shadow: 2px 2px 2px;
    font-size: 1.125vw;
    padding-top: 1.5vh;
    padding-right: 3vh;
    padding-left: 3vh;
    overflow-y: auto;

    :hover {
        box-shadow: 0 0 10px var(--color-exit-text-background);
        border-style: none;
    }
`;

export const RadioField = styled.input`
    display: flex;
    margin-top: 1.35vh;
    margin-left: 12vh;
    cursor: pointer;
`;

export const ButtonField = styled.button`
    margin-top: 9.25vh;
    display: flex;
    height: 7.5vh;
    width: 10vw;
    background-color: var(--color-exit-text-background);
	color: var(--color-exit-button-background);
    border: 0;
	border-radius: 50px;
	cursor: pointer;
    display: flex;
	align-items: center;
	justify-content: center;
    font-size: 1.125vw;
    font-weight: bold;
    padding: 2vh;
    transition: 0.2s;
	box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);

    :hover { opacity: 0.8; }
`;