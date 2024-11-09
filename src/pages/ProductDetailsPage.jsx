import axios from "axios";
import { useLoaderData, useLocation } from "react-router-dom";
import { Row, Col, Card, Typography, Button, Image } from "antd";
import { useStore } from "../store";
import { useEffect, useState } from "react";
import ProductCard from "../components/ui/ProductCard";

const { Title, Text } = Typography;

export default function ProductDetailsPage() {
  const product = useLoaderData();
  const location = useLocation();

  const [isAdded, setIsAdded] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);

  const { addToCart, removeFromCart } = useStore.getState();
  const cartList = useStore((state) => state.cart);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [location]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all`);
        setSimilarProducts(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchAllProducts();
  }, []);

  useEffect(() => {
    const foundIndex = cartList?.cart.findIndex(
      (item) => item.id === product.id
    );
    if (foundIndex === -1) {
      return setIsAdded(false);
    }

    setIsAdded(true);
  }, [location]);

  const handleCart = () => {
    if (isAdded) {
      removeFromCart(product.id);
      setIsAdded(false);
    } else {
      addToCart({
        productName: product.productName,
        description: product.description,
        price: product.price,
        id: product.id,
      });
      setIsAdded(true);
    }
  };

  return (
    <div style={{ padding: "24px", height: "" }}>
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <img
            src="https://via.placeholder.com/300"
            alt={product.productName}
            style={{ width: "100%" }}
          />
        </Col>
        <Col xs={24} md={12}>
          <Card style={{ height: "100%" }}>
            <Title level={2}>{product.productName}</Title>
            <Text type="secondary">{product.description}</Text>
            <div style={{ margin: "16px 0" }}>
              <Title level={3}>{product.price}</Title>
              <Text>Stock: {product.stockAmount}</Text>
            </div>
            <Text type="secondary">
              Created At: {new Date(product.createdAt).toLocaleDateString()}
            </Text>
            <br />
            <Text type="secondary">
              Updated At: {new Date(product.updatedAt).toLocaleDateString()}
            </Text>
            <div style={{ marginTop: "16px" }}>
              <Button
                onClick={handleCart}
                type={isAdded ? "" : "primary"}
                size="large"
              >
                {isAdded ? "Added to cart" : "Add to Cart"}
              </Button>
              <Button style={{ marginLeft: "8px" }} size="large">
                Buy Now
              </Button>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Similar Products Section */}
      <div style={{ marginTop: "32px" }}>
        <Title level={3}>Similar Products</Title>
        <Row gutter={[16, 16]}>
          {similarProducts.map((product) => (
            <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
              <ProductCard {...product} key={product.id} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export async function detailsLoader({ params }) {
  const productId = params.productId;

  try {
    const { data, status } = await axios.get(
      `${import.meta.env.VITE_API_URL}/${productId}`
    );

    if (status !== 200 || !data) {
      throw new Error("Something went wrong while fetching the product.");
    }

    return data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
}
