import React from 'react';
import {ContainerPage, ContainerMain, ContainerRegister} from './style'
import {Input} from '../../components/Input/index'
import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar'

function Register() {

  return (
    <ContainerPage>
        <ContainerMain>
            <SideBar></SideBar>
            <ContainerRegister>
                <h1>Login</h1>
                <form>
                    <Input 
                        placeholder="Nome do Usuario"
                        type="name"
                    />
                    <Input 
                        placeholder="Senha" 
                        type="password"
                        required
                    />
                    <button className="buttonSubmit" type="submit"><Link to="/">Entrar</Link></button>
                </form>
            </ContainerRegister>
        </ContainerMain>        
    </ContainerPage>
  );
}

export default Register;