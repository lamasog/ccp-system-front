import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormReportLink } from "../../components/FormReportLink/index";
import DocX from "../../assets/docx_icon.png";
import { ExitButton, Header, Content, StudentDiv, TextField } from "./style";
import { SideBarContainer } from "../../components/SideBar";
import Folder from "../../assets/Home.svg";
import Exit2 from "../../assets/Exit2.svg";
import { ContainerPage, ContainerMain } from "../../style/GlobalStyle";

const CCPFeedback = () => {
	const history = useHistory();
	const Link1 = () => {
		// para poder voltar para a página inicial //
		history.push("/");
	};
	const Link2 = () => {
		history.push("/form"); // para preencher formulário //
	};
	const Link3 = () => {
		history.push("/student"); // para visualizar parecer do Orientador //
	};
	const Link4 = () => {
		history.push("/student"); // para visualizar parecer da CCP //
	};

	const dadosteste = [
		{
			id: 1,
			aluno: "Juliano",
			aprovado: false,
			descricao:
				"O aluno foi reprovado por fazer festas no estilo american pie na cantina",
		},
		{
			id: 2,
			aluno: "Clementina",
			aprovado: true,
			descricao:
				"O aluno foi aprovado com otimas notas, se espera que ela possa atingir otimos resultados no futuro",
		},
		{
			id: 3,
			aluno: "Alexandre",
			aprovado: false,
			descricao: "O aluno foi reprovado por ser ele mesmo",
		},
	];

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
					{dadosteste.map((avaliacao) => (
						<StudentDiv>
							<span className="contentText">
								Aluno número {avaliacao.id}
							</span>
							<hr />

							<span className="subContentText">
								Nome: {avaliacao.aluno}
							</span>
							<br />
							<span className="subContentText">
								Avaliação dos Orientadores
							</span>
							<br />
							<span className="subContentText2">
								Situação:{" "}
								{avaliacao.aprovado ? "Aprovado" : "Reprovado"}
							</span>
							<br />
							<span className="subContentText2">
								Descrição:
								{" " + avaliacao.descricao}
							</span>
							<br />
							<span className="subContentText">
								Avaliação da CCP
							</span>
							<br />
							<span className="subContentText2">Situação:</span>
							<div style={{ marginLeft: "10px" }}>
								<input
									type="radio"
									id="aprovado"
									name={avaliacao.id}
									value="aprovado"
									checked
								/>
								<label for="Aprovado"> Aprovado</label>
							</div>
							<div style={{ marginLeft: "10px" }}>
								<input
									type="radio"
									id="reprovado"
									name={avaliacao.id}
									value="reprovado"
								/>
								<label for="reprovado"> Reprovado</label>
							</div>
							<span className="subContentText2">Descrição:</span>
							<br />
							<TextField rows="4" id="p1" />
							<button
								className="sendButton"
								type="submit"
								onClick={Link3}
							>
								Avaliar
							</button>
						</StudentDiv>
					))}
				</Content>
			</ContainerMain>
		</ContainerPage>
	);
};

export default CCPFeedback;
