import styled from "styled-components";

export const ContainerPage = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: row;
`;

export const ContainerMain = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #ffffff;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

export const ContainerLogin = styled.div`
	width: 75%;
	height: 70vh;
	margin-top: 5rem;
	margin-bottom: 6rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	a {
		text-decoration: none;
	}
	.buttonSubmit {
		width: 20rem;
		height: 5rem;
		background: var(--color-button-background);
		color: var(--color-highlight-text);
		color: #ffffff;
		border: 0;
		border-radius: 0.6rem;
		cursor: pointer;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.2s;
		margin: 2rem 0 1.2rem 0;
	}
	.buttonSubmit:hover {
		opacity: 0.8;
	}
	form {
		width: 100%;
		height: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
`;

export const DivIncorrect = styled.div`
	background-color: rgb(140, 25, 25);
	color: #ffffff;
	padding: 2px 5px;
	border-radius: 7px;
`;
