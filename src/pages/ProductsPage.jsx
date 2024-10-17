import { Divider, Layout, Typography } from "antd";
import Products from "../components/products/Products";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const { Content } = Layout;
const { Title } = Typography;

export default function ProductsPage() {
  const productsData = useLoaderData();

  return (
    <Content
      style={{
        padding: "0 48px",
      }}
    >
      <Title
        style={{
          marginTop: 40,
        }}
        level={1}
      >
        Products
      </Title>
      <Divider />
      <Products products={productsData} />
    </Content>
  );
}

export async function productsLoader() {
  const { data, status } = await axios.get(
    `${import.meta.env.VITE_API_URL}/all`
  );

  if (status !== 200) {
    throw new Error("Something went wrong during fetching products");
  }

  if (data.length <= 0) {
    throw new Error("There is no found products");
  }

  return data;
}
