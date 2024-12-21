import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

export const StyledParagraph = styled.p`
  font-size: 18px;
  color: #444;
  margin: 10px 0;
  line-height: 1.6;
  font-family: "Arial", sans-serif;

  &:nth-child(2) {
    font-weight: bold;
    color: #007bff;
  }

  &:last-child {
    font-style: italic;
    color: #888;
  }
`;
