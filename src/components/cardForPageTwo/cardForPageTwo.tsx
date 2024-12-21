import { Container, StyledParagraph } from "./style";

export interface CardProps {
  titleOne: string;
  titleTwo: string;
  titleTree: string | number;
  name: string;
}

function CardForPageTwoinfo({
  titleOne,
  titleTwo,
  titleTree,
  name,
}: CardProps) {
  return (
    <Container>
      <StyledParagraph>{titleOne}</StyledParagraph>
      <StyledParagraph>
        {titleTwo} {name}
      </StyledParagraph>
      <StyledParagraph>{titleTree}</StyledParagraph>
    </Container>
  );
}

export default CardForPageTwoinfo;
