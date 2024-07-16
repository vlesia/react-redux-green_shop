import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Product } from "../../../../type/Product";
import { addItem } from "../../../../store/slices/cartSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks/hooks";

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const isInCart = useAppSelector((state) =>
    state.cart.items.some((item) => item.productId === product.id)
  );

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={product.photo}
        alt={product.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button
          variant="success"
          onClick={() =>
            dispatch(
              addItem({
                productId: product.id,
                name: product.name,
                quantity: 1,
                price: product.price,
              })
            )
          }
          style={{ backgroundColor: isInCart ? "grey" : "" }}
        >
          {isInCart ? "Added to Cart" : `Buy for ${product.price} €`}
        </Button>
      </Card.Body>
    </Card>
  );
};
