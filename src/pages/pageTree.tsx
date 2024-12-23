import RegisterForm from "../components/formComponent/formExample";
import Navigation from "../components/navigationMenu/navigation";
import { retrieveFakeDataDto } from "../service/userTypes";
import { retriveUser } from "../service/userservice";

export default function pageTree() {
  const arrayFake: retrieveFakeDataDto[] = [];

  function retrieveUser() {
    const userDataFake = retriveUser()
      .then((response) => {
        arrayFake.push(response);
      })
      .catch((reason) => {
        console.log(reason);
      });
  }

  retrieveUser();
  console.log(arrayFake);

  return (
    <>
      <Navigation></Navigation>
      <RegisterForm></RegisterForm>
    </>
  );
}
