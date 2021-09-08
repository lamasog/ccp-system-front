import React from "react";
import { SideBarContainer } from "../../components/SideBar";
import Folder from "../../assets/Home.svg";
import { ContainerPage, ContainerMain, Header, Content } from "./style";
import Exit2 from "../../assets/Exit2.svg";

const AcademicRecordPage = () => {
	return (
		<ContainerPage>
			<SideBarContainer>
				<img src={Folder} alt="Folder"></img>
			</SideBarContainer>
			<ContainerMain>
				<Header>
					<div className="ContainerHeaderText">
						<span className="headerText">Histórico dos Alunos</span>
					</div>
					<button className="buttonExit" type="submit">
						Sair
						<img className="imgExit" src={Exit2} alt="Exit"></img>
					</button>
				</Header>
				<hr />
				<Content>
					<div className="containerContentInput">
						
					</div>
				</Content>
			</ContainerMain>
		</ContainerPage>
	);
};

export default AcademicRecordPage;