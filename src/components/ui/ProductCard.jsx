import { Card, Typography } from "antd";
const { Meta } = Card;
const { Text } = Typography;

export default function ProductCard({
  productName,
  description,
  price,
  isLoading,
}) {
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt={productName}
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      loading={isLoading}
    >
      <Meta title={productName} description={description} />
      <Text className="product-price" strong>
        ${price}
      </Text>
    </Card>
  );
}
