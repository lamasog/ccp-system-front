*** Settings ***
Library          SeleniumLibrary

*** Variables ***
${CCP Aluno}    http://localhost:3000/student
${CCP Professor}    http://localhost:3000/professor
${BROWSER}    Chrome

*** Keywords ***
Abrir Browser Aluno
    Open Browser                ${CCP Aluno}    ${BROWSER}
    Set Window Size    1920    1080

Acessar Formulario
    Click Element    xpath=//*[@id="root"]/div/div[2]/div[2]/div[1]/button
    Wait Until Page Contains    Relatório Semestral - PPgSI EACH-USP

Preencher Formulario
    Input Text       xpath=//*[@id="p01"]    fulanotal@usp.br
    Input Text       xpath=//*[@id="p02"]    Fulano de Tal
    Input Text       xpath=//*[@id="p03"]    Orientador de Tal
    Input Text       xpath=//*[@id="p04"]    0123456789
    Input Text       xpath=//*[@id="p05"]    https://www.google.com/
    Scroll Element Into View    xpath=//*[@id="p08-2"]

    Input Text       xpath=//*[@id="p06"]    31 de dezembro de 2021
    Click Element    xpath=//*[@id="p07-1"]
    Click Element    xpath=//*[@id="p08-1"]
    Scroll Element Into View    xpath=//*[@id="p11"]

    Click Element    xpath=//*[@id="p09-2"]
    Input Text       xpath=//*[@id="p11"]    teste
    Scroll Element Into View    xpath=//*[@id="p14-3"]

    Input Text       xpath=//*[@id="p12"]    teste
    Click Element    xpath=//*[@id="p13-1"]
    Click Element    xpath=//*[@id="p14-1"]
    Scroll Element Into View    xpath=//*[@id="p18-1"]

    Click Element    xpath=//*[@id="p15-1"]
    Click Element    xpath=//*[@id="p16-1"]
    Click Element    xpath=//*[@id="p17-1"]
    Scroll Element Into View    xpath=//*[@id="p15-1"]

    Click Element    xpath=//*[@id="p19-1"]
    Click Element    xpath=//*[@id="p20-1"]
    Scroll Element Into View    xpath=//*[@id="p22-4"]

    Click Element    xpath=//*[@id="p21-1"]
    Click Element    xpath=//*[@id="p22-1"]
    Scroll Element Into View    xpath=//*[@id="p24"]

    Input Text       xpath=//*[@id="p23"]    comentários...
    Input Text       xpath=//*[@id="p24"]    comentários...
    Scroll Element Into View    xpath=//*[@id="submit"]

    Input Text       xpath=//*[@id="p25"]    comentários...
    Input Text       xpath=//*[@id="p26"]    comentários...
    Input Text       xpath=//*[@id="p27"]    comentários...
    Click Button     xpath=//*[@id="submit"]

Abrir Browser Orientador
    Open Browser                ${CCP Professor}    ${BROWSER}
    Set Window Size    1680    1050

Acessar Lista de Formularios
    Click Element    xpath=//*[@id="root"]/div/div[2]/div[2]/div[1]/button
    Wait Until Page Contains    Lista de relatórios PPgSI EACH-USP

Analisar Formulario
    Click Element    xpath=//*[@id="root"]/div[2]/div[2]/div/button[1]
    Wait Until Page Contains    Análise de relatório semestral

Preencher Parecer
    Scroll Element Into View    xpath=//*[@id="submit"]
    Input Text       xpath=//*[@id="p1"]    comentários...
    Click Element    xpath=//*[@id="p2-1"]
    Click Button     xpath=//*[@id="submit"]
