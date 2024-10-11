import { Layout } from "antd";
import HeroSection from "../components/home/HeroSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import NewProducts from "../components/home/NewProducts";
import Testimonials from "../components/home/Testimonials";
import SubscribeEmail from "../components/home/SubscribeEmail";

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
        <Testimonials />
        <NewProducts />
      </Content>
      <SubscribeEmail />
    </>
  );
}
