import React from 'react';
import {ContainerPage, ContainerMain, ContainerRegister, RadioContainer} from './style'
import {Input} from '../../components/Input/index'
import { Link } from 'react-router-dom';
import {SideBarContainer} from '../../components/SideBar'
import Folder from '../../assets/Folder.svg' 

function Register() {

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
                        type="name"
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
                    <RadioContainer>
                        <div>
                            <input type="radio" id="Professor" name="drone" value="Professor"/>
                            <label for="Professor">Professor</label>
                        </div>
                        <div>
                            <input type="radio" id="Aluno" name="drone" value="Aluno  "/>
                            <label for="Aluno">Aluno</label>
                        </div>
                    </RadioContainer>
                    <Link to="/"><button className="buttonSubmit" type="submit">CADASTRAR</button></Link>
                </form>
            </ContainerRegister>
        </ContainerMain>        
    </ContainerPage>
  );
}

export default Register;