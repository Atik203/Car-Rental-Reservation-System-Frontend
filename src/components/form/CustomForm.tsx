/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, unknown>;
  resolver?: any;
};

type TCustomFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const CustomForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TCustomFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        className="space-y-6 w-full"
        onSubmit={methods.handleSubmit(submit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default CustomForm;
