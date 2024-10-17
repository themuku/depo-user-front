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
        {/* <TestComponent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit cumque eius similique. Distinctio, praesentium ab
            minima perspiciatis dicta, sapiente architecto, voluptatum voluptas
            nobis eaque quo sunt placeat! Mollitia, ducimus tempore!
          </p>
        </TestComponent> */}
      </Content>
      <SubscribeEmail />
    </>
  );
}

// function TestComponent({ children }) {
//   return (
//     <>
//       <h1>Test title</h1>
//       {children}
//       <h2>Second test title</h2>
//     </>
//   );
// }
