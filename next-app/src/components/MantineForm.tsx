import { useForm } from "@mantine/form";
import { NumberInput, TextInput, Button, Container, Loader } from "@mantine/core";
import { MantineFormDTO } from "@/service/userFormTypes";
import { registerUser } from "@/service/userFormService";
import { useState } from "react";
import CardUser from "./cardUser";

type genericPropsMantine = {
  labels: string[];
  placeholders: string[];
  buttonLabel: string;
  mode?: "uncontrolled" | "controlled";
};

function MantineForm({
  labels,
  placeholders,
  buttonLabel,
  mode,
}: genericPropsMantine) {
  const [modalOpened, setModalOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const [userData, setUserData] = useState<{ name: string, email: string, age: number } | null>(null);

  const form = useForm({
    mode: mode || "uncontrolled",
    initialValues: { name: "", email: "", age: 18 },
    validate: {
      name: (value: string) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      age: (value: number) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
  });

  
  async function handleSubmit(values: MantineFormDTO) {
    setLoading(true); 
    try { 
      const response = await registerUser(values);
      setUserData({
        name: response.name || values.name, 
        email: response.email || values.email,
        age: response.age || values.age,
      });
      setModalOpened(true);
      form.reset();
    } catch (error) {
      console.error("💔 Error during registration:", error);
    } finally {
      setLoading(false); 
    }
  }

 
  const handleClose = () => {
    setModalOpened(false); 
  };

  return (
    <Container>
      {loading && <Loader color="blue" />}
      <form onSubmit={form.onSubmit(handleSubmit)}>
        {labels.map((label, _) => {
          const fieldName = label.toLowerCase();
          return (
            <div key={_} style={{ marginBottom: "1rem" }}>
              <TextInput
                label={label}
                placeholder={placeholders[_]}
                {...form.getInputProps(fieldName)}
              />
            </div>
          );
        })}
        <Button type="submit" mt="sm">
          {buttonLabel}
        </Button>
      </form>

      
      <CardUser 
        name={userData?.name!} 
        email={userData?.email!} 
        age={userData?.age!} 
        onClose={handleClose} 
        opened={modalOpened} 
      />
    </Container>
  );
}

export default MantineForm;


