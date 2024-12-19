import { useForm, SubmitHandler } from "react-hook-form";
import { object, InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import { fetchUser } from "../service/userservice.js";
import {
  Input,
  InputContainer,
  Label,
  SubmitButton,
  SubmitContainer,
} from "./style.js";

//---------------------------------------

let userSchema = object({
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is required"),
  age: yup.number().required("required"),
});

type Inputs = InferType<typeof userSchema>;

//---------------------------------------

function Form() {
  const [succes, setSucces] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const user = await fetchUser(data)
      .then((response) => {
        console.log(response);
        setSucces(true);
        setTimeout(() => setSucces(false), 5000);
      })
      .catch((reason) => {
        console.error(reason);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Label>Name</Label>
        <Input type="string" {...register("name")} />
        {errors.name && <h1>{errors.name.message}</h1>}
      </InputContainer>
      <InputContainer>
        <Label>Surname</Label>
        <Input {...register("surname")} />
        {errors.surname && <h1>{errors.surname.message}</h1>}
      </InputContainer>
      <InputContainer>
        <Label>Age</Label>
        <Input {...register("age")} />
        {errors.age && <h1>{errors.age.message}</h1>}
      </InputContainer>
      <SubmitContainer>
        <SubmitButton type="submit" value="Submit" />
        {succes && <p>{"dati inseriti con successo"}</p>}
      </SubmitContainer>
    </form>
  );
}

export default Form;
