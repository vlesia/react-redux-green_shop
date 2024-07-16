import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import { BurgerButton } from "./BurgerButton";
import styles from "./Header.module.scss";
import { useAppSelector } from "../../store/hooks/hooks";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.items);
  const matches = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logo}>
          FreshHarvest
        </Link>
        {matches && (
          <BurgerButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        )}

        <div
          className={classNames(styles.menu, { [styles.menuOpen]: isMenuOpen })}
        >
          <Nav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
          {!matches && (
            <>
              <div className={styles["header-right"]}>
                <Link to="/cart" className={styles["cart-icon"]}>
                  <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                  {cartItems.length > 0 && (
                    <span className={styles["cart-count"]}>
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
