import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomButton from "@/components/ui/custom/customUI/CustomButton";

import { Helmet } from "react-helmet-async";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen mt-10 dark:bg-gray-900">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col justify-center px-2">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
                Login in to your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                Not a member?{" "}
                <Link
                  to={"/sign-up"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Sign up
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
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div>
                    <CustomButton className="w-full" type="submit">
                      Login
                    </CustomButton>
                  </div>
                </CustomForm>
              </div>
              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200 dark:border-gray-700" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#4285F4] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4]"
                  >
                    <FaGoogle className="h-5 w-5" />
                    <span className="text-sm font-semibold leading-6">
                      Google
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F] dark:bg-gray-700"
                  >
                    <FaGithub className="h-5 w-5" />
                    <span className="text-sm font-semibold leading-6">
                      GitHub
                    </span>
                  </a>
                </div>
              </div>
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

export default Login;
