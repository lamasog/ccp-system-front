import React from "react";
import { useHistory } from "react-router-dom";
import Exit2 from "../../assets/Exit2.svg";
import { HeaderStyled } from "./style";

const Header = (props) => {
	const titulo = props.titulo;
	const history = useHistory();
	const Link1 = () => {
		// para poder voltar para a página inicial //
		history.push("/");
	};
	return (
		<HeaderStyled>
			<div className="ContainerHeaderText">
				<span className="headerText">{titulo}</span>
			</div>
			<button className="buttonExit" type="submit" onClick={Link1}>
				Sair
				<img className="imgExit" src={Exit2} alt="Exit"></img>
			</button>
		</HeaderStyled>
	);
};
export default Header;
