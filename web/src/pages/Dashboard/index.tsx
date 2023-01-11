import {
  Container,
  Content,
  RandomUsers,
  CardRandomUser,
} from "./style";

import { useEffect, useState } from "react";
import api from "../../services/api";

import { Header } from "../../components/Header";

interface IRandomUsers {
  picture: string;
  name: string;
  email: string;
  username: string;
  age: number;
}

export const Dashboard: React.FC = () => {

  const [randomUsers, setRandomUsers] = useState<IRandomUsers[]>();

  useEffect(() => {
    api.get<IRandomUsers[]>("/generator/random", { params: { size: 10 } }).then((response) => {
      setRandomUsers(response.data);
    });
  }, []);

  return <>
    <Container>
      <Header />
      <Content>
        <RandomUsers>
          {randomUsers?.map((randomUser) => (
            <CardRandomUser key={randomUser.username}>

              <img src={randomUser.picture} alt={randomUser.name} />

              <div>
                <p>Email: {randomUser.email} </p>
                <p>Username: {randomUser.username} </p>
                <strong>Nome: {randomUser.name}</strong>
                <span>Idade: {randomUser.age}</span>
              </div>

            </CardRandomUser>
          ))}

        </RandomUsers>

      </Content>

    </Container>
  </>;
}
