import { Divider, Layout, Typography } from "antd";
import Products from "../components/products/Products";
import { useStore } from "../store";

const { Content } = Layout;
const { Title } = Typography;

export default function FavouritesPage() {
  const favList = useStore((state) => state.favourites);

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
        Favourites
      </Title>
      <Divider />
      {favList.length > 0 ? (
        <Products products={favList} />
      ) : (
        <Title level={3}>No products found!</Title>
      )}
    </Content>
  );
}
