import RegisterForm from "../components/formComponent/formExample";
import Navigation from "../components/navigationMenu/navigation";

export default function pageTree() {
  return (
    <>
      <Navigation></Navigation>
      {/*TODO ADD A API CALL WHIT JSONPlaceholder*/}
      <RegisterForm></RegisterForm>
    </>
  );
}
