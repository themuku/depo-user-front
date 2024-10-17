import { Button, Card, Flex, FloatButton, Typography } from "antd";
import { formatDescription } from "../../utils/format-description";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useStore } from "../../store";
const { Meta } = Card;
const { Text } = Typography;

export default function ProductCard({
  productName,
  description,
  price,
  isLoading,
  id,
}) {
  const favList = useStore((state) => state.favourites);
  const { addToFavList, removeFromFavList } = useStore.getState();
  const handleFavourites = () => {
    console.log("Added to favourites");
    addToFavList(id);
  };
  console.log(favList);

  const handleCart = () => {
    console.log("Added to cart");
    removeFromFavList(id);
  };

  const CardActions = [
    <Button
      shape="circle"
      onClick={handleFavourites}
      icon={<HeartOutlined />}
    />,
    <Button
      shape="circle"
      onClick={handleCart}
      icon={<ShoppingCartOutlined />}
    />,
  ];

  return (
    <Card
      style={{
        width: 300,
        // height: 340,
      }}
      cover={
        <img
          alt={productName}
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      loading={isLoading}
      actions={CardActions}
    >
      <Meta
        style={{ display: "flex", justifyContent: "space-between" }}
        title={productName}
        description={formatDescription(description)}
      />
      <Text className="product-price" strong>
        ${price}
      </Text>
    </Card>
  );
}
