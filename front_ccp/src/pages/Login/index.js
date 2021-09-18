import React, { useState } from "react";
import { ContainerPage, ContainerMain, ContainerLogin} from "./style";
import { Input } from "../../components/Input/index";
import { Link } from "react-router-dom";
import { SideBarContainer } from "../../components/SideBar";
import Folder from "../../assets/Folder.svg";
import api from '../../services/api';
import { login } from '../../services/auth';
import {Radio} from 'antd'

const LoginPage = () => {
	const [codigo, setCodigo] = useState('');
    const [password, setPassword] = useState('');
    const [person, setPerson] = useState('');
	const [value200, setValue200] =useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
		
		if(person === "Estudante"){
			try {
				const response = await api.post('https://ccpsys.herokuapp.com/alunos/login',
				{
					codigo,
					password
				});
				//console.log(Object.values(response.data)[0].hasOwnProperty('cod_orientador'));
				setValue200(true)
				if(response.status === 200) {
					login(response.data.token);
					localStorage.setItem('@front-ccp/username', response.data.aluno.name);
				}
			} catch (error) {
				setPerson("Error")
				if (error.response.status === 404) {
					alert("Matricula Incorreta!")
				}
				if (error.response.status === 400) {
					alert("Senha Incorreta!")
				}
				//console.log(error);
				//console.log(error.response);
			}
		} else if (person === "Orientador") {
			try {
				const response = await api.post('https://ccpsys.herokuapp.com/orientadores/login',
				{
					codigo,
					password
				});
				setValue200(true)
				if(response.status === 200) {
					login(response.data.token);
					localStorage.setItem('@front-ccp/username', response.data.orientador.name);
				}
			} catch (error) {
				setPerson("Error")
				if (error.response.status === 404) {
					alert("Matricula Incorreta!")
				}
				if (error.response.status === 400) {
					alert("Senha Incorreta!")
				}
				//console.log(error);
				//console.log(error.response);
			}
		}else{
			try {
				const response = await api.post('https://ccpsys.herokuapp.com/ccp/login',
				{
					codigo,
					password
				});
				setValue200(true)
				if(response.status === 200) {
					login(response.data.token);
					localStorage.removeItem('@front-ccp/username');
				}
			} catch (error) {
				setPerson("Error")
				if (error.response.status === 404) {
					alert("Matricula Incorreta!")
				}
				if (error.response.status === 400) {
					alert("Senha Incorreta!")
				}
				//console.log(error);
				//console.log(error.response);	
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
						<Radio.Group 
							size="large"
							onChange={(e) => setPerson(e.target.value)}
							required
						>
							<Radio.Button checked value="Estudante">Estudante</Radio.Button>
							<Radio.Button value="Orientador">Orientador</Radio.Button>
							<Radio.Button value="CCP">CCP</Radio.Button>
						</Radio.Group>
						<Input 
							placeholder="Matricula" 
							type="text" 
							maxlength="6"
							onChange = {(e)=> setCodigo(e.target.value)}
							required
						/>
						<Input
							placeholder="Senha"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						{(person==="Estudante" && value200===true) ?
							(<Link to="/student">
								<button className="buttonSubmit" type="submit">
									ENTRAR
								</button>
							</Link>): (<></>)
						}
						{
						(person==="Orientador" && value200===true) ?
							(<Link to="/professor">
							<button className="buttonSubmit" type="submit">
								ENTRAR
							</button>
							</Link>):(<></>)
						}
						{ (person==="CCP" && value200===true) ?
							(<Link to="/ccp">
								<button className="buttonSubmit" type="submit">
									ENTRAR
								</button>
							</Link>):
							(<></>)
						}
						{(value200 === false)?
							(<button className="buttonSubmit" type="submit">
								ENTRAR
							</button>)
							:(<></>)
						}
					</form>
				</ContainerLogin>
			</ContainerMain>
		</ContainerPage>
	);
};

export default LoginPage;
