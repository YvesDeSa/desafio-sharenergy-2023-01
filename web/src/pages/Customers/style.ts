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

  > button {
    width: 30%;
    margin: .4rem 0 .8rem auto;
    padding: .4rem;
    border-radius: 10px;
    border: 0;

    background: #9933FF;
    color: #fff;
  }
  
  td {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: 8px;
    color: #000;
    background-color: #eee;

    button {
      width: 100%;
      background-color: #eee;
      border: 1px solid #eee;
      text-align: center;
    }
  }
`;

export const Submit = styled.input`
  width: 48%;
  padding: .4rem;
  border-radius: 10px;
  border: 0;

  background-color: #2e656a;
  color: #e6fffa;

  margin: 1rem 1%;
`;

export const Exit = styled.button`
  width: 48%;
  padding: .4rem;
  border-radius: 10px;
  border: 0;

  background-color: #e8e8e8;
  color: #000;

  margin: 1rem 1%;
`;


