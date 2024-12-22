import { useForm } from "react-hook-form";
import { constants } from "../../Lib/constants";
import { fetchUser } from "../../service/userservice";
import { useState } from "react";

function RegisterForm() {
  const [notificationMessage, setNoficationMessage] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function addUser(data: any) {
    const userAdd = await fetchUser(data)
      .then((response) => {
        setNoficationMessage("user added " + response.name);
      })
      .catch((reason) => {
        setNoficationMessage(reason);
      });
  }

  return (
    <>
      {notificationMessage}
      <form onSubmit={handleSubmit(addUser)}>
        <div style={{ marginTop: "10px" }}>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            {...register("name", { required: "Campo obbligatorio" })}
            placeholder="Inserisci nome"
          />

          {errors.name && <span>{errors.name.message as string}</span>}
        </div>

        <div style={{ marginTop: "10px" }}>
          <label htmlFor="surname">Cognome</label>
          <input
            id="surname"
            {...register("surname", { required: "Campo obbligatorio" })}
            placeholder="Inserisci cognome"
          />
          {errors.surname && <span>{errors.surname.message as string}</span>}
        </div>

        <div style={{ marginTop: "10px" }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Campo obbligatorio",
              pattern: {
                value: constants.PASSWORD_REGEX,
                message: "Password non corretta",
              },
            })}
            placeholder="Inserisci password"
          />

          {errors.password && <span>{errors.password.message as string}</span>}
        </div>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            type="submit"
            style={{ width: "80%", padding: "10px", background: "white" }}
          >
            Invia
          </button>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
