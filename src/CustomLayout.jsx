import { Outlet } from "react-router-dom";
import Header from "./components/layout/CustomHeader";
import Footer from "./components/layout/CustomFooter";
import { Layout } from "antd";
const { Content } = Layout;

export default function CustomLayout() {
  return (
    <Layout>
      <Header />
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
}
