import React from "react";
import { useHistory } from "react-router-dom";
import { SideBarContainer } from "../../components/SideBar";
import Folder from "../../assets/Home.svg";
import { Content } from "./style";
import { ContainerPage, ContainerMain } from "../../style/GlobalStyle";
import Exit2 from "../../assets/Exit2.svg";
import Header from "../../components/Header";

const ProfessorMainPage = () => {
	const history = useHistory();
	const Link1 = () => {
		// para poder voltar para a página inicial //
		history.push("/");
	};
	const Link2 = () => {
		history.push("/formlist"); // para visualizar os novos formulários //
	};
	const Link3 = () => {
		history.push("/professor"); // para visualizar formulários já avaliados //
	};

	return (
		<ContainerPage>
			<SideBarContainer>
				<img src={Folder} alt="Folder"></img>
			</SideBarContainer>
			<ContainerMain>
				<Header titulo="Olá, orientador"></Header>
				<hr />
				<Content>
					<div className="containerContentInput">
						<span className="contentText">
							Novos formulários para avaliar
						</span>
						<button
							className="contentButton"
							type="submit"
							onClick={Link2}
						>
							Acessar formulário
						</button>
					</div>
					<div className="containerContentInput">
						<span className="contentText">
							Visualizar formulários já avaliados
						</span>
						<button
							className="contentButton"
							type="submit"
							onClick={Link3}
						>
							Visualizar
						</button>
					</div>
				</Content>
			</ContainerMain>
		</ContainerPage>
	);
};

export default ProfessorMainPage;
