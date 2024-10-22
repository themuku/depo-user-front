import { Divider, Layout, Typography } from "antd";
import Products from "../components/products/Products";
import { useStore } from "../store";

const { Content } = Layout;
const { Title } = Typography;

export default function CartPage() {
  const { cart } = useStore((state) => state.cart);

  return (
    <Content
      style={{
        padding: "0 48px",
        height: "100vh",
      }}
    >
      <Title
        style={{
          marginTop: 40,
        }}
        level={1}
      >
        Cart
      </Title>
      <Divider />
      {cart.length > 0 ? (
        <Products products={cart} />
      ) : (
        <Title level={3}>No products found!</Title>
      )}
    </Content>
  );
}
