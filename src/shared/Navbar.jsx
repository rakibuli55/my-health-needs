import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";
import CartIcon from "../assets/images/icon/cart.svg";
import { useForm } from "react-hook-form";
import { GoSearch } from "react-icons/go";
import HeaderBtn from "../components/HeaderComponents/HeaderBtn";

function Navbar() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <header className="py-[13px] px-9 flex justify-between bg-headerBg sticky top-0 left-0 w-full z-[50]">
      <div className="flex items-center justify-between">
        {/* header left  */}
        <div className="flex items-center gap-10">
          {/* logo  */}
          <div>
            <Link to={"/"}>
              <img
                data-aos="zoom-up"
                data-aos-duration="2000"
                className="h-[70px] w-[70px]"
                src={Logo}
                alt="Logo"
              />
            </Link>
          </div>
          {/* menus  */}
          <ul className="flex items-center gap-[30px]">
            <li data-aos="zoom-up" data-aos-duration="2000">
              <NavLink to={"/service"} className="menu-item">
                HealthCare Service
              </NavLink>
            </li>
            <li data-aos="zoom-up" data-aos-duration="2000">
              <NavLink to={"/howitworks"} className="menu-item">
                How it works
              </NavLink>
            </li>
            <li data-aos="zoom-up" data-aos-duration="2000">
              <NavLink to={"/faq"} className="menu-item">
                FAQ
              </NavLink>
            </li>
            <li data-aos="zoom-up" data-aos-duration="2000">
              <NavLink to={"/auth/login"} className="menu-item">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* header right  */}
      <div
        data-aos="zoom-left"
        data-aos-duration="2000"
        className="flex items-center gap-[18px]"
      >
        {/* search  */}
        <form onSubmit={handleSubmit(onSubmit)} className="relative w-[350px]">
          <input
            {...register("search")}
            type="text"
            name="search"
            placeholder="Search your remdies"
            className="py-[13px] px-6 bg-white w-full text-sm rounded-[40px] text-black focus:outline-none font-semibold"
          />
          <button
            type="submit"
            className="absolute top-[50%] right-[20px] h-6 w-6 translate-y-[-50%] text-[20px] text-headerSearchbarPlaceHolder"
          >
            <GoSearch />
          </button>
        </form>
        {/* cart  */}
        <div data-aos="zoom-left" data-aos-duration="2000">
          <Link
            to="/dashboard/user/user-homepage"
            className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full"
          >
            <img className="w-7 h-7" src={CartIcon} alt={CartIcon} />
          </Link>
        </div>
        {/* header btn  */}
        <div data-aos="zoom-left" data-aos-duration="2000">
          <Link to={"/auth/signup"}>
            <HeaderBtn text="Sign Up" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
