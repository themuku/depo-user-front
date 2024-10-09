import { Outlet } from "react-router-dom";
import Header from "./components/layout/CustomHeader";
import Footer from "./components/layout/CustomFooter";
import { Layout } from "antd";
const { Content } = Layout;

export default function CustomLayout() {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer />
    </Layout>
  );
}
