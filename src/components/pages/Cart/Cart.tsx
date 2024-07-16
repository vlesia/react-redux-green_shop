import React from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import { clearCart } from "../../../store/slices/cartSlice";
import { OrderItem } from "./OrderItem";
import { getTotalAmount } from "../../../utils/helpers/getTotalAmount";
import styles from "./Cart.module.scss";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { Container } from "../../Container";

export const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalAmount = getTotalAmount(cartItems);

  return (
    <Container>
      <h1 className="my-4">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <Table striped bordered hover className="table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <OrderItem key={item.productId} item={item} index={index} />
              ))}
              <tr>
                <td colSpan={5} style={{ fontWeight: "bold" }}>
                  {`Total Amount: ${totalAmount} €`}
                </td>
              </tr>
            </tbody>
          </Table>
          <Row className="mt-4">
            <Col className="text-right">
              <Button
                className="btn-sm"
                variant="success"
                onClick={() => dispatch(clearCart())}
              >
                Proceed to Checkout
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <p className={styles.emptyCartMessage}>Your cart is empty.</p>
      )}
    </Container>
  );
};
