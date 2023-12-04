import { Home, ShieldQuestion, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <main className="flex" style={{ height: "calc(100vh - 4rem)" }}>
      <section className="home-navbar w-[100%]  h-[100vh] flex-[25%] sm:block hidden">
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

      <section className="home-body flex-[50%] border border-x-primarycb">
        <div>home body</div>
      </section>

      <section className="flex-[25%] md:block hidden">
        <div> home sidebar</div>
      </section>
    </main>
  );
}

export default Homepage;
