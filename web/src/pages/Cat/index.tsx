import {
  Container,
  Content,
} from "./style";

import { useState } from "react";

import { Header } from "../../components/Header";
import { FiAlertCircle } from "react-icons/fi";

export const Cat: React.FC = () => {

  const [statusCode, setStatusCode] = useState("");

  const handleChangeName = (event: { target: HTMLInputElement; }) => {
    const value = event.target.value;
    setStatusCode(value);
  };

  return <>
    <Container>
      <Header />
      <Content>
        <label htmlFor="nome">Nome operador transação</label>
        <input onChange={handleChangeName} type="number" />

        {statusCode.length >= 3 ? <img src={`https://http.cat/${statusCode}`} alt="cat" /> : <span> <FiAlertCircle /> Insira um code</span>}
      </Content>
    </Container>
  </>;
}
