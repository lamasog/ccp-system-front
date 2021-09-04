import styled from "styled-components";

export const ExitButton = styled.div`
	width: 9vw;
	height: 6.75vh;
	background: var(--color-exit-button-background);
	color: var(--color-exit-text-background);
	border: 0;
	border-radius: 50px;
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

	:hover {
		opacity: 0.8;
	}
`;

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	padding: 5rem 2rem;
	a {
		text-decoration: none;
	}
	.buttonBackorExit {
		width: 9.5rem;
		height: 5rem;
		background: var(--color-exit-button-background);
		color: var(--color-exit-text-background);
		border: 0;
		border-radius: 2.2rem;
		cursor: pointer;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		transition: 0.2s;
		box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
	}
	.buttonBackorExit:hover {
		opacity: 0.8;
	}

	.ContainerHeaderText {
		line-height: 5rem;
		text-align: center;
	}
	.headerText {
		color: var(--color-primary-text);
		font-size: 25px;
		display: inline-block;
		vertical-align: middle;
		line-height: normal;
		font-weight: 700;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	}
	.imgExit {
		width: 30%;
		padding: 1px;
		margin: auto 0;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	padding: 5rem 2rem;
	.sendButton {
		margin-top: 5px;
		width: 20rem;
		height: 5rem;
		background: var(--color-button-background);
		color: var(--color-secondary-text);
		border: 0;
		border-radius: 2.5rem;
		cursor: pointer;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		transition: 0.2s;
		box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
	}
	.sendButton:hover {
		opacity: 0.8;
	}
	.contentText {
		color: var(--color-primary-text);
		font-size: 18px;
		display: inline-block;
		vertical-align: middle;
		line-height: normal;
		font-weight: 700;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	}
	.subContentText {
		color: var(--color-primary-text);
		font-size: 16px;
		display: inline-block;
		vertical-align: middle;
		line-height: normal;
		font-weight: 500;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	}
	.subContentText2 {
		color: var(--color-primary-text);
		font-size: 16px;
		margin-left: 10px;
		display: inline-block;
		vertical-align: middle;
		line-height: normal;
		font-weight: 500;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	}
`;

export const StudentDiv = styled.div`
	margin-bottom: 30px;
	padding: 15px;
	border: 1px solid rgb(0, 0, 0, 0.2);
	border-radius: 10px;
`;

export const TextField = styled.textarea`
	display: flex;
	margin: 15px 0;
	max-height: 17.5vh;
	max-width: 98%;
	min-width: 98%;
	background-color: #e5e5e5;
	color: #707070;
	border-style: none;
	border-radius: 10px;
	box-shadow: 2px 2px 2px;
	font-size: 1em;
	overflow-y: auto;

	:hover {
		box-shadow: 0 0 10px var(--color-exit-text-background);
		border-style: none;
	}
`;
