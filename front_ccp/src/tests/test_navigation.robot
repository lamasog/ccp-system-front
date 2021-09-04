*** Settings ***

Documentation    Testando a navegação do Aluno e Orientador
Library     SeleniumLibrary
Resource    configuracoes.robot
        
Test Teardown     Close Browser
Suite Teardown    Close All Browsers


*** Test Cases ***

Navegando e testando Form (Aluno)
    Abrir Browser Aluno
    Acessar Formulario
    Preencher Formulario

Navegando e testando Form (Orientador)
    Abrir Browser Orientador
    Acessar Lista de Formularios
    Analisar Formulario
    Preencher Parecer