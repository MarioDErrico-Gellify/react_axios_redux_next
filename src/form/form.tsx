import { useForm, SubmitHandler } from "react-hook-form";
import { object, string, number, InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import { fetchUser } from "/src/service/userservice.ts";

import {
  InputContainer,
  Label,
  Input,
  ReferenceError,
  SubmitContainer,
  SubmitButton,
  Error,
} from "./style.tsx";

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
        {errors.name && <Error>{errors.name.message}</Error>}
      </InputContainer>
      <InputContainer>
        <Label>Surname</Label>
        <Input {...register("surname")} />
        {errors.surname && <Error>{errors.surname.message}</Error>}
      </InputContainer>
      <InputContainer>
        <Label>Age</Label>
        <Input {...register("age")} />
        {errors.age && <Error>{errors.age.message}</Error>}
      </InputContainer>
      <SubmitContainer>
        <SubmitButton type="submit" value="Submit" />
        {succes && <p>{"dati inseriti con successo"}</p>}
      </SubmitContainer>
    </form>
  );
}

export default Form;
