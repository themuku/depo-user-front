import { Layout } from "antd";
import ContactMap from "../components/contact/ContactMap";
const { Content } = Layout;

export default function ContactPage() {
  return (
    <>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <ContactMap />
        {/* <ContactForm /> */}
      </Content>
    </>
  );
}
