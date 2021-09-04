import React from "react";
import Header from "../../../components/Header";
import { ContainerPage, ContainerMain } from "../../../style/GlobalStyle";
import { SideBarContainer } from "../../../components/SideBar";
import Folder from "../../../assets/Home.svg";

const Professor = () => {
	return (
		<ContainerPage>
			<SideBarContainer>
				<img src={Folder} alt="Folder"></img>
			</SideBarContainer>
			<ContainerMain>
				<Header titulo="Olá fulano aluno" />
				<hr />
			</ContainerMain>
		</ContainerPage>
	);
};
export default Professor;
