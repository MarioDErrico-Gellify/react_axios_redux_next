import { ReactNode } from "react";
import { Container, StyledParagraph } from "./style";

export interface CardProps {
  titleOne: string;
  titleTwo: string;
  titleTree: string | number;
  name: string;
  children?: ReactNode; // Add children prop
}

function CardForPageTwoinfo({
  titleOne,
  titleTwo,
  titleTree,
  name,
  children,
}: CardProps) {
  return (
    <Container>
      <StyledParagraph>{titleOne}</StyledParagraph>
      <StyledParagraph>
        {titleTwo} {name}
      </StyledParagraph>
      <StyledParagraph>{titleTree}</StyledParagraph>
      <div>{children}</div> {/* Render children */}
    </Container>
  );
}

export default CardForPageTwoinfo;
