import { useNavigate } from "react-router-dom";
import { Li, Nav, Ul } from "./styleNavigation";
import { Paths } from "../hook/useNavigation";

function Navigation() {
  const navigate = useNavigate();

  return (
    <Nav>
      <Ul>
        <Li onClick={() => navigate(Paths.PAGETWO)}>Page Two</Li>
        <Li onClick={() => navigate(Paths.PAGETREE)}>Page Three</Li>
      </Ul>
    </Nav>
  );
}

export default Navigation;
