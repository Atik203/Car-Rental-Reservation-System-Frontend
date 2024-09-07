import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TCustomTextareaProps = {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  rows?: number;
};

const CustomTextarea: FC<TCustomTextareaProps> = ({
  name,
  label,
  placeholder,
  className,
  required = false,
  rows = 4,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <FormItem className="w-full">
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea
              {...field}
              placeholder={placeholder || name}
              required={required}
              rows={rows}
              className={`bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-md px-3.5 py-2 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-500 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
            />
          </FormControl>
          {error && <FormMessage>{error.message}</FormMessage>}
        </FormItem>
      )}
    />
  );
};

export default CustomTextarea;
