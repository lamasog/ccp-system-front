import React, { useState, useEffect } from "react";
import { ContainerPage, ContainerMain } from "../../../style/GlobalStyle";
import { SideBarContainer } from "../../../components/SideBar";
import { Content, Header } from "../style";
import Exit2 from "../../../assets/Exit2.svg";
import { useHistory } from "react-router-dom";
import Folder from "../../../assets/Home.svg";
import api from "../../../services/api";

const CCP = () => {
	const history = useHistory();
	const Link = () => {
		// para poder voltar para a página anterior //
		history.push("/formlist");
	};
	const Link1 = () => {
		// para poder voltar para a página inicial //
		history.push("/");
	};
	const dadosteste = {
		id: 1,
		aluno: "Juliano",
		aprovado: false,
		descricao:
			"O aluno foi reprovado por fazer festas no estilo american pie na cantina",
	};
	const [value200, setValue200] = useState(false);
	const [descricao, setDescricao] = useState("");

	useEffect(() => {
		api.get("https://ccpsys.herokuapp.com/relatorios/alunos/read").then(
			(response) =>
				setDescricao(response.data).catch((e) => {
					console.log("Algo deu errado" + e);
				}),
			(response) => console.log(response.data)
		);
	}, []);

	return (
		<ContainerPage>
			<SideBarContainer>
				<img src={Folder} alt="Folder"></img>
			</SideBarContainer>
			<ContainerMain>
				<Header>
					<button
						className="buttonBackorExit"
						id="voltar"
						onClick={() => history.goBack()}
					>
						Voltar
					</button>
					<button
						className="buttonBackorExit"
						type="submit"
						onClick={Link1}
					>
						Sair
						<img className="imgExit" src={Exit2} alt="Exit"></img>
					</button>
				</Header>
				<hr />
				<Content>
					<div className="containerContentInput">
						<span className="contentText">
							Parecer dado pela CCP
						</span>
					</div>
					<div className="parecer">
						<span className="subContentText">
							Situação:
							{dadosteste.aprovado ? " Aprovado" : " Reprovado"}
						</span>
						<br />
						<span className="subContentText">
							Descrição:{" " + dadosteste.descricao}
						</span>
					</div>
				</Content>
			</ContainerMain>
		</ContainerPage>
	);
};
export default CCP;
