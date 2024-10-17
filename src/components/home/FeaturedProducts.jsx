import React, { useEffect, useState } from "react";
import { Card, Divider, Flex, Typography } from "antd";
import ProductCard from "../ui/ProductCard";
import axios from "axios";
const { Title } = Typography;

const LazyProductCard = React.lazy(ProductCard);

const URL = import.meta.env.VITE_API_URL;

export default function FeaturedProducts() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${URL}/all`)
      .then((response) => {
        const { data } = response;

        if (data.length <= 0) {
          setIsError(true);
        } else if (data.length > 4) {
          const sortedProducts = data
            .toSorted((a, b) => b.stockAmount - a.stockAmount)
            .slice(0, 4);
          setProducts(sortedProducts);
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
