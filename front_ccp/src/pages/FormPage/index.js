import React from "react";
import { Wrapper, Column, Row, ExitButton, Form, GrayLine, SmallTextField, RadioField, LargeTextField, ButtonField } from "./styles";


const FormPage = () => {
    return (
        <>
            <Wrapper>
                <ExitButton id = "voltar"> Voltar </ExitButton>
                <Column>
                    <Form>
                        <h1> Relatório Semestral - PPgSI EACH-USP 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1/9 </h1>
                        < GrayLine />
                        <h3> 1. E-mail: </h3>
                        < SmallTextField type = "email" id = "p01" />   {/*questão 01*/}

                        <h3> 2. Nome do aluno: </h3>
                        < SmallTextField type = "text" id = "p02" />    {/*questão 02*/}

                        <h3> 3. Nome do orientador: </h3>
                        < SmallTextField type = "text" id = "p03" />    {/*questão 03*/}

                        <h3> 4. Número USP: </h3>
                        < SmallTextField type = "text" id = "p04" />    {/*questão 04*/}

                        <h3> 5. Link para o curriculum lattes: </h3>
                        < SmallTextField type = "link" id = "p05" />    {/*questão 05*/}

                    </Form>
                    <Form>
                        <h1> Relatório Semestral - PPgSI EACH-USP 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2/9 </h1>
                        < GrayLine />
                        <h3> 6. Data da última atualização do lattes: </h3>
                        < SmallTextField type = "text" placeholder = "exemplo: 7 de janeiro de 2019" id = "p06" />      {/*questão 06*/}

                        <h3> 7. Qual foi o resultado da avaliação do seu último relatório? <i> Marcar apenas uma oval: </i> </h3>
                        <Row>
                            < RadioField type = "radio" id = "p07-1" />     {/*questão 07*/}
                            <h4> Aprovado. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p07-2" />
                            <h4> Aprovado com ressalvas. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p07-3" />
                            <h4> Insatisfatório. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p07-4" />
                            <h4> Não se aplica (é o meu primeiro relatório). </h4>
                        </Row>
                        <h3/>

                        <h3> 8. Qual o seu curso? <i> Marcar apenas uma oval: </i> </h3>
                        <Row>
                            < RadioField type = "radio" id = "p08-1" />     {/*questão 08*/}
                            <h4> Mestrado. - <i> pular a pergunta 10 </i> </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p08-2" />
                            <h4> Doutorado. - <i> pular a pergunta 9 </i> </h4>
                        </Row>
                        <h3/>

                        <h3> 9. Este relatório é referente a que semestre do seu curso (último semestre concluído)? <i> Marcar apenas uma oval: </i> </h3>
                        
                    </Form>
                    <Form>
                        <h1> Relatório Semestral - PPgSI EACH-USP 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3/9 </h1>
                        < GrayLine />
                        <h3/>
                        <Row>
                            < RadioField type = "radio" id = "p09-1" />     {/*questão 09*/}
                            <h4> 1o semestre do curso. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p09-2" />
                            <h4> 2o semestre do curso. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p09-3" />
                            <h4> 3o sesmtre do curso. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p09-4" />
                            <h4> 4o semestre do curso. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p09-5" />
                            <h4> 5o semestre do curso. </h4>
                        </Row>
                        <h3/>

                        <h3> 10. Este relatório é referente a que semestre do seu curso (último semestre concluído)? <i> Marcar apenas uma oval: </i> </h3>
                        <Row>
                            < RadioField type = "radio" id = "p10-1" />     {/*questão 10*/}
                            <h4> 1o semestre do curso. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p10-2" />
                            <h4> 2o semestre do curso. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p10-3" />
                            <h4> 3o sesmtre do curso. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p10-4" />
                            <h4> 4o semestre do curso. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p10-5" />
                            <h4> 5o semestre do curso. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p10-6" />
                            <h4> 6o sesmtre do curso. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p10-7" />
                            <h4> 7o semestre do curso. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p10-8" />
                            <h4> 8o semestre do curso. </h4>
                        </Row>
                        <h3/>

                        <h3> 11. Em quantas disciplinas obrigatórias você já obteve aprovação? </h3>
                        < SmallTextField type = "text" id = "p11" />    {/*questão 11*/}
                        
                    </Form>
                    <Form>
                        <h1> Relatório Semestral - PPgSI EACH-USP 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4/9 </h1>
                        < GrayLine />
                        <h3> 12. Em quantas disciplinas optativas você já obteve aprovação? </h3>
                        < SmallTextField type = "text" id = "p12" />    {/*questão 12*/}

                        <h3> 13. Todos os conceitos em disciplinas cursadas no último semestre já foram divulgados? Caso não, espere até 2 dias antes da data máxima definida no site do PPgSI para enviar o seu relatório.  <i> Marcar apenas uma oval: </i> </h3>
                        <Row>
                            < RadioField type = "radio" id = "p13-1" />     {/*questão 13*/}
                            <h4> Sim. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p13-2" />
                            <h4> Não. </h4>
                        </Row>
                        <h3/>

                        <h3> 14. Em quantas disciplinas você foi reprovado desde o início do mestrado/doutorado? <i> Marcar apenas uma oval: </i> </h3>
                        <Row>
                            < RadioField type = "radio" id = "p14-1" />     {/*questão 14*/}
                            <h4> 0 </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p14-2" />
                            <h4> 1 </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p14-3" />
                            <h4> 2 </h4>
                        </Row>
                        <h3/>

                        <h3> 15. Em quantas disciplinas você foi reprovado no último semestre cursado? <i> Marcar apenas uma oval: </i> </h3>

                    </Form>
                    <Form>
                        <h1> Relatório Semestral - PPgSI EACH-USP 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5/9 </h1>
                        < GrayLine />
                        <h3/>
                        <Row>
                            < RadioField type = "radio" id = "p15-1" />     {/*questão 15*/}
                            <h4> 0 </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p15-2" />
                            <h4> 1 </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p15-3" />
                            <h4> 2 </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p15-4" />
                            <h4> Já terminei as disciplinas. </h4>
                        </Row>
                        <h3/>

                        <h3> 16. Você já foi aprovado no exame de proficiência em idiomas? <i> Marcar apenas uma oval: </i> </h3>
                        <Row>
                            < RadioField type = "radio" id = "p16-1" />     {/*questão 16*/}
                            <h4> Sim. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p16-2" />
                            <h4> Não. </h4>
                        </Row>
                        <h3/>

                        <h3> 17. Você já realizou o exame de qualificação? <i> Marcar apenas uma oval: </i> </h3>
                        <Row>
                            < RadioField type = "radio" id = "p17-1" />     {/*questão 17*/}
                            <h4> Sim. Fui aprovado. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p17-2" />
                            <h4> Sim. Fui reprovado. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p17-3" />
                            <h4> Não. </h4>
                        </Row>
                        <h3/>

                        <h3> 18. Se não qualificou, quanto tempo falta para o limite máximo de qualificação? <i> Marcar apenas uma oval: </i> </h3>
                        <Row>
                            < RadioField type = "radio" id = "p18-1" />     {/*questão 18*/}
                            <h4> Menos de 3 meses. </h4>
                        </Row>

                    </Form>
                    <Form>
                        <h1> Relatório Semestral - PPgSI EACH-USP 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6/9 </h1>
                        < GrayLine />
                        <h3/>
                        <Row>
                            < RadioField type = "radio" id = "p18-2" />
                            <h4> Entre 3 e 6 meses. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p18-3" />
                            <h4> Mais de 6 meses. </h4>
                        </Row>
                        <h3/>

                        <h3> 19. Se você já fez sua qualificação e foi aprovado, quanto tempo falta para o limite máximo do depósito da sua dissertação/tese? <i> Marcar apenas uma oval: </i> </h3>
                        <Row>
                            < RadioField type = "radio" id = "p19-1" />     {/*questão 19*/}
                            <h4> Menos de 3 meses. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p19-2" />
                            <h4> Entre 3 e 6 meses. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p19-3" />
                            <h4> Mais de 6 meses. </h4>
                        </Row>
                        <h3/>

                        <h3> 20. Quantos artigos referentes a sua pesquisa de mestrado/doutorado você teve aceitos ou publicados? (Obs: Você deve inserir os artigos publicados no seu currículo Lattes) <i> Marcar apenas uma oval: </i> </h3>
                        <Row>
                            < RadioField type = "radio" id = "p20-1" />     {/*questão 20*/}
                            <h4> 0 </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p20-2" />
                            <h4> 1 </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p20-3" />
                            <h4> 2 </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p20-4" />
                            <h4> Mais de 2. </h4>
                        </Row>
                        <h3/>

                    </Form>
                    <Form>
                        <h1> Relatório Semestral - PPgSI EACH-USP 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7/9 </h1>
                        < GrayLine />
                        <h3> 21. Quantos artigos você submeteu e ainda estão aguardando resposta? <i> Marcar apenas uma oval: </i> </h3>
                        <Row>
                            < RadioField type = "radio" id = "p21-1" />     {/*questão 21*/}
                            <h4> 0 </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p21-2" />
                            <h4> 1 </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p21-3" />
                            <h4> 2 </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p21-4" />
                            <h4> Mais de 2. </h4>
                        </Row>
                        <h3/>

                        <h3> 22. Você possui artigo em preparação para submissão? Qual o estágio dele? <i> Marcar apenas uma oval: </i> </h3>
                        <Row>
                            < RadioField type = "radio" id = "p22-1" />     {/*questão 22*/}
                            <h4> Não possuo. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p22-2" />
                            <h4> Experimentos em elaboração. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p22-3" />
                            <h4> Aguardando coleta de dados. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p22-4" />
                            <h4> Em fase de escrita. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p22-3" />
                            <h4> Em fase de tradução. </h4>
                        </Row>
                        <Row>
                            < RadioField type = "radio" id = "p22-4" />
                            <h4> Preparando resposta para os revisores. </h4>
                        </Row>
                        <h3/>
                        
                        <h3> 23. Qual o estágio atual de sua pesquisa? Apresente toda e qualquer atividade que já tenha sido realizada no contexto de seu projeto de pesquisa (mesmo que ainda incompleta). Faça uma descrição detalhada. </h3>

                    </Form>
                    <Form>
                        <h1> Relatório Semestral - PPgSI EACH-USP 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8/9 </h1>
                        < GrayLine />
                        <h3/>
                        < LargeTextField rows = "4" id = "p23" />       {/*questão 23*/}

                        <h3> 24. Você participou de algum congressos no país? Se sim, indicar local, se houve apresentação de trabalho e se o congresso é ou não internacional. </h3>
                        < LargeTextField rows = "4" id = "p24" />       {/*questão 24*/}

                        <h3> 25. Você participou de algum congresso no exterior? Se sim, indicar local e se houve apresentação de trabalho. </h3>

                    </Form>
                    <Form>
                        <h1> Relatório Semestral - PPgSI EACH-USP 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9/9 </h1>
                        < GrayLine />
                        <h3/>
                        < LargeTextField rows = "4" id = "p25" />       {/*questão 25*/}

                        <h3> 26. Você realizou algum estágio de pesquisa ou visita de pesquisa no exterior (incluindo sanduíche)? Se sim, indique o nome da universidade e o período. </h3>
                        < SmallTextField type = "text" id = "p26" />    {/*questão 26*/}

                        <h3> 27. Você tem algo a mais a declarar para a CCP - PPgSI? </h3>
                        < LargeTextField rows = "4" id = "p27" />       {/*questão 27*/}

                        <ButtonField id = "submit" type = "submit"> Enviar </ButtonField>
                    </Form>
                </Column>
            </Wrapper>
        </>
    );
};

export default FormPage;