import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import Styles from "../styles/Header.module.css";

const Layout = ({ main }) => {
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);

  return (
    <div className={Styles.layout}>
      <header className={Styles.header}>
        <Link href="/">Counter App</Link>
        <ul className={Styles.nav_list}>
          <li className={Styles.nav_item}>
            <Link
              href="/"
              onClick={() => setActive("/")}
              className={
                active === "/"
                  ? `${Styles.nav_link} ${Styles.nav_active}`
                  : Styles.nav_active
              }
            >
              Custom Hook
            </Link>
          </li>

          <li className={Styles.nav_item}>
            <Link
              href="reducer"
              onClick={() => setActive("/reducer")}
              className={
                active === "/reducer"
                  ? `${Styles.nav_link} ${Styles.nav_active}`
                  : Styles.nav_active
              }
            >
              Reducer
            </Link>
          </li>

          <li className={Styles.nav_item}>
            <Link
              href="error"
              onClick={() => setActive("/error")}
              className={
                active === "/error"
                  ? `${Styles.nav_link} ${Styles.nav_active}`
                  : Styles.nav_active
              }
            >
              Error Boundary
            </Link>
          </li>
        </ul>
      </header>
      <main>{main}</main>
    </div>
  );
};

export default Layout;
