import { Button, Flex, Input, Typography } from "antd";
const { Title } = Typography;
import { MailOutlined } from "@ant-design/icons";

export default function SubscribeEmail() {
  return (
    <section className="newsletter-section">
      <form>
        <Flex gap={24} vertical align="center">
          <Title level={2}>Subscribe to the newsletter</Title>
          <Input
            className="newsletter-input"
            size="large"
            placeholder="Enter your email"
          />
          <Button icon={<MailOutlined />} variant="outlined" size="large">
            Subscribe
          </Button>
        </Flex>
      </form>
    </section>
  );
}
