import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
	Wrapper,
	Column,
	Row,
	ExitButton,
	Form,
	GrayLine,
	SmallTextField,
	RadioField,
	LargeTextField,
	ButtonField,
} from "./styles";

const FormPage = () => {
	const [codigo, setCodigo] = useState(0);
	const [email, setEmail] = useState("");
	const [aluno, setAluno] = useState("");
	const [orientador, setOrientador] = useState("");
	const [numUsp, setNumUsp] = useState();
	const [linkLattes, setLinkLattes] = useState("");
	const [data, setData] = useState("");
	const [resulRelatorio, setResulRelatorio] = useState("");
	const [curso, setCurso] = useState("");
	const [semeste, setSemestre] = useState("");
	const [aprovQtd, setAprovQtd] = useState();
	const [aprovQtdOpt, setAprovQtdOpt] = useState();
	const [divulgados, setDivulgados] = useState("");
	const [reprovQtd, setReprovQtd] = useState("");
	const [reprovQtdSemestre, setReprovQtdSemestre] = useState("");
	const [proficIdiomas, setProficIdiomas] = useState("");
	const [exameQualificacao, setExameQualificacao] = useState("");
	const [tempoLimMaxQual, setTempoLimMaxQual] = useState("");
	const [tempoLimMaxTese, setTempoLimMaxTese] = useState("");
	const [qtdArtigosAceitos, setQtdArtigosAceitos] = useState("");
	const [qtdArtigosAguardaResposta, setQtdArtigosAguardaResposta] =
		useState("");
	const [artigoEmPreparacao, setArtigoEmPreparacao] = useState("");
	const [estagioPesquisa, setEstagioPesquisa] = useState("");
	const [congresso, setCongresso] = useState("");
	const [congressoExterior, setCongressoExterior] = useState("");
	const [estagioExterior, setEstagioExterior] = useState("");
	const [algoAMais, setAlgoAMais] = useState("");

	const history = useHistory();
	const Link = () => {
		// para poder voltar para a página anterior //
		history.push("/student");
	};

	console.log(email);
	console.log(aluno);
	console.log(orientador);
	console.log(numUsp);
	console.log(linkLattes);
	console.log(data);
	console.log(resulRelatorio);
	console.log(curso);
	console.log(semeste);
	console.log(aprovQtd);
	console.log(aprovQtdOpt);
	console.log(divulgados);
	console.log(reprovQtd);
	console.log(reprovQtdSemestre);
	console.log(proficIdiomas);
	console.log(exameQualificacao);
	console.log(tempoLimMaxQual);
	console.log(tempoLimMaxTese);
	console.log(qtdArtigosAceitos);
	console.log(qtdArtigosAguardaResposta);
	console.log(artigoEmPreparacao);
	console.log(estagioPesquisa);
	console.log(congresso);
	console.log(congressoExterior);
	console.log(estagioExterior);
	console.log(algoAMais);

	async function handleSubmit(e) {
		e.preventDefault();
		alert("clique teste");
		const respostas = [
			linkLattes,
			data,
			resulRelatorio,
			semeste,
			aprovQtd,
			aprovQtdOpt,
			divulgados,
			reprovQtd,
			reprovQtdSemestre,
			proficIdiomas,
			exameQualificacao,
			tempoLimMaxQual,
			tempoLimMaxTese,
			qtdArtigosAceitos,
			qtdArtigosAguardaResposta,
			artigoEmPreparacao,
			estagioPesquisa,
			congresso,
			congressoExterior,
			estagioExterior,
			algoAMais,
		];
		console.log(respostas);
		try {
			/*
            const response = await api.post('https://ccpsys.herokuapp.com/alunos/form',
				{
                    numUsp,
                    aluno, 
                    orientador, 
                    email,
                    curso,
                    respostas
				});
            */
		} catch (e) {}
	}

	return (
		<>
			<Wrapper>
				<ExitButton id="voltar" onClick={Link}>
					Voltar
				</ExitButton>
				<Column>
					<form onSubmit={handleSubmit}>
						<Form>
							<h1>
								Relatório Semestral - PPgSI EACH-USP
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1/9
							</h1>
							<GrayLine />
							<h3> 1. E-mail: </h3>
							<SmallTextField
								type="email"
								id="p01"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							{/*questão 01*/}
							<h3> 2. Nome do aluno: </h3>
							<SmallTextField
								type="text"
								id="p02"
								name="aluno"
								value={aluno}
								onChange={(e) => setAluno(e.target.value)}
							/>
							{/*questão 02*/}
							<h3> 3. Nome do orientador: </h3>
							<SmallTextField
								type="text"
								id="p03"
								name="orientador"
								value={orientador}
								onChange={(e) => setOrientador(e.target.value)}
							/>
							{/*questão 03*/}
							<h3> 4. Número USP: </h3>
							<SmallTextField
								type="number"
								id="p04"
								name="numUsp"
								value={numUsp}
								onChange={(e) => setNumUsp(e.target.value)}
							/>
							{/*questão 04*/}
							<h3> 5. Link para o curriculum lattes: </h3>
							<SmallTextField
								type="link"
								id="p05"
								name="linkLattes"
								value={linkLattes}
								onChange={(e) => setLinkLattes(e.target.value)}
							/>
							{/*questão 05*/}
						</Form>
						<Form>
							<h1>
								Relatório Semestral - PPgSI EACH-USP
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2/9
							</h1>
							<GrayLine />
							<h3> 6. Data da última atualização do lattes: </h3>
							<SmallTextField
								type="text"
								placeholder="exemplo: 7 de janeiro de 2019"
								id="p06"
								name="data"
								value={data}
								onChange={(e) => setData(e.target.value)}
							/>
							{/*questão 06*/}
							<h3>
								7. Qual foi o resultado da avaliação do seu
								último relatório?{" "}
								<i> Marcar apenas uma oval: </i>
							</h3>
							<Row>
								<RadioField
									type="radio"
									id="p07-1"
									name="resulRelatorio"
									value="aprovado"
									onChange={(e) =>
										setResulRelatorio(e.target.value)
									}
								/>
								{/*questão 07*/}
								<h4> Aprovado. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p07-2"
									name="resulRelatorio"
									value="aprovadoRessalvas"
									onChange={(e) =>
										setResulRelatorio(e.target.value)
									}
								/>
								<h4> Aprovado com ressalvas. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p07-3"
									name="resulRelatorio"
									value="insatisfatorio"
									onChange={(e) =>
										setResulRelatorio(e.target.value)
									}
								/>
								<h4> Insatisfatório. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p07-4"
									name="resulRelatorio"
									value="naoSeAplica"
									onChange={(e) =>
										setResulRelatorio(e.target.value)
									}
								/>
								<h4>
									Não se aplica (é o meu primeiro relatório).
								</h4>
							</Row>
							<h3 />
							<h3>8. Qual o seu curso?</h3>
							<Row>
								<RadioField
									type="radio"
									id="p08-1"
									name="curso"
									value="mestrado"
									onChange={(e) => setCurso(e.target.value)}
								/>
								{/*questão 08*/}
								<h4>
									Mestrado. - <i> pular a pergunta 10 </i>
								</h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p08-2"
									name="curso"
									value="doutorado"
									onChange={(e) => setCurso(e.target.value)}
								/>
								<h4>
									Doutorado. - <i> pular a pergunta 9 </i>
								</h4>
							</Row>
							<h3 />
							<h3>
								9. Este relatório é referente a que semestre do
								seu curso (último semestre concluído)?
							</h3>
						</Form>
						<Form>
							<h1>
								Relatório Semestral - PPgSI EACH-USP
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3/9
							</h1>
							<GrayLine />
							<h3 />
							<Row>
								<RadioField
									type="radio"
									id="p09-1"
									name="semestre"
									value="primeiroSemestre"
									onChange={(e) =>
										setSemestre(e.target.value)
									}
								/>
								{/*questão 09*/}
								<h4> 1o semestre do curso. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p09-2"
									name="semestre"
									value="segundoSemestre"
									onChange={(e) =>
										setSemestre(e.target.value)
									}
								/>
								<h4> 2o semestre do curso. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p09-3"
									name="semestre"
									value="terceiroSemestre"
									onChange={(e) =>
										setSemestre(e.target.value)
									}
								/>
								<h4> 3o sesmtre do curso. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p09-4"
									name="semestre"
									value="quartoSemestre"
									onChange={(e) =>
										setSemestre(e.target.value)
									}
								/>
								<h4> 4o semestre do curso. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p09-5"
									name="semestre"
									value="quintoSemestre"
									onChange={(e) =>
										setSemestre(e.target.value)
									}
								/>
								<h4> 5o semestre do curso. </h4>
							</Row>
							<h3 />
							<h3>
								10. Este relatório é referente a que semestre do
								seu curso (último semestre concluído)?
								<i> Marcar apenas uma oval: </i>
							</h3>
							<Row>
								<RadioField
									type="radio"
									id="p10-1"
									name="semestre"
									value="primeiroSemestre"
									onChange={(e) =>
										setSemestre(e.target.value)
									}
								/>
								{/*questão 10*/}
								<h4> 1o semestre do curso. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p10-2"
									name="semestre"
									value="segundoSemestre"
									onChange={(e) =>
										setSemestre(e.target.value)
									}
								/>
								<h4> 2o semestre do curso. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p10-3"
									name="semestre"
									value="terceiroSemestre"
									onChange={(e) =>
										setSemestre(e.target.value)
									}
								/>
								<h4> 3o semestre do curso. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p10-4"
									name="semestre"
									value="quartoSemestre"
									onChange={(e) =>
										setSemestre(e.target.value)
									}
								/>
								<h4> 4o semestre do curso. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p10-5"
									name="semestre"
									value="quintoSemestre"
									onChange={(e) =>
										setSemestre(e.target.value)
									}
								/>
								<h4> 5o semestre do curso. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p10-6"
									name="semestre"
									value="sextoSemestre"
									onChange={(e) =>
										setSemestre(e.target.value)
									}
								/>
								<h4> 6o sesmtre do curso. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p10-7"
									name="semestre"
									value="setimoSemestre"
									onChange={(e) =>
										setSemestre(e.target.value)
									}
								/>
								<h4> 7o semestre do curso. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p10-8"
									name="semestre"
									value="oitavoSemestre"
									onChange={(e) =>
										setSemestre(e.target.value)
									}
								/>
								<h4> 8o semestre do curso. </h4>
							</Row>
							<h3 />
							<h3>
								11. Em quantas disciplinas obrigatórias você já
								obteve aprovação?
							</h3>
							<SmallTextField
								type="number"
								id="p11"
								name="aprovQtd"
								onChange={(e) => setAprovQtd(e.target.value)}
							/>
							{/*questão 11*/}
						</Form>
						<Form>
							<h1>
								Relatório Semestral - PPgSI EACH-USP
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4/9
							</h1>
							<GrayLine />
							<h3>
								12. Em quantas disciplinas optativas você já
								obteve aprovação?
							</h3>
							<SmallTextField
								type="number"
								id="p12"
								name="aprovQtdOpt"
								onChange={(e) => setAprovQtdOpt(e.target.value)}
							/>
							{/*questão 12*/}
							<h3>
								13. Todos os conceitos em disciplinas cursadas
								no último semestre já foram divulgados? Caso
								não, espere até 2 dias antes da data máxima
								definida no site do PPgSI para enviar o seu
								relatório.
								<i> Marcar apenas uma oval: </i>
							</h3>
							<Row>
								<RadioField
									type="radio"
									id="p13-1"
									name="divulgados"
									value="sim"
									onChange={(e) =>
										setDivulgados(e.target.value)
									}
								/>
								{/*questão 13*/}
								<h4> Sim. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p13-2"
									name="divulgados"
									value="nao"
									onChange={(e) =>
										setDivulgados(e.target.value)
									}
								/>
								<h4> Não. </h4>
							</Row>
							<h3 />
							<h3>
								14. Em quantas disciplinas você foi reprovado
								desde o início do mestrado/doutorado?
								<i> Marcar apenas uma oval: </i>
							</h3>
							<Row>
								<RadioField
									type="radio"
									id="p14-1"
									name="ReprovQtd"
									value="0"
									onChange={(e) =>
										setReprovQtd(e.target.value)
									}
								/>
								{/*questão 14*/}
								<h4> 0 </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p14-2"
									name="ReprovQtd"
									value="1"
									onChange={(e) =>
										setReprovQtd(e.target.value)
									}
								/>
								<h4> 1 </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p14-3"
									name="ReprovQtd"
									value="2"
									onChange={(e) =>
										setReprovQtd(e.target.value)
									}
								/>
								<h4> 2 </h4>
							</Row>
							<h3 />
							<h3>
								15. Em quantas disciplinas você foi reprovado no
								último semestre cursado?
								<i> Marcar apenas uma oval: </i>
							</h3>
						</Form>
						<Form>
							<h1>
								Relatório Semestral - PPgSI EACH-USP
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5/9
							</h1>
							<GrayLine />
							<h3 />
							<Row>
								<RadioField
									type="radio"
									id="p15-1"
									name="ReprovQtdSemestre"
									value="0"
									onChange={(e) =>
										setReprovQtdSemestre(e.target.value)
									}
								/>
								{/*questão 15*/}
								<h4> 0 </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p15-2"
									name="ReprovQtdSemestre"
									value="1"
									onChange={(e) =>
										setReprovQtdSemestre(e.target.value)
									}
								/>
								<h4> 1 </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p15-3"
									name="ReprovQtdSemestre"
									value="2"
									onChange={(e) =>
										setReprovQtdSemestre(e.target.value)
									}
								/>
								<h4> 2 </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p15-4"
									name="ReprovQtdSemestre"
									value="Terminado"
									onChange={(e) =>
										setReprovQtdSemestre(e.target.value)
									}
								/>
								<h4> Já terminei as disciplinas. </h4>
							</Row>
							<h3 />

							<h3>
								16. Você já foi aprovado no exame de
								proficiência em idiomas?{" "}
								<i> Marcar apenas uma oval: </i>
							</h3>
							<Row>
								<RadioField
									type="radio"
									id="p16-1"
									name="ProficIdiomas"
									value="sim"
									onChange={(e) =>
										setProficIdiomas(e.target.value)
									}
								/>
								{/*questão 16*/}
								<h4> Sim. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p16-2"
									name="ProficIdiomas"
									value="nao"
									onChange={(e) =>
										setProficIdiomas(e.target.value)
									}
								/>
								<h4> Não. </h4>
							</Row>
							<h3 />

							<h3>
								17. Você já realizou o exame de qualificação?
								<i> Marcar apenas uma oval: </i>
							</h3>
							<Row>
								<RadioField
									type="radio"
									id="p17-1"
									name="ExameQualificacao"
									value="simAprovado"
									onChange={(e) =>
										setExameQualificacao(e.target.value)
									}
								/>
								{/*questão 17*/}
								<h4> Sim. Fui aprovado. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p17-2"
									name="ExameQualificacao"
									value="simReprovado"
									onChange={(e) =>
										setExameQualificacao(e.target.value)
									}
								/>
								<h4> Sim. Fui reprovado. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p17-3"
									name="ExameQualificacao"
									value="nao"
									onChange={(e) =>
										setExameQualificacao(e.target.value)
									}
								/>
								<h4> Não. </h4>
							</Row>
							<h3 />

							<h3>
								18. Se não qualificou, quanto tempo falta para o
								limite máximo de qualificação?
								<i> Marcar apenas uma oval: </i>
							</h3>
							<Row>
								<RadioField
									type="radio"
									id="p18-1"
									name="TempoLimMaxQual"
									value="menos3meses"
									onChange={(e) =>
										setTempoLimMaxQual(e.target.value)
									}
								/>
								{/*questão 18*/}
								<h4> Menos de 3 meses. </h4>
							</Row>
						</Form>
						<Form>
							<h1>
								Relatório Semestral - PPgSI EACH-USP
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6/9
							</h1>
							<GrayLine />
							<h3 />
							<Row>
								<RadioField
									type="radio"
									id="p18-2"
									name="TempoLimMaxQual"
									value="entre3e6meses"
									onChange={(e) =>
										setTempoLimMaxQual(e.target.value)
									}
								/>
								<h4> Entre 3 e 6 meses. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p18-3"
									name="TempoLimMaxQual"
									value="mais6meses"
									onChange={(e) =>
										setTempoLimMaxQual(e.target.value)
									}
								/>
								<h4> Mais de 6 meses. </h4>
							</Row>
							<h3 />

							<h3>
								19. Se você já fez sua qualificação e foi
								aprovado, quanto tempo falta para o limite
								máximo do depósito da sua dissertação/tese?
								<i> Marcar apenas uma oval: </i>
							</h3>
							<Row>
								<RadioField
									type="radio"
									id="p19-1"
									name="TempoLimMaxTese"
									value="menos3meses"
									onChange={(e) =>
										setTempoLimMaxTese(e.target.value)
									}
								/>
								{/*questão 19*/}
								<h4> Menos de 3 meses. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p19-2"
									name="TempoLimMaxTese"
									value="entre3e6meses"
									onChange={(e) =>
										setTempoLimMaxTese(e.target.value)
									}
								/>
								<h4> Entre 3 e 6 meses. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p19-3"
									name="TempoLimMaxTese"
									value="mais6meses"
									onChange={(e) =>
										setTempoLimMaxTese(e.target.value)
									}
								/>
								<h4> Mais de 6 meses. </h4>
							</Row>
							<h3 />

							<h3>
								20. Quantos artigos referentes a sua pesquisa de
								mestrado/doutorado você teve aceitos ou
								publicados? (Obs: Você deve inserir os artigos
								publicados no seu currículo Lattes){" "}
								<i>Marcar apenas uma oval:</i>
							</h3>
							<Row>
								<RadioField
									type="radio"
									id="p20-1"
									name="QtdArtigosAceitos"
									value="0"
									onChange={(e) =>
										setQtdArtigosAceitos(e.target.value)
									}
								/>
								{/*questão 20*/}
								<h4> 0 </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p20-2"
									name="QtdArtigosAceitos"
									value="1"
									onChange={(e) =>
										setQtdArtigosAceitos(e.target.value)
									}
								/>
								<h4> 1 </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p20-3"
									name="QtdArtigosAceitos"
									value="2"
									onChange={(e) =>
										setQtdArtigosAceitos(e.target.value)
									}
								/>
								<h4> 2 </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p20-4"
									name="QtdArtigosAceitos"
									value="+2"
									onChange={(e) =>
										setQtdArtigosAceitos(e.target.value)
									}
								/>
								<h4> Mais de 2. </h4>
							</Row>
							<h3 />
						</Form>
						<Form>
							<h1>
								Relatório Semestral - PPgSI EACH-USP
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7/9
							</h1>
							<GrayLine />
							<h3>
								21. Quantos artigos você submeteu e ainda estão
								aguardando resposta?
								<i> Marcar apenas uma oval: </i>
							</h3>
							<Row>
								<RadioField
									type="radio"
									id="p21-1"
									name="QtdArtigosAguardaResposta"
									value="0"
									onChange={(e) =>
										setQtdArtigosAguardaResposta(
											e.target.value
										)
									}
								/>
								{/*questão 21*/}
								<h4> 0 </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p21-2"
									name="QtdArtigosAguardaResposta"
									value="1"
									onChange={(e) =>
										setQtdArtigosAguardaResposta(
											e.target.value
										)
									}
								/>
								<h4> 1 </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p21-3"
									name="QtdArtigosAguardaResposta"
									value="2"
									onChange={(e) =>
										setQtdArtigosAguardaResposta(
											e.target.value
										)
									}
								/>
								<h4> 2 </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p21-4"
									name="QtdArtigosAguardaResposta"
									value="+2"
									onChange={(e) =>
										setQtdArtigosAguardaResposta(
											e.target.value
										)
									}
								/>
								<h4> Mais de 2. </h4>
							</Row>
							<h3 />

							<h3>
								22. Você possui artigo em preparação para
								submissão? Qual o estágio dele?
								<i> Marcar apenas uma oval: </i>
							</h3>
							<Row>
								<RadioField
									type="radio"
									id="p22-1"
									name="ArtigoEmPreparacao"
									value="naoPossou"
									onChange={(e) =>
										setArtigoEmPreparacao(e.target.value)
									}
								/>
								{/*questão 22*/}
								<h4> Não possuo. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p22-2"
									name="ArtigoEmPreparacao"
									value="experimentosEmElaboracao"
									onChange={(e) =>
										setArtigoEmPreparacao(e.target.value)
									}
								/>
								<h4> Experimentos em elaboração. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p22-3"
									name="ArtigoEmPreparacao"
									value="AguardandoColetaDados"
									onChange={(e) =>
										setArtigoEmPreparacao(e.target.value)
									}
								/>
								<h4> Aguardando coleta de dados. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p22-4"
									name="ArtigoEmPreparacao"
									value="emFaseDeEscrita"
									onChange={(e) =>
										setArtigoEmPreparacao(e.target.value)
									}
								/>
								<h4> Em fase de escrita. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p22-3"
									name="ArtigoEmPreparacao"
									value="emFaseDeTraducao"
									onChange={(e) =>
										setArtigoEmPreparacao(e.target.value)
									}
								/>
								<h4> Em fase de tradução. </h4>
							</Row>
							<Row>
								<RadioField
									type="radio"
									id="p22-4"
									name="ArtigoEmPreparacao"
									value="preparandoRespostasParaRevisores"
									onChange={(e) =>
										setArtigoEmPreparacao(e.target.value)
									}
								/>
								<h4>Preparando resposta para os revisores.</h4>
							</Row>
							<h3 />

							<h3>
								23. Qual o estágio atual de sua pesquisa?
								Apresente toda e qualquer atividade que já tenha
								sido realizada no contexto de seu projeto de
								pesquisa (mesmo que ainda incompleta). Faça uma
								descrição detalhada.
							</h3>
						</Form>
						<Form>
							<h1>
								Relatório Semestral - PPgSI EACH-USP
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8/9
							</h1>
							<GrayLine />
							<h3 />
							<LargeTextField
								rows="4"
								id="p23"
								value={estagioPesquisa}
								onChange={(e) =>
									setEstagioPesquisa(e.target.value)
								}
							/>
							{/*questão 23*/}
							<h3>
								24. Você participou de algum congressos no país?
								Se sim, indicar local, se houve apresentação de
								trabalho e se o congresso é ou não
								internacional.
							</h3>
							<LargeTextField
								rows="4"
								id="p24"
								value={congresso}
								onChange={(e) => setCongresso(e.target.value)}
							/>
							{/*questão 24*/}
							<h3>
								25. Você participou de algum congresso no
								exterior? Se sim, indicar local e se houve
								apresentação de trabalho.
							</h3>
						</Form>
						<Form>
							<h1>
								Relatório Semestral - PPgSI EACH-USP
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9/9
							</h1>
							<GrayLine />
							<h3 />
							<LargeTextField
								rows="4"
								id="p25"
								value={congressoExterior}
								onChange={(e) =>
									setCongressoExterior(e.target.value)
								}
							/>
							{/*questão 25*/}
							<h3>
								26. Você realizou algum estágio de pesquisa ou
								visita de pesquisa no exterior (incluindo
								sanduíche)? Se sim, indique o nome da
								universidade e o período.
							</h3>
							<SmallTextField
								type="text"
								id="p26"
								value={setEstagioExterior}
								onChange={(e) =>
									setEstagioExterior(e.target.value)
								}
							/>
							{/*questão 26*/}
							<h3>
								27. Você tem algo a mais a declarar para a CCP -
								PPgSI?
							</h3>
							<LargeTextField
								rows="4"
								id="p27"
								value={algoAMais}
								onChange={(e) => setAlgoAMais(e.target.value)}
							/>
							{/*questão 27*/}
							<ButtonField id="submit" type="submit">
								Enviar
							</ButtonField>
						</Form>
					</form>
				</Column>
			</Wrapper>
		</>
	);
};

export default FormPage;
