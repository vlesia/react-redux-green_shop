import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./Nav.module.scss";

enum Pages {
  Home = "/",
  Products = "products",
  About = "about",
}

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Nav: React.FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {
  const setIsActive = (isActive: boolean) =>
    classNames(styles.link, {
      [styles.linkActive]: isActive,
    });

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {Object.entries(Pages).map(([key, path]) => (
          <li className={styles.item} key={key}>
            <NavLink
              to={path}
              className={({ isActive }) => setIsActive(isActive)}
              onClick={() => setIsMenuOpen(false)}
            >
              {key}
            </NavLink>
          </li>
        ))}
        {isMenuOpen && (
          <>
            <li className={styles.item}>
              <NavLink
                to={"cart"}
                className={({ isActive }) => setIsActive(isActive)}
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
