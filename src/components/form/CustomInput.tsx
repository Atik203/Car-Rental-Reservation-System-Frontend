import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TCustomInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
};

const CustomInput: FC<TCustomInputProps> = ({
  name,
  label,
  placeholder,
  type = "text",
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input {...field} placeholder={placeholder || name} type={type} />
          </FormControl>
          {error && <FormMessage>{error.message}</FormMessage>}
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
