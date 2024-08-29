import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomButton from "@/components/ui/custom/customUI/CustomButton";

import { Helmet } from "react-helmet-async";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col justify-center px-2 py-16">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
                Sign up your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-semibold hover:underline text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Login
                </Link>
              </p>
            </div>
            <div className="mt-8">
              <div>
                <CustomForm onSubmit={onSubmit}>
                  <CustomInput name="userName" label="Username" />
                  <CustomInput name="password" label="Password" type={"text"} />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-indigo-500"
                      />
                      <Link to={"/terms-conditions"}>
                        <label
                          htmlFor="remember-me"
                          className="ml-3 block text-sm leading-6 text-gray-700 dark:text-gray-300"
                        >
                          Term and Conditions
                        </label>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <CustomButton className="w-full" type="submit">
                      Sign up
                    </CustomButton>
                  </div>
                </CustomForm>
              </div>
            </div>
            <div className="mt-4">
              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                By signing up, you agree to our{" "}
                <Link
                  to={"/privacy-policy"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  to={"/terms-conditions"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 w-3/4 object-cover mx-auto"
            src="https://i.ibb.co/JRSm35S/login.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
