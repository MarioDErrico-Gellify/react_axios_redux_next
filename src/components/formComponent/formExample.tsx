import { useForm } from "react-hook-form";
import { constants } from "../../Lib/constants";
import { registerUser } from "../../service/userservice";
import { useState } from "react";
import {
  FormWrapper,
  InputGroup,
  Label,
  Input,
  ErrorMessage,
  Button,
} from "./style";
import { registerFormDto } from "../../service/userTypes";

function RegisterForm() {
  const [notificationMessage, setNoficationMessage] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormDto>();

  async function addUser(data: registerFormDto) {
    const response = await registerUser(data)
      .then((response) => {
        setNoficationMessage(
          `User added: ${response.name} ${response.surname}`
        );
      })
      .catch((reason) => {
        setNoficationMessage("Errore durante l'aggiunta dell'utente." + reason);
      });
  }

  return (
    <FormWrapper>
      {notificationMessage && <p>{notificationMessage}</p>}
      <form onSubmit={handleSubmit(addUser)}>
        <InputGroup>
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            {...register("name", {
              required: "Campo obbligatorio",
              minLength: {
                value: 3,
                message: "Il nome deve contenere almeno 3 caratteri.",
              },
            })}
            placeholder="Inserisci nome"
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="surname">Cognome</Label>
          <Input
            id="surname"
            {...register("surname", {
              required: "Campo obbligatorio",
              minLength: {
                value: 3,
                message: "Il cognome deve contenere almeno 3 caratteri.",
              },
            })}
            placeholder="Inserisci cognome"
          />
          {errors.surname && (
            <ErrorMessage>{errors.surname.message}</ErrorMessage>
          )}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            {...register("password", {
              required: "Campo obbligatorio",
              pattern: {
                value: constants.PASSWORD_REGEX,
                message:
                  "La password deve contenere almeno 8 caratteri, una lettera maiuscola, una minuscola, un numero e un carattere speciale.",
              },
            })}
            placeholder="Inserisci password"
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </InputGroup>

        <Button type="submit" disabled={Object.keys(errors).length > 0}>
          {"invia"}
        </Button>
      </form>
    </FormWrapper>
  );
}

export default RegisterForm;
