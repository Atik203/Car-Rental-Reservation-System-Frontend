import React from "react";

interface CustomButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md bg-primary dark:bg-primary px-3.5 py-2.5 text-sm md:text-base font-medium md:font-semibold text-white shadow-sm hover:bg-[hsl(24.6,95%,43.1%)] dark:hover:bg-[hsl(20.5,90.2%,38.2%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(24.6,95%,43.1%)] dark:focus-visible:outline-[hsl(20.5,90.2%,38.2%)]"
    >
      {children}
    </button>
  );
};

export default CustomButton;
