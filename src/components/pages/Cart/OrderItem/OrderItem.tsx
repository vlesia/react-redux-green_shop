import React from "react";
import { CartItem } from "../../../../type/CartItem";
import { removeItem, setQuantity } from "../../../../store/slices/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../../../store/hooks/hooks";
import styles from "./OrderItem.module.scss";

interface Props {
  item: CartItem;
  index: number;
}
export const OrderItem: React.FC<Props> = ({ item, index }) => {
  const dispatch = useAppDispatch();

  const handleQuantityChange = (productId: number, quantity: string) => {
    dispatch(setQuantity({ productId, quantity: Number(quantity) }));
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{`${item.price * item.quantity} €`}</td>
      <td>
        <input
          className={styles.input}
          type="number"
          value={item.quantity}
          onChange={(e) => handleQuantityChange(item.productId, e.target.value)}
          min="1"
        />
      </td>
      <td>
        <button
          onClick={() => dispatch(removeItem(item.productId))}
          className={styles.button}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};
