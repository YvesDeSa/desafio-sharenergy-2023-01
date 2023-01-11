import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  img {
    height: 10rem;
  }

  form{
    width: 315px;
    margin: 80px 0;
    text-align: center;

    h1{
      margin-bottom: 24px;
    }
  }

  a {
    color: #9933FF;
    display: block;
    text-decoration: none;
    margin-top: 24px;
    transition: color 0.2s;
    display: flex;
    align-items: center;
      
    &:hover {
      color: ${shade(0.4, '#9933FF')};
    }
    svg{
      margin: 1px 14px 0 0;
    }
  }

`;