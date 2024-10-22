import { Button, Card, Flex, FloatButton, Typography } from "antd";
import { formatDescription } from "../../utils/format-description";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useStore } from "../../store";
import { useEffect, useState } from "react";
const { Meta } = Card;
const { Text } = Typography;

export default function ProductCard({
  productName,
  description,
  price,
  isLoading,
  id,
}) {
  const [isFav, setIsFav] = useState(false);

  const favList = useStore((state) => state.favourites);
  const cartList = useStore((state) => state.cart);
  const { addToFavList, removeFromFavList, addToCart, removeFromCart } =
    useStore.getState();

  useEffect(() => {
    const foundIndex = favList.findIndex((product) => product.id === id);

    if (foundIndex !== -1) setIsFav(true);
    else setIsFav(false);
  }, [favList]);

  const handleFavourites = () => {
    if (!isFav) {
      addToFavList({ productName, description, price, id });
    } else {
      removeFromFavList(id);
    }
  };

  const handleCart = () => {
    addToCart({ productName, description, price, id });
    // TODO: add toast success or error here
  };

  const CardActions = [
    <Button
      className={`${isFav ? "fav-btn-active" : ""}`}
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
