import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomButton from "@/components/ui/custom/customUI/CustomButton";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { authValidation } from "@/schemas/auth.validation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const defaultValues = {
  email: "atikurrahaman0305@gmail.com",
  password: "abcd",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Logging in...");

    try {
      const result = await Login(data).unwrap();
      if (result.success) {
        dispatch(setUser({ user: result.data, token: result.token }));
        toast.success(result.message, { id: toastId });
        navigate(`/${result.data.role}/dashboard`);
      } else {
        toast.error(result.message, { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong...", { id: toastId });
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col justify-center px-2 py-16">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
                Login in to your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                Don't have a account sign-up now?{" "}
                <Link
                  to={"/sign-up"}
                  className="font-semibold hover:underline text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Sign up
                </Link>
              </p>
            </div>
            <div className="mt-8">
              <div>
                <CustomForm
                  defaultValues={defaultValues}
                  onSubmit={onSubmit}
                  resolver={zodResolver(authValidation.loginValidationSchema)}
                >
                  <CustomInput name="email" label="email" />
                  <div className="relative w-full">
                    <CustomInput
                      name="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      style={{ top: "70%", transform: "translateY(-50%)" }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      )}
                    </div>
                  </div>
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
            <div className="mt-4">
              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                By signing in, you agree to our{" "}
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

export default Login;
