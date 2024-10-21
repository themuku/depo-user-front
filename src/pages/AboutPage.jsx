import { Button } from "antd";

export default function AboutPage() {
  return (
    <div style={{ height: "640px" }}>
      <h1 style={{ marginLeft: "785px" }}>About Us</h1>
      <hr
        style={{
          width: "120px",
          marginLeft: "785px",
          border: "2px solid #419d4c",
        }}
      />
      <p style={{ marginTop: "30px", marginLeft: "630px", color: "#b6b6b6" }}>
        On This Site You Can See Advertisements, Products, People's Opinions
        ......
      </p>
      <h1 style={{ fontSize: "24px", marginLeft: "750px", marginTop: "150px" }}>
        Welcome to the About section
      </h1>
      <div>
        <img
          style={{
            height: "400px",
            width: "500px",
            marginLeft: "220px",
            marginTop: "-100px",
          }}
          src="https://www.4pl.com.tr/wp-content/uploads/2019/09/dar_koridor_raf_sistemi_17.jpg"
          alt=""
        />
      </div>
      <div style={{ marginLeft: "750px", marginTop: "-300px" }}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium,{" "}
          <br />
          perspiciatis, vitae, quos vel quae asperiores error obcaecati numquam{" "}
          <br />
          reprehenderit natus eum pariatur facilis molestiae! Non deserunt{" "}
          <br />
          explicabo ipsum reiciendis amet sed quisquam suscipit voluptate fuga{" "}
          <br />
          corporis in molestiae, eum maxime eos rerum eius, odio mollitia illo{" "}
          <br />
          facilis eligendi nemo ut!
        </p>
        <Button
          style={{
            backgroundColor: "green",
            color: "#ffff",
            marginTop: "20px",
          }}
          variant="contained"
        >
          Contained
        </Button>
      </div>
    </div>
  );
}
