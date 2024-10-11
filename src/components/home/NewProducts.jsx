import React, { useEffect, useState } from "react";
import { Col, Divider, Flex, Grid, Row, Typography } from "antd";
import ProductCard from "../ui/ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;

// const LazyProductCard = React.lazy(ProductCard);

export default function NewProducts() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://depo-back.vercel.app/products/all")
      .then((response) => {
        const { data } = response;

        if (data.length <= 0) {
          setIsError(true);
        } else if (data.length > 4) {
          setProducts(data.slice(0, 12));
        } else {
          setProducts(data);
        }

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);
  return (
    <section className="new-products-sections">
      <Flex align="center" justify="space-between">
        <Title
          style={{
            marginBottom: 0,
          }}
        >
          New Products
        </Title>
        <Link to="/products">
          <Text className="all-products-link">See all products &rarr;</Text>
        </Link>
      </Flex>
      <Divider />
      <Row gutter={[24, 24]} justify="space-between">
        {!isError ? (
          products.map((product) => (
            <Col>
              <ProductCard
                {...product}
                isLoading={isLoading}
                key={product.id}
              />
            </Col>
          ))
        ) : (
          <Title type="secondary" level={3}>
            There is no featured products available yet!
          </Title>
        )}
      </Row>
      <Divider />
    </section>
  );
}
