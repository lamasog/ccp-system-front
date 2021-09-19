import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormReportLink } from "../../components/FormReportLink/index";
import DocX from "../../assets/docx_icon.png";
import { ExitButton, Header, Content, StudentDiv, TextField } from "./style";
import { SideBarContainer } from "../../components/SideBar";
import Folder from "../../assets/Home.svg";
import Exit2 from "../../assets/Exit2.svg";
import { ContainerPage, ContainerMain } from "../../style/GlobalStyle";
import api from "../../services/api";

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

	const [codigo, setCodigo] = useState();
	//const [aluno, setAluno] = useState("");
	const [situacao, setSituacao] = useState("");
	//const [descricao, setDescricao] = useState("");
	const [value200, setValue200] = useState(false);

	const dadosteste = [
		{
			id: 1,
			aluno: "Juliano",
			situacao: "Insatisfatório",
			descricao:
				"O aluno foi reprovado por fazer festas no estilo american pie na cantina",
		},
		{
			id: 2,
			aluno: "Clementina",
			situacao: "Aprovado",
			descricao:
				"O aluno foi situacao com otimas notas, se espera que ela possa atingir otimos resultados no futuro",
		},
		{
			id: 3,
			aluno: "Alexandre",
			situacao: "Aprovado com Ressalvas",
			descricao:
				"O aluno foi aprovado mas com ressalvas por ser ele mesmo",
		},
	];

	async function handleSubmit(e) {
		try {
			const response = await api.post(
				"https://ccpsys.herokuapp.com/relatorios/ccp/feedback",
				{
					codigo,
					situacao,
				}
			);
			setValue200(true);
			console.log(response.value);
			if (response.status === 200) {
				alert("Avaliação realizada com sucesso!");
			}
		} catch (e) {
			console.log(e);
			console.log(e.response);
		}
	}

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
								Situação:
								{"   "}
								{avaliacao.situacao}
							</span>
							<br />
							<span className="subContentText2">
								Descrição:
								{" " + avaliacao.descricao}
							</span>
							<br />
							<form onSubmit={handleSubmit}>
								<span className="subContentText2">
									Confirme o código do aluno:
								</span>
								<br />
								<input
									style={{ marginLeft: "10px" }}
									rows="4"
									name={avaliacao.id}
									type="number"
									value={codigo}
									onChange={(e) => setCodigo(e.target.value)}
								/>
								<br />
								<span className="subContentText">
									Avaliação da CCP
								</span>
								<br />
								<span className="subContentText2">
									Situação:
								</span>
								<div style={{ marginLeft: "10px" }}>
									<input
										type="radio"
										id="aprovado"
										name={avaliacao.id}
										value="aprovado"
										onChange={(e) =>
											setSituacao(e.target.value)
										}
									/>
									<label for="aprovado"> Aprovado</label>
								</div>
								<div style={{ marginLeft: "10px" }}>
									<input
										type="radio"
										id="aprovado_ressalvas"
										name={avaliacao.id}
										value="aprovado com ressalvas"
										onChange={(e) =>
											setSituacao(e.target.value)
										}
									/>
									<label for="aprovado com Ressalvas">
										{" "}
										Aprovado com Ressalvas
									</label>
								</div>
								<div style={{ marginLeft: "10px" }}>
									<input
										type="radio"
										id="insatisfatorio"
										name={avaliacao.id}
										value="insatisfatorio"
										onChange={(e) =>
											setSituacao(e.target.value)
										}
									/>
									<label for="insatisfatorio">
										{" "}
										Insatisfatório
									</label>
								</div>
								<div style={{ marginLeft: "10px" }}>
									<input
										type="radio"
										id="naoseaplica"
										name={avaliacao.id}
										value="naoseaplica"
										onChange={(e) =>
											setSituacao(e.target.value)
										}
									/>
									<label for="naoseaplica">
										{" "}
										Não se aplica
									</label>
								</div>
								{/**
 									* <span className="subContentText2">
									Descrição:
									</span>
									<br />
								<TextField rows="4" id="p1" />
 								*/}

								<button className="sendButton" type="submit">
									Avaliar
								</button>
							</form>
						</StudentDiv>
					))}
				</Content>
			</ContainerMain>
		</ContainerPage>
	);
};

export default CCPFeedback;
