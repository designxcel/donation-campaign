import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import BG from "../Navbar/BG.png";
import Banner from "./Banner";


const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="flex flex-col md:flex-row justify-between items-center mb-10 px-4">
          {/* <div></div> */}
          <Logo></Logo>
          <ul className="flex gap-10 text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline font-bold"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/donations"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline font-bold"
                    : ""
                }
              >
                Donations
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline font-bold"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
