import React from "react";
import { SideBarContainer } from "../../components/SideBar";
import { useHistory } from "react-router-dom";
import Folder from "../../assets/Home.svg";
import { ContainerPage, ContainerMain, Header, Content } from "./style";
import Exit2 from "../../assets/Exit2.svg";

const StudentMainPage = () => {
	
	const history = useHistory();
    const Link1 = () => {               // para poder voltar para a página inicial //
        history.push("/");
    }
    const Link2 = () => {
        history.push("/form");               // para preencher formulário //
    }
	const Link3 = () => {
		history.push("/student");               // para visualizar parecer do Orientador //
	}
	const Link4 = () => {
		history.push("/student");               // para visualizar parecer da CCP //
	}
	
	return (
		<ContainerPage>
			<SideBarContainer>
				<img src={Folder} alt="Folder"></img>
			</SideBarContainer>
			<ContainerMain>
				<Header>
					<div className="ContainerHeaderText">
						<span className="headerText">Olá, Fulano</span>
					</div>
					<button className="buttonExit" type="submit" onClick = {Link1}>
						Sair
						<img className="imgExit" src={Exit2} alt="Exit"></img>
					</button>
				</Header>
				<hr />
				<Content>
					<div className="containerContentInput">
						<span className="contentText">
							Você tem um novo formulário para responder
						</span>
						<button className="contentButton" type="submit" onClick = {Link2}>
							Acessar formulário
						</button>
					</div>

					<div className="containerContentInput">
						<span className="contentText">
							Visualizar formulários avaliados pelo orientador
						</span>
						<button className="contentButton" type="submit" onClick = {Link3}>
							Visualizar
						</button>
					</div>

					<div className="containerContentInput">
						<span className="contentText">
							Visualizar formulários avaliados pela CCP
						</span>
						<button className="contentButton" type="submit" onClick = {Link4}>
							Visualizar
						</button>
					</div>
				</Content>
			</ContainerMain>
		</ContainerPage>
	);
};

export default StudentMainPage;
