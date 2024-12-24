import { useForm } from "@mantine/form";
import { NumberInput, TextInput, Button } from "@mantine/core";
import { MantineFormDTO } from "@/service/mantineFormDto";

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

  function handleSubmit(values: MantineFormDTO) {
    window.alert(
      "Form submitted with values:" + values.age + values.email + values.name
    );

    form.reset();
  }

  return (
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
  );
}

export default MantineForm;
