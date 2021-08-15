import React, {useState} from 'react';
import {ContainerPage, ContainerMain, ContainerRegister} from './style'
import {Input} from '../../components/Input/index'
import { Link } from 'react-router-dom';
import {SideBarContainer} from '../../components/SideBar'
import Folder from '../../assets/Folder.svg' 

function Register(props) {
    const [inputAluno, setInputAluno] = useState("Orientador");


    function handleMenuClick(e) {
        setInputAluno(e.target.value);

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
                <form>
                    <Input 
                        placeholder="Nome Completo"
                        type="name"
                    />
                    <Input 
                        placeholder="Matricula"
                        type="number"
                    />
                    <Input 
                        placeholder="E-Mail" 
                        type="email"
                        required
                    />
                    <Input 
                        placeholder="Senha"
                        type="password"
                    />
                    <select value={inputAluno} onChange={handleMenuClick}>
                        <option value="Orientador">Orientador</option>
                        <option value="Aluno">Aluno</option>
                    </select>
                    {inputAluno==="Aluno" ? <Input placeholder="Nome do Orientador"/> : <></>}
                    {inputAluno==="Aluno" ? 
                        <select>
                            <option value="Mestrado">Mestrado</option>
                            <option value="Doutorado">Doutorado</option>
                        </select>
                     : <></>}
                    {inputAluno==="Aluno" ?<Link to="/student"><button className="buttonSubmit" type="submit">Cadastrar</button></Link>
                        : <Link to="/form"><button className="buttonSubmit" type="submit">Cadastrar</button></Link>}
                </form>
            </ContainerRegister>
        </ContainerMain>        
    </ContainerPage>
  );
}

export default Register;