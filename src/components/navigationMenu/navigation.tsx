import { Link } from "react-router-dom";
import { useNavigationLinks } from "../../hook/useNavigation";
import { Nav, Ul, Li } from "./styleNavigation";

function Navigation() {
  const { links, isLinkActive } = useNavigationLinks();

  return (
    <Nav>
      <Ul>
        {links.map((link) => (
          <Li
            key={link.link}
            style={{
              fontWeight: isLinkActive(link) ? "bold" : "normal",
              color: isLinkActive(link) ? "red" : "black",
            }}
          >
            <Link to={link.link}>{link.label}</Link>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
}

export default Navigation;
