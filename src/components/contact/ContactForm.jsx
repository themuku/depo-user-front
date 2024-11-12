import { Button, Divider, Flex, Input, Select, Typography } from "antd";

import {
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../ui/CustomInput";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const { Option } = Select;
const { Title } = Typography;

const schema = yup.object({
  fullName: yup.string().required(),
  phoneNumber: yup.string().length(10).required(),
  email: yup.string().email().required(),
});

export default function ContactForm() {
  const { handleSubmit, control, formState, getValues, setValue, reset } =
    useForm({
      resolver: yupResolver(schema),
    });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isSubmitted) return;

    const formattedEmail = getValues("email") + mailDomain;
    setValue("email", formattedEmail);

    const formattedPhoneNumber = prefix + getValues("phoneNumber");
    setValue("phoneNumber", formattedPhoneNumber);
  }, [isSubmitted]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-user`,
        {
          data,
        }
      );

      if (response.status !== 201) {
        console.log("Something went wrong");
      }

      console.log("Success", response.data);

      reset();
      setIsSubmitted(false);
    } catch (error) {
      console.log(error.message);
    }
  };

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title level={4}>You can get information about us below</Title>
      <Flex vertical>
        <CustomInput
          control={control}
          rules={{ required: true }}
          name="fullName"
          placeholder="Your full name"
          prefix={<UserOutlined />}
        />
        <Divider />
        <CustomInput
          onChange={(event) =>
            setValue("phoneNumber", `${prefix}${event.target.value}`)
          }
          name="phoneNumber"
          control={control}
          rules={{ required: true }}
          prefix={<PhoneOutlined />}
          addonBefore={operatorPrefixes}
        />
        <Divider />
        <CustomInput
          onChange={(event) =>
            setValue("email", `${event.target.value}${mailDomain}`)
          }
          rules={{ required: true }}
          control={control}
          name="email"
          placeholder="Your email"
          prefix={<MailOutlined />}
          addonAfter={mailDomains}
        />
        <Divider />
        <Button
          onClick={() => setIsSubmitted(!isSubmitted)}
          htmlType="submit"
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
