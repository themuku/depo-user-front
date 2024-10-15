import { Button, Divider, Flex, Input, Select, Typography } from "antd";

import {
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const { Option } = Select;
const { Title } = Typography;

export default function ContactForm() {
  const [prefix, setPrefix] = useState("099");
  const [mailDomain, setMailDomain] = useState("@gmail.com");

  const operatorPrefixes = (
    <Select
      defaultValue="add"
      value={prefix}
      onSelect={(value) => {
        setPrefix(value);
      }}
      style={{ width: 70 }}
    >
      <Option value="099">099</Option>
      <Option value="077">077</Option>
      <Option value="070">070</Option>
      <Option value="055">055</Option>
      <Option value="051">051</Option>
      <Option value="050">050</Option>
      <Option value="010">010</Option>
    </Select>
  );

  const mailDomains = (
    <Select
      defaultValue="add"
      value={mailDomain}
      onSelect={(value) => {
        setMailDomain(value);
      }}
    >
      <Option value="@gmail.com">@gmail.com</Option>
      <Option value="@mail.ru">@mail.ru</Option>
      <Option value="@yahoo.com">@yahoo.com</Option>
      <Option value="@outlook.com">@outlook.com</Option>
      <Option value="@icloud.com">@icloud.com</Option>
    </Select>
  );
  return (
    <form>
      <Title level={4}>You can get information about us below</Title>
      <Flex vertical>
        <Input placeholder="Your full name" prefix={<UserOutlined />} />
        <Divider />
        <Input
          style={{
            appearance: "",
          }}
          prefix={<PhoneOutlined />}
          addonBefore={operatorPrefixes}
        />
        <Divider />
        <Input
          placeholder="Your email"
          prefix={<MailOutlined />}
          addonAfter={mailDomains}
        />
        <Divider />
        <Button
          style={{
            marginTop: 70,
          }}
          icon={<SendOutlined />}
        >
          Get Information
        </Button>
      </Flex>
    </form>
  );
}
