import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-bottom: -10px;
  background-color: #ddd;
`;


export const Content = styled.main`
  max-width: 1120px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  label {
    color: #000;
    font-size: 1.4rem;
    font-weight: 500;
    margin: .4rem;
  }

  span{
    font-size: .1;
    color: #c53030;
    font-weight: 200;
    display: flex;
    align-items: center;

    svg {
      margin-right: .2rem;
    }
  }

  input {
    width: 25%;
    padding: .3rem;
    border-radius: 8px;
  }

  img{
    margin: 2rem auto;
    width: 60%;
  }


`;
