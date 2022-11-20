import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useScrollPosition } from "../hooks/useScrollPosition";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={`w-full flex justify-between items-center navbar ${classNames(
        scrollPosition > 0 ? "py-2" : "py-4",
        "transition-all duration-100"
      )} `}
    >
      <img src={logo} alt="hatchtank" className="w-[180px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] active-link ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-dimBlack`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] active-link-mobile ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-dimBlack`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
