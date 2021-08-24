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
    height: 180vh;
    width: 98vw;
    align-items: center;
    overflow-y: auto;
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

export const FormField = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 8vh;
    height: 165vh;
    width: 51vw;
    background-color: var(--color-background);
    border: 3px solid var(--color-primary-text);
    border-radius: 10px;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow-y: auto;
    
    h1 {
        color: var(--color-button-background);
        margin-top: 3vh;
        margin-bottom: 3vh;
        margin-left: 4vh;
        font-size: 1.9vw;
        font-weight: normal;
    }

    h3 {
        color: var(--color-primary-text);
        font-size: 1.15vw;
        font-weight: normal;
        align-self: flex-start;
        margin-top: 2.5vh;
        margin-right: 8vh;
        margin-bottom: 0.5vh;
        margin-left: 8vh;
    }
`;

export const GrayLine = styled.div`
    background-color: #D2D2D2;
    height: 0.4vh;
    width: 100%;
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
