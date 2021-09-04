import React from "react";
import { ContainerPage, ContainerMain } from "../../../style/GlobalStyle";
import Header from "../../../components/Header";
import { SideBarContainer } from "../../../components/SideBar";

const CCP = () => {
	return (
		<ContainerPage>
			<SideBarContainer>
				<img src={Folder} alt="Folder"></img>
			</SideBarContainer>
			<ContainerMain>
				<Header titulo="Olá, fulano aluno" />
				<hr />
			</ContainerMain>
		</ContainerPage>
	);
};
export default CCP;
