import React, {useState} from 'react';
import {ContainerPage, ContainerMain, ContainerRegister} from './style'
import {Input} from '../../components/Input/index'
import { Link } from 'react-router-dom';
import {SideBarContainer} from '../../components/SideBar'
import Folder from '../../assets/Folder.svg' 
import api from '../../services/api';
import { login } from '../../services/auth';

const Register=(props)=> {
    const [nome, setNome] = useState('');
    const [codigo, setCodigo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [aluno, setAluno] = useState('Orientador');
    const [cod_orientador, setCodigoOrientador] = useState('');
    const [curso, setCurso] = useState('Mestrado');
    const [value200, setValue200] =useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
		let nomeCompleto = nome.split(' ')
        let name = nomeCompleto[0], surname = nomeCompleto[1];

		if(aluno === "Aluno"){
			try {
				const response = await api.post('https://ccpsys.herokuapp.com/alunos/register',
				{
					codigo,
                    name,
                    surname,
                    email, 
                    cod_orientador, 
                    curso,
					password
				});
                setValue200(true)
				if(response.status === 200) {

					localStorage.setItem('@front-ccp/username', response.data.aluno.name);
				}
			} catch (error) {
				console.log(error)
				console.log(error.response);
			}
		} else {
			try {
				const response = await api.post('https://ccpsys.herokuapp.com/orientadores/register',
				{
					codigo,
                    name,
                    surname,
                    email, 
					password
				});
                setValue200(true)
				if(response.status === 200) {
                    login(response.data.token);
                    localStorage.setItem('@front-ccp/username', response.data.orientador.name);
				}
			} catch (error) {
                console.log(error)
				console.log(error.response);
			}
		}
	}

  return (
    <ContainerPage>
        <ContainerMain>
            <SideBarContainer>
                <h1>Sistema USP</h1>
                <div>
                    <h2>Já tem uma conta?</h2>
                    <Link exact to="/"><h3>Faça o Login Aqui!</h3></Link>
                </div>
                <img src={Folder} alt="Folder"></img>
            </SideBarContainer>
            <ContainerRegister>
                <h1>Registre-se</h1>
                <form onSubmit={handleSubmit}>
                    <Input 
                        placeholder="Nome Completo"
                        type="name"
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <Input 
                        placeholder="Matricula"
                        type="number"
                        onChange={(e) => setCodigo(e.target.value)}
                    />
                    <Input 
                        placeholder="E-Mail" 
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                        placeholder="Senha"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <select value={aluno} onChange={(e) => setAluno(e.target.value)}>
                        <option value="Orientador">Orientador</option>
                        <option value="Aluno">Aluno</option>
                    </select>
                    {aluno==="Aluno" ? <Input placeholder="Código do Orientador" onChange={(e) => setCodigoOrientador(e.target.value)}/> : <></>}
                    {aluno==="Aluno" ? 
                        <select onChange={(e) => setCurso(e.target.value)}>
                            <option value="Mestrado">Mestrado</option>
                            <option value="Doutorado">Doutorado</option>
                        </select>
                     : <></>}
                    {(aluno==="Aluno" && value200===true) ?<Link to="/student"><button className="buttonSubmit" type="submit">Cadastrar</button></Link>
                        : <></>}
                    {(aluno==="Orientador" && value200===true) ?<Link to="/professor"><button className="buttonSubmit" type="submit">Cadastrar</button></Link>:<></>}
                    {(value200 === false)?
							(<button className="buttonSubmit" type="submit">
								ENTRAR
							</button>)
							:(<></>)
						}
                </form>
            </ContainerRegister>
        </ContainerMain>        
    </ContainerPage>
  );
}

export default Register;