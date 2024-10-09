import { Carousel, Typography } from "antd";
const { Title } = Typography;

export default function HeroSection() {
  return (
    <>
      <Carousel
        style={{
          zIndex: 0,
        }}
        autoplay
      >
        <div className="carousel-slide-custom">
          <img src="/logitech.jpg" />
          <Title className="carousel-slide-title">
            Logitech g pro wireless
          </Title>
        </div>
        <div className="carousel-slide-custom">
          <img src="/iphone.jpg" />
          <Title className="carousel-slide-title">New iPhone 16 pro max</Title>
        </div>
        <div className="carousel-slide-custom">
          <img src="/razer-keyboard.jpg" />
          <Title className="carousel-slide-title">
            Razer huntsman v3 pro keyboard
          </Title>
        </div>
        <div className="carousel-slide-custom">
          <img src="/e60.jpg" />
          <Title className="carousel-slide-title">BMW E60 M5</Title>
        </div>
        <div className="carousel-slide-custom">
          <img src="/iphone11.jpeg" />
          <Title className="carousel-slide-title">
            iPhone 11 pro midnight green
          </Title>
        </div>
        <div className="carousel-slide-custom">
          <img src="/kawasaki.jpg" />
          <Title className="carousel-slide-title">Kawasaki ninja 400</Title>
        </div>
      </Carousel>
    </>
  );
}
