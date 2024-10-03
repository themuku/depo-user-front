import { Layout } from "antd";
const { Footer } = Layout;

export default function CustomFooter() {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      MCE-2 ©{new Date().getFullYear()} Created by JET
    </Footer>
  );
}
