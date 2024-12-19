// Styled Components
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f8ff;
  font-family: "Arial", sans-serif;
  padding: 20px;
`;

export const Header = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const NameDisplay = styled.h2`
  color: #555;
  font-size: 2rem;
  margin-top: 20px;
  font-weight: bold;
`;
