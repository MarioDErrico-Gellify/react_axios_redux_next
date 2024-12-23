import { useForm } from "@mantine/form";
import { NumberInput, TextInput, Button } from "@mantine/core";
import { MantineFormDTO } from "@/service/mantineFormDto";

function MantineForm() {
  const form = useForm({
    /*TODO add i18n*/
    mode: "uncontrolled",
    initialValues: { name: "", email: "", age: 0 },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      age: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
  });

  function handleSubmit(params: MantineFormDTO) {
    window.alert(params.age);
    /*TODO ADD CALL API*/
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key("name")}
        {...form.getInputProps("name")}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key("email")}
        {...form.getInputProps("email")}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key("age")}
        {...form.getInputProps("age")}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}

export default MantineForm;
