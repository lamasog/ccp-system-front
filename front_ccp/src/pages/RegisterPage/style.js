import styled from 'styled-components';

export const ContainerPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const ContainerMain = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerRegister = styled.div`
  width: 75%;
  height: 100vh;
  margin-top: 5rem;
  margin-bottom: 6rem;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    margin: 5rem;
  }
  .buttonSubmit {
    width: 20rem;
    height: 5rem;
    background: var(--color-button-background);
    color: var(--color-highlight-text);
    border: 0;
    border-radius: 0.6rem;
    cursor: pointer;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: 0.2s;
    margin: 2rem 0 1.2rem 0;
  }
  .buttonSubmit:hover {
    opacity: 0.8;
  }
  form {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  select{
    width: 330px;
    height: 40px;
    background: #F7F3F3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-indent: 15px;
    outline: 0;
  }
`;