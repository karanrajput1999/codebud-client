import { Home, ShieldQuestion, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

function HomepageNavbar() {
  return (
    <section
      className="home-navbar w-[100%] flex-[25%] sm:block hidden"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <nav className="mt-20">
        <ul className="flex flex-col items-end">
          <li className="mb-2 pl-5">
            <NavLink
              to="/homepage"
              className={({ isActive }) =>
                `w-64 h-14 pl-5 text-2xl font-bold ${
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
                `w-64 h-14 pl-5 text-2xl font-bold ${
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
                `w-64 h-14 pl-5 text-2xl font-bold ${
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

export default HomepageNavbar;
