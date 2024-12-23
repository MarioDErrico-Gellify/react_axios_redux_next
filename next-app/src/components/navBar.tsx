import { NavLink } from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconChevronRight,
  IconCircleOff,
} from "@tabler/icons-react";
import Link from "next/link";

function NavBar() {
  return (
    <>
      <NavLink
        component={Link}
        href="/"
        label="HomePage"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLink
        component={Link}
        href="dashboard"
        label="With right section"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight
            size="0.8rem"
            stroke={1.5}
            className="mantine-rotate-rtl"
          />
        }
      />
      <NavLink
        component={Link}
        href="/disabled"
        label="Disabled"
        leftSection={<IconCircleOff size="1rem" stroke={1.5} />}
        disabled
      />
    </>
  );
}

export default NavBar;
