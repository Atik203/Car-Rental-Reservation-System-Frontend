import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/">
      <div className="flex gap-1 flex-shrink-0 items-center">
        <img
          className="block h-8 md:h-10 w-auto lg:hidden"
          src="https://i.ibb.co/dbHXzBN/icons8-car-100.png"
          alt="shop"
        />
        <img
          className="hidden h-8 md:h-10 w-auto lg:block"
          src="https://i.ibb.co/dbHXzBN/icons8-car-100.png"
          alt="shop"
        />
        <div>
          <h1 className="text-primary font-bold text-lg md:text-xl">RentCar</h1>
        </div>
      </div>
    </Link>
  );
};

export default NavLogo;
