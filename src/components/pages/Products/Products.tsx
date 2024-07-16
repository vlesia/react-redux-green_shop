import React, { useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { FilterSwitch } from "./FilterSwitch";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { getFilteredProducts } from "../../../utils/helpers/getFilteredProducts";
import { init } from "../../../store/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import styles from "./Products.module.scss";

export const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filter, query, products, loading, error, initialized } =
    useAppSelector((state) => state.products);

  const filteredProducts = getFilteredProducts(products, filter, query);

  useEffect(() => {
    if (!initialized) {
      dispatch(init());
    }
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="d-flex justify-content-center my-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      );
    }

    if (error) {
      return <div className="text-center my-4">{error}</div>;
    }

    if (filteredProducts.length === 0) {
      return (
        <p className={`${styles.notFound} text-center my-4`}>
          No products found
        </p>
      );
    }

    return (
      <Row xs={1} sm={2} lg={3} className="g-4">
        {filteredProducts.map((product) => (
          <Col key={product.id} className="d-flex justify-content-center">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <Container>
      <div>
        <FilterSwitch />
        {renderContent()}
      </div>
    </Container>
  );
};
