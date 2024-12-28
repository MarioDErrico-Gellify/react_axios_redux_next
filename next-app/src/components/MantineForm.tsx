import { useForm } from "@mantine/form";
import { TextInput, Button, Container, Loader } from "@mantine/core";
import { MantineFormDTO } from "@/service/userFormTypes";
import { registerUser } from "@/service/userFormService";
import { useState } from "react";
import { constants } from "@/constants/costants";

//-----------------------------

type genericPropsMantine<T> = {
  labels: string[];
  placeholders: string[];
  buttonLabel: string;
  mode?: "uncontrolled" | "controlled";
};

//-----------------------------

function MantineForm<T extends MantineFormDTO>({
  labels,
  placeholders,
  buttonLabel,
  mode,
}: genericPropsMantine<T>) {
  const [modalOpened, setModalOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<MantineFormDTO>();

  const form = useForm({
    mode: mode,
    initialValues: { name: "", email: "", age: 18 },
    validate: {
      name: (value: string) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value : string) =>
      constants.EMAIL_REGEX.test(value) ? null : "Invalid email",
      age: (value: number) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
  });

  
  async function handleSubmit(values: MantineFormDTO) {
    setLoading(true); 
    try { 
      const response = await registerUser(values);
      setUserData(response);
      setModalOpened(true);
      form.reset();
    } catch (error) {
      console.error("💔Error during registration:", error);
    } finally {
      setLoading(false); 
    }
  }

  function disableButton(): boolean {
    return !form.values.name || !form.values.email || !form.values.age;
  }
  
//-----------------------------
 
return (
  <Container>
    {loading && <Loader color="blue" />}
    <form onSubmit={form.onSubmit(handleSubmit)}>
      {labels.map((label, _value) => (
        <div key={_value} style={{ marginBottom: "1rem" }}>
          <TextInput
            label={label}
            placeholder={placeholders[_value]}
            {...form.getInputProps(label.toLowerCase())}
          />
        </div>
      ))}
      <Button type="submit" mt="lg" disabled={disableButton()}>
        {buttonLabel}
      </Button>
    </form>
  </Container>
);

}

export default MantineForm;


