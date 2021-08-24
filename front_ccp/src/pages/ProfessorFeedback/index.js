import React from "react";
import { useHistory } from "react-router-dom";
import { FormReportLink } from "../../components/FormReportLink/index";
import DocX from "../../assets/docx_icon.png"
import { Wrapper, BlueBox, Column, Row, ExitButton, Form, GrayLine, BlueLine1, BlueLine2, TextField, RadioField, ButtonField } from "./styles";

const ProfessorFeedback = () => {

    const history = useHistory();
    const Link = () => {                // para poder voltar para a página anterior //
        history.push("/formlist");
    }

    return (
            <>
                <ExitButton id = "voltar" onClick = {Link}> Voltar </ExitButton>
                <Wrapper>
                    <BlueBox>
                        <BlueLine1/>
                        <h1 id = "header"> Análise de relatório semestral </h1>
                        <BlueLine2/>
                    </BlueBox>
                    <Column>
                        <Form>
                            <GrayLine/>
                            <h1 id = "name_date"> Relatório PPgSI EACH-USP - Fulano de Tal - 24/08/2021 </h1>
                            <FormReportLink>
                                <img src = {DocX} alt = "docx" id = "docx_icon"/>
                                <h4 id = "studentname"> relatorioFulanodeTal.docx </h4>
                            </FormReportLink>
                            <GrayLine/>
                            <h3/>

                            <h3> Por favor, registre o seu parecer para o aluno Fulano de Tal: </h3>
                            < TextField rows = "4" id = "p1" />

                            <h3> E agora, a sua avaliação final: </h3>
                            <Row>
                                < RadioField type = "radio" id = "p2-1" />
                                <h4> ADEQUADO. </h4>
                            </Row>
                            <Row>
                                < RadioField type = "radio" id = "p2-2" />
                                <h4> ADEQUADO COM RESSALVAS. </h4>
                            </Row>
                            <Row>
                                < RadioField type = "radio" id = "p2-3" />
                                <h4> INADEQUADO. </h4>
                            </Row>

                            <ButtonField id = "submit" type = "submit"> Enviar </ButtonField>
                        </Form>
                    </Column>
                </Wrapper>    
            </>
    );
};

export default ProfessorFeedback;