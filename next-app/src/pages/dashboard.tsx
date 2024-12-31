import CardDashboard from "@/components/cardDashboard";
import { useAppSelector } from "@/hook/hooks";
import { Container } from "@mantine/core";

export default function Dashboard() {
  const userState = useAppSelector((state) => state.auth);
  /* This is an example of retrieving a state prop with Redux Toolkit on any part of application*/
  return (
    <>
      <Container>
        <CardDashboard></CardDashboard>
        {userState ? (
          <>
            <p>{userState.age}</p>
            <p>{userState.email}</p>
            <p>{userState.name}</p>
            <p>{userState.isAuthenticated}</p>
          </>
        ) : (
          <p>{"please add user"}</p>
        )}
      </Container>
    </>
  );
}
