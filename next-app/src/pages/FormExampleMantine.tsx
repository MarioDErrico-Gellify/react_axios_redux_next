import MantineForm from "@/components/MantineForm";
import { Container } from "@mantine/core";

export default function FormExampleMantine() {
  const labels = ["Name", "Email", "Age"];
  const placeholders = ["Insert name", "Insert email", "Insert age"];

  return (
    <Container>
      <MantineForm
        labels={labels}
        placeholders={placeholders}
        buttonLabel="Submit"
      />
    </Container>
  );
}
