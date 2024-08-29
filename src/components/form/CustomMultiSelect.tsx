import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import MultipleSelector from "../ui/custom/customUI/MultipleSelector";

export type TCustomMultiSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
};

const CustomMultiSelect: FC<TCustomMultiSelectProps> = ({
  label,
  name,
  options,
  placeholder = "Select options",
  className,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      render={({ field, fieldState: { error } }) => (
        <div className="space-y-2">
          <label className="font-medium">{label}</label>
          <MultipleSelector
            options={options}
            value={field.value || []}
            onChange={field.onChange}
            placeholder={placeholder}
            className={`bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 ${className}`}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </div>
      )}
    />
  );
};

export default CustomMultiSelect;
