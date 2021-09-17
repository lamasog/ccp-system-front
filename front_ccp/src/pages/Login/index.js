import React, { useState } from "react";
import {
	ContainerPage,
	ContainerMain,
	ContainerLogin,
	DivIncorrect,
} from "./style";
import { Input } from "../../components/Input/index";
import { Link } from "react-router-dom";
import { SideBarContainer } from "../../components/SideBar";
import Folder from "../../assets/Folder.svg";
import api from "../../services/api";
import { login } from "../../services/auth";

const LoginPage = () => {
	const [codigo, setCodigo] = useState("");
	const [password, setPassword] = useState("");
	const [person, setPerson] = useState("");
	const [incorrect, setIncorrect] = useState(false);

	async function handleSubmit(e) {
		setPerson("Estudante");
		e.preventDefault();
		console.log(codigo, "-", password, "-", person);
		if (1) {
			try {
				const response = await api.post(
					"https://ccpsys.herokuapp.com/alunos/login",
					{
						codigo,
						password,
					}
				);

				console.log(
					Object.values(response.data)[0].hasOwnProperty(
						"cod_orientador"
					)
				);
				if (response.status === 200) {
					login(response.data.token);
					console.log("logging");
				}
			} catch (error) {
				console.log(error);
				console.log(error.response);
				if (error.response.status === 404) {
					console.log(error.response.status);
					setIncorrect(true);
				}
			}
		} else if (person === "Orientador") {
			try {
				const response = await api.post(
					"http://localhost:5000/orientadores/login",
					{
						codigo,
						password,
					}
				);

				if (response.status === 200) {
					login(response.data.token);
					console.log("logging");
				}
			} catch (error) {
				console.log(error);
				console.log(error.response);
				if (error.response.status === 404) {
					console.log(error.response.status);
					setIncorrect(true);
				}
			}
		}
	}

	return (
		<ContainerPage>
			<ContainerMain>
				<SideBarContainer>
					<h1>Sistema USP</h1>
					<div>
						<h2>Ainda não tem uma conta?</h2>
						<Link to="/register">
							<h3>Cadastre-se Aqui!</h3>
						</Link>
					</div>
					<img src={Folder} alt="Folder"></img>
				</SideBarContainer>
				<ContainerLogin>
					<h1>Login</h1>
					<form onSubmit={handleSubmit}>
						<Input
							placeholder="Matricula"
							type="name"
							onChange={(e) => setCodigo(e.target.value)}
						/>
						<Input
							placeholder="Senha"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						{incorrect && (
							<DivIncorrect>
								Matricula ou senha incorretos
							</DivIncorrect>
						)}
						<button className="buttonSubmit" type="submit">
							ENTRAR
						</button>
					</form>
				</ContainerLogin>
			</ContainerMain>
		</ContainerPage>
	);
};

export default LoginPage;
