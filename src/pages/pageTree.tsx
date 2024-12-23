import { useEffect } from "react";
import RegisterForm from "../components/formComponent/formExample";
import Navigation from "../components/navigationMenu/navigation";
import { retriveUser } from "../service/userservice";

export default function pageTree() {
  function retrieveUser() {
    const userDataFake = retriveUser().then((response) => {
      console.log(response.data);
    });
  }

  useEffect(() => {
    retrieveUser();
  }, []);

  return (
    <>
      <Navigation></Navigation>
      {/*TODO ADD A API CALL WHIT JSONPlaceholder*/}
      <RegisterForm></RegisterForm>
    </>
  );
}
