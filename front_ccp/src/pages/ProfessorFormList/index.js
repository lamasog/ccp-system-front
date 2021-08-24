import React from "react";
import { StudentForm } from "../../components/StudentForm/index";
import { Wrapper, BlueBox, Column, ExitButton, FormField, GrayLine, BlueLine1, BlueLine2 } from "./styles";

const FormList = () => {
    return (
            <>
                <ExitButton id = "voltar"> Voltar </ExitButton>
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
                            <StudentForm> Isis Vieira &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 02/09/2021 </StudentForm>
                            <StudentForm> Rafael de Souza Ferreira &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 07/09/2021 </StudentForm>
                            <StudentForm> Leiloca Nascimento &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 09/09/2021 </StudentForm>
                            <StudentForm> David Hiromi Ono &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 13/09/2021 </StudentForm>
                            <StudentForm> Sandra Gonçalves &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 16/09/2021 </StudentForm>
                            <StudentForm> Pingu o Pinguim &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 22/09/2021 </StudentForm>
                        </FormField>
                    </Column>
                </Wrapper>
            </>
    );
};

export default FormList;