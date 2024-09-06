import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { getMonth, getYear } from "date-fns";
import moment from "moment";
import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useFormContext } from "react-hook-form";

type TCustomDatePickerProps = {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
};

const CustomDatePicker: FC<TCustomDatePickerProps> = ({
  name,
  label,
  placeholder,
  className,
  required = false,
}) => {
  const { control } = useFormContext();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const years = Array.from(
    { length: getYear(new Date()) - 1990 + 1 },
    (_, i) => 1990 + i
  );
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field, fieldState: { error } }) => (
        <FormItem className="w-full">
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <div className="relative">
              <DatePicker
                {...field}
                showIcon
                required={required}
                icon={<CalendarIcon className="w-10 h-10 mt-1 ml-2 " />}
                dateFormat={"dd-MM-yyyy"}
                selected={startDate}
                onChange={(date) => {
                  if (date) {
                    const formattedDate = moment(date).format("DD-MM-YYYY");
                    field.onChange(formattedDate);
                    setStartDate(date);
                  } else {
                    field.onChange(null);
                    setStartDate(null);
                  }
                }}
                placeholderText={placeholder || name}
                className={`bg-gray-100 h-10 text-center rounded-md cursor-pointer border-gray-300 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-200  ${className}`}
                autoComplete="on"
                isClearable
                renderCustomHeader={({
                  date,
                  changeYear,
                  changeMonth,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => (
                  <div className="flex items-center justify-center space-x-3">
                    <button
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                      className="font-bold text-lg"
                    >
                      {"<"}
                    </button>
                    <select
                      className="text-center p-1"
                      value={getYear(date)}
                      onChange={({ target: { value } }) =>
                        changeYear(Number(value))
                      }
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <select
                      className="text-center p-1"
                      value={months[getMonth(date)]}
                      onChange={({ target: { value } }) =>
                        changeMonth(months.indexOf(value))
                      }
                    >
                      {months.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                      className="font-bold text-lg"
                    >
                      {">"}
                    </button>
                  </div>
                )}
              />
            </div>
          </FormControl>
          {error && <FormMessage>{error.message}</FormMessage>}
        </FormItem>
      )}
    />
  );
};

export default CustomDatePicker;
