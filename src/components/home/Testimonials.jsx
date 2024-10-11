import { Avatar, Card, Carousel, Divider, Typography } from "antd";
import { USERS } from "../../users";
const { Meta } = Card;
const { Title } = Typography;

const feedbacks = [
  {
    id: 1,
    title: "Some example title",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, quia distinctio ab veritatis earum culpa veniam. Omnis nobis, exercitationem, iste, accusamus alias totam odit blanditiis quasi illo expedita deleniti velit reiciendis laborum at officia laudantium esse recusandae? Ea, possimus eaque.",
    avatarPath: "https://randomuser.me/api/portraits/men",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <Title>Testimonials</Title>
      <Divider />
      <Carousel autoplay arrows>
        {USERS.map((user) => {
          return (
            <Card key={user.id}>
              <Meta
                avatar={<Avatar src={`${user.avatarPath}/${user.id}.jpg`} />}
                title={user.title}
                description={user.description}
              />
            </Card>
          );
        })}
      </Carousel>
      <Divider />
    </section>
  );
}
