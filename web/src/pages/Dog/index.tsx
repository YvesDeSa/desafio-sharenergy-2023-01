import {
  Container,
  Content,
} from "./style";

import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

export const Dog: React.FC = () => {

  const [randomDog, setRandomDog] = useState("");

  useEffect(() => {
    axios.get('https://random.dog/woof.json?include=jpg,gif',)
      .then((res) => {
        setRandomDog(res.data.url)
        console.log(res)
      })
      .catch((err) => {
      })
  }, [])

  return <>
    <Container>
      <Header />
      <Content>
        {randomDog ? <img src={randomDog} alt="random dog" /> : null}
      </Content>
    </Container>
  </>;
}
