import { useForm, SubmitHandler, Form } from "react-hook-form";
import "./styles.css";

import React, { useEffect, useState } from "react";
import Card from "./card/card";
import {
  Container,
  Header,
  CardsContainer,
  Button,
  NameDisplay,
} from "./card/style";

export default function App() {
  const [name, setName] = useState("Mario");
  const objNameAndSurname = [
    { name: "lugi", surname: "pellegrino" },
    { name: "Mario", surname: "d'errico" },
    { name: "Michele", surname: "Simeone" },
  ];
  function getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    if (name === "random") {
      const number = getRandomNumber(0, 50);
      setName("random" + number.toString());
    }
  }, [name]);

  return (
    <Container>
      <Header>Welcome to the Name Changer App!</Header>
      <CardsContainer>
        {objNameAndSurname.map((value, index) => (
          <Card key={index} name={value.name} surname={value.surname} />
        ))}
      </CardsContainer>
      <Button onClick={() => setName("random")}>Change My Name</Button>
      <NameDisplay>{name}</NameDisplay>
    </Container>
  );
}
