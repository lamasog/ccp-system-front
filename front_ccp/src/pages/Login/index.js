import React from 'react';
import {ContainerPage, ContainerMain, ContainerLogin} from './style'
import {Input} from '../../components/Input/index'
import { Link } from 'react-router-dom';
import {SideBarContainer} from '../../components/SideBar'
import Folder from '../../assets/Folder.svg' 

const LoginPage = () => {
    return (
        <ContainerPage>
            <ContainerMain>
                <SideBarContainer>
                    <h1>Sistema USP</h1>
                    <div>
                        <h2>Ainda não tem uma conta?</h2>
                        <Link to="/register"><h3>Cadastre-se Aqui!</h3></Link>
                    </div>
                    <img src={Folder} alt="Folder"></img>
                </SideBarContainer>
                <ContainerLogin>
                    <h1>Login</h1>
                    <form>
                        <Input 
                            placeholder="Matricula"
                            type="name"
                        />
                        <Input 
                            placeholder="Senha"
                            type="password"
                        />
                        <Link to="/"><button className="buttonSubmit" type="submit">Entrar</button> </Link>
                    </form>
                </ContainerLogin>
            </ContainerMain>        
        </ContainerPage>
    );
};

export default LoginPage;