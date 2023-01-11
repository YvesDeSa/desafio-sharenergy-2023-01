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
  flex-direction: column;
`;

export const RandomUsers = styled.div`
  margin: 1.4rem auto;
  width: 95%;
  background-color: #e8e8e8;
  border: 2px solid #eee;
  border-radius: 10px;
  padding: 1.6rem 1.4rem;
`;

export const CardRandomUser = styled.div`
  background-color: #efefef;
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid #fff;
  margin-top: .5rem;

  display: flex;
  align-items: center;

  img {
    height: 10rem;
    border-radius: 50%;
  }

  div {
    margin-left: 0.8rem;
    
    p {
      color: #000;
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 14px;
    }

    span {
      display: block;
      font-size: 14px;
      color: #333;
    }

    strong {
      color: #000;
      font-size: 14px;
      font-weight: 600;
    }
  }

  @media (max-width: 500px) {

    img {
      height: 5rem;
    } 
     
    p, span, strong {
      font-size: 10px;
    }

  }
`;