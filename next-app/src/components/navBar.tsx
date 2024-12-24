import { Paths } from "@/constants/costants";
import { NavLink } from "@mantine/core";
import {
  IconGauge,
  IconChevronRight,
  IconCircleOff,
  IconHome2,
} from "@tabler/icons-react";
import Link from "next/link";

function NavBar() {
  return (
    <div>
      <NavLink
        style={{}}
        component={Link}
        href={Paths.homePage}
        label="HomePage"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLink
        style={{}}
        component={Link}
        href={Paths.formMantine}
        label="GoTo-FormExampleMantine"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLink
        component={Link}
        href={Paths.dashboard}
        label="dashboard"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight
            size="0.8rem"
            stroke={1.5}
            className="mantine-rotate-rtl"
          />
        }
      />
    </div>
  );
}

export default NavBar;
