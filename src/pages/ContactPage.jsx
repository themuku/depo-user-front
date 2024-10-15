import { Col, Layout, Row, Typography } from "antd";
import ContactMap from "../components/contact/contact-map/ContactMap";
import ContactForm from "../components/contact/ContactForm";

const { Content } = Layout;
const { Title } = Typography;

export default function ContactPage() {
  return (
    <>
      <Content
        style={{
          padding: "48px 48px",
        }}
      >
        <Title level={1}>Contact us</Title>
        <Row gutter={32}>
          <Col
            span={18}
            style={{
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <ContactMap />
          </Col>
          <Col
            span={6}
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: 20,
            }}
          >
            <ContactForm />
          </Col>
        </Row>
      </Content>
    </>
  );
}
