import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100vh;
    width: 100vh;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    height: 800vh;
    width: 100vh;
    align-items: center;
    overflow-y: auto;
`;

export const Row = styled.div`
    width: 100vh;
    display: flex;
    flex-direction: row;
    margin-bottom: -1vh;

    h4 {
        color: #1F4652;
        font-weight: normal;
        margin-top: 0.5vh;
        margin-left: 1vh;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6vh;
    margin-bottom: 3vh;
    height: 80vh;
    width: 95vh;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 3px 3px 5px;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    h1 {
        color: #4A98B0;
        margin-top: 3vh;
        margin-bottom: 3vh;
        margin-left: 4vh;
        font-weight: normal;
    }

    h3 {
        color: #1F4652;
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
    margin-bottom: 0.5vh;
`;

export const SmallTextField = styled.input`
    display: flex;
    height: 5vh;
    width: 80vh;
    background-color: #E5E5E5;
    color: #7D7D7D;
    border-style: none;
    border-radius: 10px;
    box-shadow: 2px 2px 2px;
    font-size: 2.25vh;
    padding: 3vh;
    overflow-y: auto;

    :hover {
        box-shadow: 0 0 10px #4A98B0;
        border-style: none;
    }
`;

export const LargeTextField = styled.textarea`
    display: flex;
    height: 15vh;
    width: 80vh;
    background-color: #E5E5E5;
    color: #707070;
    border-style: none;
    border-radius: 10px;
    box-shadow: 2px 2px 2px;
    font-size: 2.25vh;
    padding-top: 1.5vh;
    padding-right: 3vh;
    padding-left: 3vh;
    overflow-y: auto;

    :hover {
        box-shadow: 0 0 10px #4A98B0;
        border-style: none;
    }
`;

export const RadioField = styled.input`
    display: flex;
    margin-top: 1.35vh;
    margin-left: 12vh;
`;

export const Footer = styled.div`
    margin-top: 3vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Circle = styled.div`
    margin: 0.5vh;
    height: 2vh;
    width: 2vh;
    border-radius: 50%;
    background-color: #7D7D7D;
`;

export const CircleNow = styled.div`
    margin: 0.5vh;
    height: 2vh;
    width: 2vh;
    border-radius: 50%;
    background-color: #4A98B0;
`;

export const ButtonField = styled.button`
    margin-top: 3vh;
    display: flex;
    height: 7.5vh;
    width: 15vh;
    background-color: #4A98B0;
    color: #1F4652;
    border-style: 2px solid #1F4652;
    border-radius: 7.5px;
    text-align: center;
    font-size: 2.25vh;
    font-weight: bold;
    padding: 2vh;
    padding-left: 4vh;

    :hover { box-shadow: 0 0 15px #4A98B0; }
`;