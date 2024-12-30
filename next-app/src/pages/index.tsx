import React, {useState} from "react";
import {Card, Text, List, Container, TextInput, Button} from "@mantine/core";
import {sortNumbers} from "@/utils/sortNumber";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(
      value.length > 0 && value[value.length - 1] !== "," ? value + "," : value
    );
  };

  const handleSubmit = () => {
    const sorted = sortNumbers(inputValue);
    setSortedNumbers(sorted);
    setInputValue("");
  };

  return (
    <Container>
      <Card shadow="sm" padding="lg" style={{width: 300, margin: "auto"}}>
        <Text size="xl">Inserisci i Numeri</Text>
        <TextInput
          label="Numeri separati da virgola"
          placeholder="Es: 4, 2, 8, 5"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button mt="md" onClick={handleSubmit}>
          Ordina Numeri
        </Button>
        <Text mt="md" size="lg">
          Numeri Ordinati:
        </Text>
        <List>
          {sortedNumbers.map((num, index) => (
            <List.Item key={index}>{num}</List.Item>
          ))}
        </List>
      </Card>
    </Container>
  );
}
