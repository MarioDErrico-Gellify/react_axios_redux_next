import {Paths} from "@/constants/costants";
import {NavLink} from "@mantine/core";
import {IconGauge, IconChevronRight, IconHome2} from "@tabler/icons-react";
import Link from "next/link";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <NavLink
        component={Link}
        href={Paths.homePage}
        label="HomePage"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLink
        component={Link}
        href={Paths.formMantine}
        label="GoTo-FormExampleMantine"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLink
        component={Link}
        href={Paths.dashboard}
        label="dashboard"
        leftSection={<IconGauge size="1rem" stroke={1} />}
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