import React from "react";
import { useHistory } from "react-router-dom";
import { SideBarContainer } from "../../components/SideBar";
import Folder from "../../assets/Home.svg";
import { ContainerPage, ContainerMain, Header, Content } from "./style";
import Exit2 from "../../assets/Exit2.svg";

const CCPMainPage = () => {
	const history = useHistory();
	const Link1 = () => {
		history.push("/formlist"); 
	};
	const Link2 = () => {
		history.push("/recordstudent"); 
	};
	const Link3 = () => {
		history.push("/"); 
	};

	return (
		<ContainerPage>
			<SideBarContainer>
				<img src={Folder} alt="Folder"></img>
			</SideBarContainer>
			<ContainerMain>
				<Header>
					<div className="ContainerHeaderText">
						<span className="headerText">Olá, Coordenador</span>
					</div>
					<button className="buttonExit" type="submit">
						Sair
						<img className="imgExit" src={Exit2} alt="Exit"  onClick={Link3}></img>
					</button>
				</Header>
				<hr />
				<Content>
					<div className="containerContentInput">
						<span className="contentText">
							Visualizar formulários avaliados pelo orientador
						</span>
						<button className="contentButton" type="submit">
							Visualizar
						</button>
					</div>
					<div className="containerContentInput">
						<span className="contentText">
							Visulizar histórico dos alunos
						</span>
						<button className="contentButton" type="submit" onClick={Link2}>
							Visualizar
						</button>
					</div>
				</Content>
			</ContainerMain>
		</ContainerPage>
	);
};

export default CCPMainPage;
