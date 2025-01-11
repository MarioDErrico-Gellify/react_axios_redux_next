import React, { useState, useCallback, useEffect } from "react";
import { Card, Text, List, Container, TextInput, Button } from "@mantine/core";
import { useSortedNumbers } from "@/hook/useSortedNumber";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function App() {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);

  const sorted = useSortedNumbers(inputValue);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/users/getAll");
        console.log(response);
      } catch (err) {}
    };
    fetchUsers().then((r) => {
      console.log(r);
    });
  }, []);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(
        value.length > 0 && value[value.length - 1] !== ","
          ? value + ","
          : value,
      );
    },
    [],
  );

  const handleSubmit = useCallback(() => {
    setSortedNumbers(sorted);
    setInputValue("");
  }, [sorted]);

  return (
    <Container>
      <Card shadow="sm" padding="lg" style={{ width: 300, margin: "auto" }}>
        <Text size="xl">{t("inputNumbers")}</Text>
        <TextInput
          label={t("numbersSeparated")}
          placeholder={t("numbersPlaceholder")}
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button mt="md" onClick={handleSubmit}>
          {t("sortNumbers")}
        </Button>
        <Text mt="md" size="lg">
          {t("sortedNumbers")}:
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
