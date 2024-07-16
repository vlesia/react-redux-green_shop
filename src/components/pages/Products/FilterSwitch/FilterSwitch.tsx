import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { setFilter, setQuery } from "../../../../store/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks/hooks";
import styles from "./FilterSwitch.module.scss";

export const FilterSwitch: React.FC = () => {
  const [showInput, setShowInput] = useState(false);
  const dispatch = useAppDispatch();
  const { filter, query } = useAppSelector((state) => state.products);
  

  const handleSearchClick = () => {
    setShowInput(true);
  };

  useEffect(() => {
    return () => {
      dispatch(setQuery(""));
    };
  }, [dispatch]);

  return (
    <div className={styles["switch-container"]}>
      <div className={styles["filter-buttons"]}>
        <button
          onClick={() => dispatch(setFilter("all"))}
          className={`${styles.button} ${
            filter === "all" ? styles.active : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter("fruit"))}
          className={`${styles.button} ${
            filter === "fruit" ? styles.active : ""
          }`}
        >
          Fruits
        </button>
        <button
          onClick={() => dispatch(setFilter("vegetable"))}
          className={`${styles.button} ${
            filter === "vegetable" ? styles.active : ""
          }`}
        >
          Vegetables
        </button>
      </div>
      {!showInput ? (
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="search-addon"
          onClick={handleSearchClick}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      ) : (
        <input
          type="text"
          className="form-control"
          placeholder="search"
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
        />
      )}
    </div>
  );
};
