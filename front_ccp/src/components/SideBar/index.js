import styled from 'styled-components';

export const SideBarContainer = styled.div`
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-around;
  background-color: #1F4652;

  img{
      margin-top: 40px;
      width: 200px;
      height: 200px;
  }
  h1, h2, h3{
    line-height: normal;
    color: white;
    text-align: center;
  }
  h3:hover{
    color: #A9A9A9;
    text-decoration: none;
  }
`;