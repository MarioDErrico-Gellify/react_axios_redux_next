import MantineForm from "@/components/MantineForm";
import ExampleFormMantine from "@/components/MantineForm";
import { Container } from "@mantine/core";

export default function FormExampleMantine() {
  const formConfigurations = [
    { label: "First Name", placeHolder: "Enter your first name", type: "text" },
    { label: "Last Name", placeHolder: "Enter your last name", type: "text" },
    { label: "Email", placeHolder: "Enter your email address", type: "text" },
    { label: "Age", placeHolder: "Enter your age", type: "number" },
  ] as const;

  return (
    <Container>
      {/*TODO create a iterable component*/}
      {/*// @ts-ignore )-:*/}
      <MantineForm fields={[...formConfigurations]} />
    </Container>
  );
}
