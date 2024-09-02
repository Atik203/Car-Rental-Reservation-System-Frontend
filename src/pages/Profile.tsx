import CustomButton from "@/components/ui/custom/customUI/CustomButton";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";

const Profile = () => {
  const user = useAppSelector(useCurrentUser);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className=" p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <img
            className="h-24 w-24 rounded-full border-4 border-indigo-500"
            src="https://img.icons8.com/officel/32/test-account.png"
            alt="test-account"
          />
          <div className="mt-4 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              {user?.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
          </div>
        </div>
        <div className="mb-6 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Role:</strong> {user?.role}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Phone:</strong> {user?.phone}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Address:</strong> {user?.address}
          </p>
        </div>
        <div className="flex justify-center">
          <CustomButton>Edit Profile</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
