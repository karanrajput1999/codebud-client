import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Home, ShieldQuestion, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

interface mobileNavbarTypes {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function HomepageMobileNavbar({ isOpen, setIsOpen }: mobileNavbarTypes) {
  return (
    <section
      className={cn(
        "home-mobile-navbar h-[100vh] w-52 bg-white border-r border-primarycb flex-[25%] absolute top-0 left-0  md:hidden transition-all duration-300",
        isOpen ? "translate-x-[0rem]" : "translate-x-[-13rem]"
      )}
    >
      <div className="h-[4rem] flex items-center ml-2">
        <button onClick={() => setIsOpen(false)}>
          <ChevronLeft />
        </button>
      </div>

      <nav className="mt-20">
        <ul className="flex flex-col items-end">
          <li className="mb-2 pl-5">
            <NavLink
              to="/homepage"
              className={({ isActive }) =>
                `w-40 h-11 pl-5 text-xl font-bold ${
                  isActive
                    ? "text-white bg-primarycb rounded-l-xl"
                    : "text-black"
                }   flex justify-start items-center `
              }
            >
              <span className="flex items-center gap-3">
                {" "}
                <Home /> Home
              </span>
            </NavLink>
          </li>
          <li className="mb-2 pl-5">
            <NavLink
              to="/questions"
              className={({ isActive }) =>
                `w-40 h-11 pl-5 text-xl font-bold ${
                  isActive
                    ? "text-white bg-primarycb rounded-l-xl"
                    : "text-black"
                }   flex justify-start items-center `
              }
            >
              <span className="flex items-center gap-3">
                <ShieldQuestion /> Questions
              </span>
            </NavLink>
          </li>
          <li className="mb-2 pl-5">
            {" "}
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `w-40 h-11 pl-5 text-xl font-bold ${
                  isActive
                    ? "text-white bg-primarycb rounded-l-xl"
                    : "text-black"
                }   flex justify-start items-center `
              }
            >
              <span className="flex items-center gap-3">
                {" "}
                <Users /> Users
              </span>
            </NavLink>{" "}
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default HomepageMobileNavbar;
