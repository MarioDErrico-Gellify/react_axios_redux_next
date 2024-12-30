import MantineForm from "@/components/MantineForm";
import {labelsForFormOne, placeholdersForFormOne} from "@/constants/costants";
import {MantineFormDTO} from "@/feature/user.types";
import {Container} from "@mantine/core";

export default function FormExampleMantine() {
  return (
    <Container>
      <MantineForm<MantineFormDTO>
        mode={"controlled"}
        labels={labelsForFormOne}
        placeholders={placeholdersForFormOne}
        buttonLabel="Submit"
      />
    </Container>
  );
}
