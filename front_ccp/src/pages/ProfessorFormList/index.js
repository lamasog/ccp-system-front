import React from "react";
import { useHistory } from "react-router-dom";
import { StudentForm } from "../../components/StudentForm/index";
import { Wrapper, BlueBox, Column, ExitButton, FormField, GrayLine, BlueLine1, BlueLine2 } from "./styles";
   
const FormList = () => {

    const history = useHistory();
    const Link1 = () => {               // para poder voltar para a página anterior //
        history.push("/professor");
    }
    const Link2 = () => {
        history.push("/professorfeedback")
    }

    return (
            <>
                <ExitButton id = "voltar" onClick = {Link1}> Voltar </ExitButton>
                <Wrapper>
                    <BlueBox>
                        <BlueLine1/>
                        <h1 id = "professorName"> Olá, professor Fulano de Tal </h1>
                        <BlueLine2/>
                    </BlueBox>
                    <Column>
                        <FormField>
                            <h1> Lista de relatórios PPgSI EACH-USP </h1>
                            <GrayLine/>
                            <StudentForm onClick = {Link2}> Isis Vieira &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 02/09/2021 </StudentForm>
                            <StudentForm onClick = {Link2}> Rafael de Souza Ferreira &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 07/09/2021 </StudentForm>
                            <StudentForm onClick = {Link2}> Leiloca Nascimento &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 09/09/2021 </StudentForm>
                            <StudentForm onClick = {Link2}> David Hiromi Ono &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 13/09/2021 </StudentForm>
                            <StudentForm onClick = {Link2}> Sandra Gonçalves &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 16/09/2021 </StudentForm>
                            <StudentForm onClick = {Link2}> Pingu o Pinguim &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 22/09/2021 </StudentForm>
                        </FormField>
                    </Column>
                </Wrapper>
            </>
    );
};

export default FormList;