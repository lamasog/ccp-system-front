import styled from "styled-components";

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	padding: 5rem 2rem;
	a {
		text-decoration: none;
	}
	.buttonExit {
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
	.buttonExit:hover {
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
	.contentButton {
		width: 30rem;
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
	.contentButton:hover {
		opacity: 0.8;
	}
	.containerContentInput {
		line-height: 5rem;
		text-align: left;
		margin-bottom: 3rem;
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
`;
