import { Button, Col, Flex, Row } from "antd";
import ProductCard from "../ui/ProductCard";
import { useMemo, useState } from "react";

export default function Products({ products }) {
  const [cardCount, setCardCount] = useState(0);

  const showedCards = useMemo(() => {
    return products.slice(0, 12 + cardCount);
  }, [cardCount, products]);

  return (
    <Flex vertical gap={40}>
      <Row gutter={[16, 16]}>
        {showedCards.map((product, index) => {
          return (
            <Col key={product.id} span={6}>
              <ProductCard {...product} />
            </Col>
          );
        })}
      </Row>
      {showedCards.length !== products.length ? (
        <Button
          style={{
            alignSelf: "center",
            // backgroundColor: "#001529",
            // color: "white",
          }}
          onClick={() => setCardCount(cardCount + 4)}
          size="large"
        >
          Show more
        </Button>
      ) : (
        ""
      )}
    </Flex>
  );
}
