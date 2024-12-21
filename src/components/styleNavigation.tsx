import styled from "styled-components";
import { Paths } from "../hook/useNavigation";

// Styled components
export const Nav = styled.nav`
  background-color: #f8f9fa;
  padding: 1rem;
  border-bottom: 2px solid #e9ecef;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0;
`;

export const Li = styled.li`
  cursor: pointer;
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;
