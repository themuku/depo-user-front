import React, { useEffect, useState } from "react";
import { Card, Divider, Flex, Typography } from "antd";
import ProductCard from "../ui/ProductCard";
import axios from "axios";
const { Title } = Typography;

const LazyProductCard = React.lazy(ProductCard);

export default function FeaturedProducts() {
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
          setProducts(data.slice(0, 4));
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
    <section className="featured-products-sections">
      <Title>Featured Products</Title>
      <Divider />
      <Flex justify="space-between">
        {!isError ? (
          products.map((product) => (
            <ProductCard {...product} isLoading={isLoading} key={product.id} />
          ))
        ) : (
          <Title type="secondary" level={3}>
            There is no featured products available yet!
          </Title>
        )}
      </Flex>
      <Divider />
    </section>
  );
}
