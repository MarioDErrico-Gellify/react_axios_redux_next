import { useEffect, useState } from "react";
import RegisterForm from "../components/formComponent/formExample";
import Navigation from "../components/navigationMenu/navigation";
import { retrieveFakeDataDto } from "../service/userTypes";
import { retriveUser } from "../service/userservice";

export default function pageTree() {
  const arrayFake: retrieveFakeDataDto[] = [];
  const [title, setTitle] = useState<string>("default");
  function retrieveUser() {
    const userDataFake = retriveUser()
      .then((response) => {
        arrayFake.push(response);
        console.log(arrayFake);
      })
      .finally(() => {
        arrayFake.map((val) => {
          setTitle(val.title + val.id + val.userId + " this is a api response");
        });
      })
      .catch((reason) => {
        console.log("💔" + reason);
      });
  }

  return (
    <>
      <Navigation></Navigation>
      <h1 onClick={() => retrieveUser()}>{title}</h1>
      <RegisterForm></RegisterForm>
    </>
  );
}
