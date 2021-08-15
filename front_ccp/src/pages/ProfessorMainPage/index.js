import React from "react";
import { SideBarContainer } from "../../components/SideBar";
import { Link } from "react-router-dom";
import Folder from "../../assets/Home.svg";
import { ContainerPage, ContainerMain, Header, Content } from "./style";
import Exit2 from "../../assets/Exit2.svg";

const ProfessorMainPage = () => {
	return (
		<ContainerPage>
			<SideBarContainer>
				<img src={Folder} alt="Folder"></img>
			</SideBarContainer>
			<ContainerMain>
				<Header>
					<div className="ContainerHeaderText">
						<span className="headerText">Olá, Orientador</span>
					</div>
					<button className="buttonExit" type="submit">
						Sair
						<img className="imgExit" src={Exit2} alt="Exit"></img>
					</button>
				</Header>
				<hr />
				<Content>
					<div className="containerContentInput">
						<span className="contentText">
							Novos formulários para avaliar
						</span>
						<button className="contentButton" type="submit">
							Acessar formulário
						</button>
					</div>
					<div className="containerContentInput">
						<span className="contentText">
							Visualizar formulários já avaliados
						</span>
						<button className="contentButton" type="submit">
							Visualizar
						</button>
					</div>
				</Content>
			</ContainerMain>
		</ContainerPage>
	);
};

export default ProfessorMainPage;
