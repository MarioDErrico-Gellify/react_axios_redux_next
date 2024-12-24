import MantineForm from "@/components/MantineForm";
import { labelsForFormOne, placeholdersForFormOne } from "@/constants/costants";
import { Container } from "@mantine/core";

export default function FormExampleMantine() {
  return (
    <Container>
      <MantineForm
        labels={labelsForFormOne}
        placeholders={placeholdersForFormOne}
        buttonLabel="Submit"
      />
    </Container>
  );
}
