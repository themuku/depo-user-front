import { Input } from "antd";
import { Controller } from "react-hook-form";

export default function CustomInput({
  placeholder = "Placeholder text",
  ...rest
}) {
  return (
    <Controller
      name={rest.name}
      control={rest.control}
      rules={rest.rules}
      render={({ field, fieldState }) => (
        <Input
          addonBefore={rest.addonBefore}
          prefix={rest.prefix}
          addonAfter={rest.addonAfter}
          {...field}
          placeholder={placeholder}
          className={fieldState.invalid ? "input-error" : ""}
        />
      )}
    />
  );
}
