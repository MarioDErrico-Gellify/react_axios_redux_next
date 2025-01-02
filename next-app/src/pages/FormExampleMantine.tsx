import MantineForm from "@/components/MantineForm";
import { labelsForFormOne, placeholdersForFormOne } from "@/constants/costants";
import { UserFormDTO } from "@/feature/user.types";
import { Container } from "@mantine/core";
import { useEffect, useRef } from "react";

export default function FormExampleMantine() {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <Container>
      <p>The component has been rendered {renderCount.current} times.</p>
      <MantineForm
        mode={"controlled"}
        labels={labelsForFormOne}
        placeholders={placeholdersForFormOne}
        buttonLabel="Submit"
      />
    </Container>
  );
}
