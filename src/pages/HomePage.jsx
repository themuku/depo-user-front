import { Layout } from "antd";
import HeroSection from "../components/home/HeroSection";
import FeaturedProducts from "../components/home/FeaturedProducts";

const { Content } = Layout;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <FeaturedProducts />
      </Content>
    </>
  );
}
